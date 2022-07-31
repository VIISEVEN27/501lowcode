import {Module} from "@nestjs/common"
import {PageModule} from "../page/page.module"
import {OperationController} from "./operation.controller"
import {OperationService} from "./operation.service"

@Module({
    imports: [PageModule],
    controllers: [OperationController],
    providers: [OperationService],
})
export class OperationModule {
}
