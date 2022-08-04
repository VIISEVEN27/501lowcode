import {ElCheckbox} from "element-plus"
import {h, VNode} from "vue"

export interface IComponent {
    name: string
    type: string
    props?: Record<string, any>
    style?: Record<string, string>
    slots?: (string | IComponent)[]
}

export abstract class Component implements IComponent {
    name: string
    type: string
    props?: Record<string, any>
    style?: Record<string, string>
    slots?: (string | Component)[]

    constructor(
        name: string,
        type: string,
        props?: Record<string, any>,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        this.name = name
        this.type = type
        this.props = props
        this.style = style
        this.slots = slots
    }

    abstract render(): VNode
}

export class Title extends Component {
    render() {
        return h(
            this.type,
            {...this.props, style: this.style},
            this.slots?.map((item) => typeof item === "string" ? item : item.render()),
        )
    }
}

export type CheckboxPropType = {
    label?: string
    disabled?: boolean
    size?: "large" | "default" | "small"
    name?: string
    checked?: boolean
}

export class Checkbox extends Component {
    props?: CheckboxPropType

    constructor(
        name: string,
        props?: CheckboxPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, "checkbox", undefined, style, slots)
        this.props = props
    }

    render() {
        return h(
            ElCheckbox,
            {...this.props, style: this.style},
            this.slots?.map((item) => typeof item === "string" ? item : item.render()),
        )
    }
}