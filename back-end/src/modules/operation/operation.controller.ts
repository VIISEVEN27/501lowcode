import {Body, Controller, Logger, Post} from "@nestjs/common"
import {Operation} from "./operation.entity"
import {OperationService} from "./operation.service"

interface Body {
    id: string
    data: Operation[]
    md5: string
}

@Controller()
export class OperationController {
    private readonly logger = new Logger(OperationController.name)

    constructor(private readonly service: OperationService) {
    }

    @Post("/save")
    async save(@Body() body: Body) {
        try {
            await this.service.save(body.data, body.id)
            this.logger.log("保存成功：" + JSON.stringify(body.data))
            return {success: true, msg: "保存成功"}
        } catch (e) {
            this.logger.error("保存失败：" + e)
            return {success: false, msg: "保存失败"}
        }
    }
}