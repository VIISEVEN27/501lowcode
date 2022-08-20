import {Controller, Get, Logger, Query, Res} from "@nestjs/common"
import {PageService} from "./page.service"
import {PassThrough} from "stream"

@Controller()
export class PageController {
    private readonly logger = new Logger(PageController.name)

    constructor(private readonly service: PageService) {
    }

    @Get("new")
    async create() {
        return await this.service.create()
    }

    @Get("page")
    async query(@Query("id") id: string) {
        return await this.service.query(id)
    }

    @Get("download")
    async download(@Query("id") id: string, @Res() res) {
        const page = await this.service.query(id)
        const buffer = await this.service.generate(page)
        const stream = new PassThrough()
        stream.end(buffer)
        res.setHeader("Content-Type", "application/octet-stream")
        res.setHeader(
            "Content-Disposition",
            `attachment; filename=${encodeURIComponent(page.title + ".zip")}`,
        )
        stream.pipe(res)
    }
}