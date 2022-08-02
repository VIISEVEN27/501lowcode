import {Test, TestingModule} from "@nestjs/testing"
import {MongoDB} from "../../db/mongo.db"
import {Operation} from "../operation/operation.entity"
import {PageService} from "./page.service"

describe("PageService", () => {
    let service: PageService

    beforeEach(async () => {
        await MongoDB.connect()
        const module: TestingModule = await Test.createTestingModule({
            providers: [PageService],
        }).compile()
        service = module.get<PageService>(PageService)
    })

    it("should create a document", async () => {
        const id = await service.create()
        console.log(id)
        expect(id).toMatch(/[\w\d]{24}/)
    })

    it("should insert a component", async () => {
        const operation: Operation = {
            type: "insert",
            key: "body.children.0",
            value: {
                name: "title0",
                type: "h1",
                children: [],
            },
            time: new Date(),
        }
        expect(await service.update([operation], "62e8082ed6df534f6f3ce087")).toBe(true)
    })

    it("should update a component", async () => {
        const operation: Operation = {
            type: "update",
            key: "body.children.0.type",
            value: "h2",
            time: new Date(),
        }
        expect(await service.update([operation], "62e8082ed6df534f6f3ce087")).toBe(true)
    })
})
