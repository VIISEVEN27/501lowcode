import {NestFactory} from "@nestjs/core"
import {AppModule} from "./app.module"
import {ConfigUtil} from "./utils/config.util"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const port = ConfigUtil.getInstance().get("http.port")
    await app.listen(port as number)
}

bootstrap()