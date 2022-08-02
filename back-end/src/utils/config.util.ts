import {readFileSync} from "fs"
import * as yaml from "js-yaml"
import * as lodash from "lodash"
import {resolve} from "path"

const FILENAME = "application.yml"

export class ConfigUtil {
    private static readonly options: Record<string, any> = yaml.load(
        readFileSync(resolve("src/", FILENAME), "utf8"),
    )

    static get(propertyPath: string) {
        return lodash.get(this.options, propertyPath)
    }
}