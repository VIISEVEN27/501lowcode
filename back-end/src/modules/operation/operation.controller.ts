import {Body, Controller, Logger, Post} from "@nestjs/common"
import {Operation} from "./operation.entity"
import {OperationService} from "./operation.service"

@Controller()
export class OperationController {
    private readonly logger = new Logger(OperationService.name)

    constructor(private readonly service: OperationService) {
    }

    @Post("/save")
    async save(@Body() operation: Operation) {
        try {
            await this.service.save(operation, 0)
            this.logger.log("保存成功：" + JSON.stringify(operation))
            return {success: true, msg: "保存成功"}
        } catch (e) {
            this.logger.error("保存失败：" + e)
            return {success: false, msg: "保存失败"}
        }
    }
}