import {Module} from "@nestjs/common"
import {MongooseModule} from "@nestjs/mongoose"
import {ComponentSchema} from "./component.schema"
import {ComponentService} from "./component.service"

@Module({
    imports: [MongooseModule.forFeature([{name: "Component", schema: ComponentSchema}])],
    providers: [ComponentService],
})
export class ComponentModule {
}
