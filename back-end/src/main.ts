/*
 * @Author: yky
 * @Date: 2022-07-30 08:51:36
 * @LastEditTime: 2022-08-02 13:57:17
 */
import {NestFactory} from "@nestjs/core"
import {AppModule} from "./app.module"
import {MongoDB} from "./db/mongo.db"
import {ConfigUtil} from "./utils/config.util"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const port = ConfigUtil.get("http.port")
    await app.listen(port)
    await MongoDB.connect()
}

bootstrap()
