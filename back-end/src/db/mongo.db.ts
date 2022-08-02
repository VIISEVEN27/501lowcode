import {Db, MongoClient} from "mongodb"
import {ConfigUtil} from "../utils/config.util"

const {username, password, host, port, database} = ConfigUtil.get("db.mongo")
const uri = `mongodb://${username}:${password}@${host}:${port}/?authSource=admin`

export class MongoDB {
    private static client: MongoClient
    private static db: Db

    static async connect() {
        this.client = new MongoClient(uri)
        await this.client.connect()
        this.db = this.client.db(database)
    }

    static async disconnect() {
        await this.client.close()
    }

    static collection(name: string) {
        return this.db.collection(name)
    }
}