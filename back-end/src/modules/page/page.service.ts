import {Injectable, Logger} from "@nestjs/common"
import {ObjectId} from "mongodb"
import {resolve} from "path"
import {MongoDB} from "../../db/mongo.db"
// import {Operation} from "../operation/operation.entity"
import {IComponent, IPage} from "./page.entity"
import * as fs from "fs"
import * as JSZip from "jszip"
import * as lodash from "lodash"

@Injectable()
export class PageService {
    private readonly logger = new Logger(PageService.name)
    private readonly collection = MongoDB.collection("pages")

    async create() {
        const newPage: IPage = {title: "未命名页面", name: "root", type: "UIPage", children: [], time: new Date()}
        const result = await this.collection.insertOne({data: newPage})
        newPage.id = result.insertedId.toHexString()
        return newPage
    }

    async query(id: string) {
        const document = await this.collection.findOne<{ _id: ObjectId, data: IPage }>({_id: new ObjectId(id)})
        const page = document.data
        page.id = id
        return page
    }

    // async update(operations: Operation[], id: string) {
    //     this.logger.log(`更新页面：共${operations.length}条记录`)
    //     for (let operation of operations) {
    //         if (operation.type === "insert") {
    //             const lastDotIndex = operation.key.lastIndexOf(".")
    //             const pushOperation = new Map<string, any>()
    //             pushOperation.set(operation.key.substring(0, lastDotIndex), {
    //                 $each: [operation.value],
    //                 $position: parseInt(operation.key.substring(lastDotIndex + 1)),
    //             })
    //             await this.collection.updateOne({_id: new ObjectId(id)}, {$push: pushOperation})
    //         } else if (operation.type === "update") {
    //             const setOperation = new Map<string, any>()
    //             setOperation.set(operation.key, operation.value)
    //             await this.collection.updateOne({_id: new ObjectId(id)}, {$set: setOperation})
    //         } else if (operation.type === "delete") {
    //             const pullOperation = new Map<string, any>()
    //             pullOperation.set(operation.key, operation.value)
    //             await this.collection.updateOne({_id: new ObjectId(id)}, {$pull: pullOperation})
    //         }
    //     }
    // }

    async update(page: IPage) {
        await this.collection.updateOne({_id: new ObjectId(page.id!)}, {$set: {data: page}})
    }

    async generate(page: IPage) {
        const file = fs.readFileSync(resolve("src/modules/page", "project-template.zip"))
        const zip = new JSZip()
        await zip.loadAsync(file)
        zip.file("/src/views/Index.vue", generateDeep(page))
        return await zip.generateAsync({type: "nodebuffer"})
    }
}

function parseFunctionBody(funcString: string): string {
    const leftBracket = funcString.indexOf("{")
    const rightBracket = funcString.lastIndexOf("}")
    return funcString.slice(leftBracket + 1, rightBracket - 1).trim()
}

function stringifyObject(obj: any) {
    return JSON.stringify(obj).replace(/"/g, "\'")
}

function generateDeep(page: IPage) {
    const functions: string[] = []

    function generate(component: IComponent): string {
        const type = component.type
        const props = Object.entries(component.props)
            .map(([key, value]) => `:${key}="${stringifyObject(value)}"`)
            .join(" ")
        const style = stringifyObject(component.styles)
        const events = Object.entries(component.events)
            .map(([event, handler]) => {
                const body = parseFunctionBody(handler)
                const newName = `handle${lodash.capitalize(component.name)}${lodash.capitalize(event)}`
                functions.push(`function ${newName}(event) {\n\t${body}\n}`)
                return `@${event}="${newName}"`
            })
            .join(" ")
        const slot = component.children?.length > 0 ?
            `\n${component.children.map((child) => generate(child)).join("\n\t")}\n` : ""
        return `<${type} ${props} :style="${style}" ${events}>${slot}</${type}>`
    }

    return `<template>
    ${page.children.map((component) => generate(component)).join("\n\t")}
</template>

<script lang="ts" setup>
${functions.join("\n\n")}
</script>`
}
