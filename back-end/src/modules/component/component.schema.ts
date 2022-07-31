import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import * as mongoose from "mongoose"

export type ComponentDocument = Component & mongoose.Document

@Schema()
export class Component {
    @Prop()
    name: string

    @Prop()
    type: string

    @Prop()
    props: Record<string, string>

    @Prop()
    style: Record<string, string>

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Component"}]})
    children: Component[]
}

export const ComponentSchema = SchemaFactory.createForClass(Component)