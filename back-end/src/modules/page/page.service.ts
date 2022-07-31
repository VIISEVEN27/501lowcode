import {Injectable} from "@nestjs/common"
import {InjectModel} from "@nestjs/mongoose"
import {Model} from "mongoose"
import {PageDocument} from "./page.schema"

@Injectable()
export class PageService {
    constructor(@InjectModel("Page") private pageModel: Model<PageDocument>) {
    }
}
