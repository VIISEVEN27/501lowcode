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

    async save(newOperations: Operation[], id: string) {
        const count = await redis.rpush(id, ...newOperations.map((operation) => JSON.stringify(operation)))
        if (count > 20) {
            this._update(id)
        }
    }

    @multiDebounce(500, 5000)
    _update(@key("multiDebounce") id: string) {
        const key = String(id)
        redis.multi().lrange(key, 0, -21).ltrim(key, -20, -1).exec().then((results) => {
            const operations: Operation[] = (results[0][1] as string[]).map((item) => JSON.parse(item))
            // this.pageService.update(operations, id)
        })
    }
}
