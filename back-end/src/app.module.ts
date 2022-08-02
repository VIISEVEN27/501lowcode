import {Module} from "@nestjs/common"
import {OperationModule} from "./modules/operation/operation.module"
import {PageModule} from "./modules/page/page.module"

@Module({
    imports: [OperationModule, PageModule],
})
export class AppModule {
}
