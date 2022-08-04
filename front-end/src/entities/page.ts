import {Component} from "@/entities/component"
import axios from "axios"

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
        // const resp = await axios.get("/api/page/" + this.id)
        // const {title, body, time} = resp.data
        // this.title = title
        // this.body = body
        // this.time = time
        console.log(this.id)
    }

    render() {
        // TODO 渲染预览页面
    }
}