import {Component, Factory, IComponent} from "@/entities/component"
import axios from "axios"
import {h} from "vue"

export interface IPage {
    id: string
    title: string
    body: IComponent[]
    time: Date
}

export class Page {
    id: string
    title: string
    body: Component[]
    time: Date

    constructor(id: string) {
        this.id = id
        this.title = "未命名页面"
        this.body = []
        this.time = new Date()
    }

    async init() {
        const resp = await axios.get("/api/page", {params: {id: this.id}})
        const {title, body, time} = resp.data
        this.title = title
        this.body = body.map((item: IComponent) => Factory(item))
        this.time = time
    }

    render() {
        return h("div", {"_id": this.id},
            this.body.map((component) => component.render()))
    }

    toJSON(): IPage {
        return {
            id: this.id,
            title: this.title,
            body: this.body.map((item) => item.toJSON()),
            time: this.time,
        }
    }
}