export interface Component {
    name: string
    type: string
    text?: string
    props?: Record<string, string>
    style?: Record<string, string>
    children: Component[]
}

export interface Page {
    title: string
    body: Component[]
}