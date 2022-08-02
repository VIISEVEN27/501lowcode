import {Test, TestingModule} from "@nestjs/testing"
import {MongoDB} from "../../db/mongo.db"
import {Operation} from "../operation/operation.entity"
import {PageService} from "./page.service"

describe("PageService", () => {
    let service: PageService
    let id: string

    beforeEach(async () => {
        await MongoDB.connect()
        const module: TestingModule = await Test.createTestingModule({
            providers: [PageService],
        }).compile()
        service = module.get<PageService>(PageService)
    })

    it("should create a document", async () => {
        expect(async () => {
            id = await service.create()
            console.log(id)
        }).not.toThrow()
    })

    it("should insert a component", async () => {
        const operation: Operation = {
            type: "insert",
            key: "body.0",
            value: {
                name: "title0",
                type: "h1",
                children: [],
            },
            time: new Date(),
        }
        expect(async () => await service.update([operation], id)).not.toThrow()
    })

    it("should update a component", async () => {
        const operation: Operation = {
            type: "update",
            key: "body.0.type",
            value: "h2",
            time: new Date(),
        }
        expect(async () => await service.update([operation], id)).not.toThrow()
    })

    it("should delete a component", async () => {
        const operation: Operation = {
            type: "delete",
            key: "body",
            value: {
                name: "title0",
            },
            time: new Date(),
        }
        expect(async () => await service.update([operation], id)).not.toThrow()
    })
})
