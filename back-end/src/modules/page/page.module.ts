import {Module} from "@nestjs/common"
import {PageService} from "./page.service"

@Module({
    providers: [PageService],
    exports: [PageService],
})
export class PageModule {
}