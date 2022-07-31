import {Injectable} from "@nestjs/common"
import redis from "../../db/redis.db"
import {PageService} from "../page/page.service"
import {Operation} from "./operation.entity"

@Injectable()
export class OperationService {
    constructor(private readonly pageService: PageService) {
    }

    async save(operation: Operation, userId: number) {
        const key = String(userId)
        const count = await redis.rpush(key, JSON.stringify(operation))
        if (count >= 20) {
            const operations: Operation[] = []
            while (await redis.llen(key) > 0) {
                operations.push(JSON.parse(await redis.lpop(key)))
            }
            await this.pageService.update(operations, userId)
        }
    }
}
