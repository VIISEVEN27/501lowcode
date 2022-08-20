import {NestFactory} from "@nestjs/core"
import {NestExpressApplication} from "@nestjs/platform-express"
import {AppModule} from "./app.module"
import {MongoDB} from "./db/mongo.db"
import {ConfigUtil} from "./utils/config.util"

async function bootstrap() {
    await MongoDB.connect()
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    app.useStaticAssets("public")
    const port = ConfigUtil.get("http.port")
    await app.listen(port)
}

bootstrap()