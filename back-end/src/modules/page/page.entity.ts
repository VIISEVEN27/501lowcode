export interface Component {
    name: string
    type: string
    props?: Record<string, any>
    style?: Record<string, string>
    slots?: (string | Component)[]
}

export interface Page {
    id?: string
    title: string
    body: Component[]
    time: Date
}