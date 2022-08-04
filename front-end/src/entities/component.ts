import {h, VNode} from "vue"

export interface Component {
    name: string
    type: string
    props: Record<string, string>
    style: Record<string, string>
    slots: string | Component | Component[]
    render: () => VNode
}

export class Title implements Component {
    name: string
    type: string
    props: Record<string, string>
    style: Record<string, string>
    slots: string

    constructor(
        name: string,
        level: 1 | 2 | 3 | 4 | 5 | 6,
        text: string,
        props: Record<string, string> = {},
        style: Record<string, string> = {},
    ) {
        this.name = name
        this.type = "h" + level
        this.slots = text
        this.props = props
        this.style = style
    }

    render() {
        return h(this.type, {...this.props, style: this.style}, this.slots)
    }
}