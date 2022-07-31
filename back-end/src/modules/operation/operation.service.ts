import {Injectable} from "@nestjs/common"
import redis from "../../db/redis.db"
import {PageService} from "../page/page.service"
import {Operation} from "./operation.entity"

@Injectable()
export class OperationService {
    constructor(private readonly pageService: PageService) {
    }

    async save(newOperations: Operation[], userId: number) {
        const key = String(userId)
        const count = await redis.rpush(key, ...newOperations.map((operation) => JSON.stringify(operation)))
        if (count >= 20) {
            const oldOperations: Operation[] = []
            while (await redis.llen(key) > 0) {
                oldOperations.push(JSON.parse(await redis.lpop(key)))
            }
            await this.pageService.update(oldOperations, userId)
        }
    }
}
