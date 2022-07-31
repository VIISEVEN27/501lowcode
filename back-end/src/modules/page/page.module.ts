import {Module} from "@nestjs/common"
import {MongooseModule} from "@nestjs/mongoose"
import {PageSchema} from "./page.schema"
import {PageService} from "./page.service"

@Module({
    imports: [MongooseModule.forFeature([{name: "Page", schema: PageSchema}])],
    providers: [PageService],
})
export class PageModule {
}
