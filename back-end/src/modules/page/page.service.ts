import {Injectable, Logger} from "@nestjs/common"
import {ObjectId} from "mongodb"
import {MongoDB} from "../../db/mongo.db"
import {Operation} from "../operation/operation.entity"
import {Page} from "./page.entity"

@Injectable()
export class PageService {
    private readonly logger = new Logger(PageService.name)
    private readonly collection = MongoDB.collection("pages")

    async create() {
        const newPage: Page = {title: "未命名页面", body: []}
        const result = await this.collection.insertOne(newPage)
        return result.insertedId.toHexString()
    }

    async update(operations: Operation[], id: string) {
        this.logger.log(`更新页面：共${operations.length}条记录`)
        for (let operation of operations) {
            if (operation.type === "insert") {
                const lastDotIndex = operation.key.lastIndexOf(".")
                const pushOperation = new Map<string, any>()
                pushOperation.set(operation.key.substring(0, lastDotIndex), {
                    $each: [operation.value],
                    $position: parseInt(operation.key.substring(lastDotIndex + 1)),
                })
                await this.collection.updateOne({_id: new ObjectId(id)}, {$push: pushOperation})
            } else if (operation.type === "update") {
                const setOperation = new Map<string, any>()
                setOperation.set(operation.key, operation.value)
                await this.collection.updateOne({_id: new ObjectId(id)}, {$set: setOperation})
            } else if (operation.type === "delete") {
                const pullOperation = new Map<string, any>()
                pullOperation.set(operation.key, operation.value)
                await this.collection.updateOne({_id: new ObjectId(id)}, {$pull: pullOperation})
            }
        }
    }
}