import {ConfigUtil} from "./config.util"

describe("ConfigUtil", () => {
    it("should return a number", () => {
        expect(ConfigUtil.get("db.mongo.port")).toBe(27018)
    })

    it("should return a object", () => {
        expect(ConfigUtil.get("db.redis")).toEqual({
            host: "localhost",
            port: 6478,
            password: "123456",
            database: 0,
        })
    })

    it("should return undefined", () => {
        expect(ConfigUtil.get("db.redis.username")).toBeUndefined()
    })
})