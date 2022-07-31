import {Injectable} from "@nestjs/common"
import {InjectModel} from "@nestjs/mongoose"
import {ComponentDocument} from "./component.schema"

@Injectable()
export class ComponentService {
    constructor(@InjectModel("Component") componentModel: ComponentDocument) {
    }
}
