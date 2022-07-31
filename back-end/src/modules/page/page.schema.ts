import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import * as mongoose from "mongoose"
import {Component} from "../component/component.schema"

export type PageDocument = Page & mongoose.Document

@Schema()
export class Page {
    @Prop()
    title: string

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Component"}]})
    children: Component[]

    @Prop()
    lastUpdate: Date
}

export const PageSchema = SchemaFactory.createForClass(Page)