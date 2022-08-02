import {ConfigUtil} from "./config.util"

describe("ConfigUtil", () => {
    let config: ConfigUtil

    beforeEach(() => {
        config = ConfigUtil.getInstance()
    })

    it("should return a number", () => {
        expect(config.get("db.mongo.port")).toBe(27018)
    })

    it("should return a object", () => {
        expect(config.get("db.redis")).toEqual({
            host: "localhost",
            port: 6478,
            password: "123456",
            database: 0,
        })
    })

    it("should return undefined", () => {
        expect(config.get("db.redis.username")).toBeUndefined()
    })
})