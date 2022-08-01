import {Injectable, Logger} from "@nestjs/common"
import redis from "../../db/redis.db"
import {key, multiDebounce} from "../../utils/decoration.util"
import {PageService} from "../page/page.service"
import {Operation} from "./operation.entity"

@Injectable()
export class OperationService {
    private readonly logger = new Logger(OperationService.name)

    constructor(private readonly pageService: PageService) {
    }

    async save(newOperations: Operation[], userId: number) {
        const key = String(userId)
        const count = await redis.rpush(key, ...newOperations.map((operation) => JSON.stringify(operation)))
        if (count >= 20) {
            await this._update(userId)
        }
    }

    @multiDebounce(500, 5000)
    async _update(@key("multiDebounce") userId: number) {
        const key = String(userId)
        const operations: Operation[] = (await redis.lrange(key, 0, -1)).map((item) => JSON.parse(item))
        await redis.ltrim(key, operations.length, -1)
        await this.pageService.update(operations, userId)
    }
}
