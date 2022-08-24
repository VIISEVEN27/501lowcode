import {readFileSync} from "fs"
import * as yaml from "js-yaml"
import {get as _get} from "lodash-es"
import {resolve} from "path"

const FILENAME = "application.yml"

export class ConfigUtil {
    private static readonly options: Record<string, any> = yaml.load(
        readFileSync(resolve("src/", FILENAME), "utf8"),
    )

    static get(propertyPath: string) {
        return _get(this.options, propertyPath)
    }
}