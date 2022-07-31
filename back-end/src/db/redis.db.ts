import Redis from "ioredis"
import {ConfigUtil} from "../utils/config.util"

const {host, port, password, database} = ConfigUtil.getInstance().get("db.redis")

const redis = new Redis({
    host,
    port,
    password,
    db: database,
})

export default redis