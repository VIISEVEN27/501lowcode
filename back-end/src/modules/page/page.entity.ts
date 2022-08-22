export interface IComponent {
    name: string
    type: string
    props?: Record<string, any>
    styles?: Record<string, any>
    events?: Record<string, string>
    children?: IComponent[]
}

export interface IPage extends IComponent{
    id?: string
    title: string
    time: Date
}