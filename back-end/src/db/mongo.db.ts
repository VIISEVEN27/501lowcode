import {ConfigUtil} from "../utils/config.util"

const {username, password, host, port, database} = ConfigUtil.getInstance().get("db.mongodb")
const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`