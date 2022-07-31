import {Injectable, Logger} from "@nestjs/common"
import {Operation} from "../operation/operation.entity"

@Injectable()
export class PageService {
    private readonly logger = new Logger(PageService.name)

    async update(operations: Operation[], userId: number) {
        this.logger.log(`更新页面：共${operations.length}条记录`)
    }
}