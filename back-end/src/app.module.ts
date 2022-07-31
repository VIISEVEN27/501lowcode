import {Module} from "@nestjs/common"
import {MongooseModule} from "@nestjs/mongoose"
import {ComponentModule} from "./modules/component/component.module"
import {OperationModule} from "./modules/operation/operation.module"
import {PageModule} from "./modules/page/page.module"
import {ConfigUtil} from "./utils/config.util"

const {username, password, host, port, database} = ConfigUtil.getInstance().get("db.mongodb")

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`),
        OperationModule,
        ComponentModule,
        PageModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
