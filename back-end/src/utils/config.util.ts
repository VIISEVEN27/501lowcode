import {readFileSync} from "fs"
import * as yaml from "js-yaml"
import * as lodash from "lodash"
import {resolve} from "path"

const FILENAME = "application.yml"

export class ConfigUtil {
    private static instance: ConfigUtil
    private readonly options: Record<string, any>

    constructor() {
        this.options = yaml.load(
            readFileSync(resolve("src/", FILENAME), "utf8"),
        ) as Record<string, any>
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ConfigUtil()
        }
        return this.instance
    }

    get(propertyPath: string) {
        return lodash.get(this.options, propertyPath)
    }
}