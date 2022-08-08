import {Component, Factory, IComponent} from "@/entities/component"
import axios from "axios"
import {h} from "vue"
import componentInfo from "@/assets/component.json" 

export interface IPage {
    id: string
    title: string
    body: IComponent[]
    time: Date
}

export class Page {
    id: string
    title: string
    body: Component[]
    time: Date

    constructor(id: string) {
        this.id = id
        this.title = "未命名页面"
        this.body = []
        this.time = new Date()
    }

    async init() {
        const resp = await axios.get("/api/page", {params: {id: this.id}})
        const {title, body, time} = resp.data
        this.title = title
        this.body = body.map((item: IComponent) => Factory(item))
        this.time = time
    }

    render() {
        let Vcomponent = this.body
        console.log(Vcomponent);
        function getComponent(componentType: string) {
            const components = Object.values(componentInfo).reduce((pre, cur) => pre.concat(cur), []);
            for (const value of components) {
                if (value["name"] === componentType) {
                    return value;
                }
            }
        }

        function insertItem(component: IComponent, cls: string) {
            if (cls === "bottom") {
                Vcomponent.push(Factory(component));
            }
            else {
                Vcomponent.unshift(Factory(component));
            }
        }

        function dragNear(node: HTMLElement, e: DragEvent) {
            const top = e.offsetY;
            const bottom = node.clientHeight - e.offsetY;
            node.classList.remove('top');
            node.classList.remove('bottom');
            node.classList.add(top > bottom ? 'bottom' : 'top');
        }
        function mouseEnter(e: MouseEvent) {
            const node = e.target as HTMLElement;
            node.parentElement?.classList.remove('hover');
            node.classList.add('hover');
        }
        function mouseLeave(e: MouseEvent) {
            const node = e.target as HTMLElement;
            node.classList.remove("hover");
            node.parentElement?.classList.add("hover");


        }
        function dropItem(e: DragEvent) {
            const node = e.currentTarget as HTMLElement;
            if (node.classList.contains('root')) {
                if (e.dataTransfer?.getData('text/plain')) {
                    const componentType = e.dataTransfer?.getData('text/plain');
                    const component = getComponent(componentType);
                    if (component) {
                        if (node.classList.contains('top') || node.classList.contains('bottom')) {
                            const classes = node.classList.contains('top') ? "top" : "bottom";
                            insertItem(component, classes)
                        }
                        node.classList.remove('top');
                        node.classList.remove('bottom');
                    }

                }
            }
        }
        function dragOver(e: DragEvent) {
            const node = e.currentTarget as HTMLElement;
            if (node.classList.contains('root')) {
                dragNear(node, e);
                e.stopPropagation();
            }
            e.preventDefault();
        }
        function dragLeave(e: DragEvent) {
            const node = e.currentTarget as HTMLElement;
            if (node.classList.contains('root')) {
                node.classList.remove('top');
                node.classList.remove('bottom');
            }
        }

        return h("div",
            {
                "_id": this.id,
                class: "root",
                onDrop: dropItem,
                onDragover: dragOver,
                onDragleave: dragLeave,
                onmouseenter: mouseEnter,
                onMouseleave: mouseLeave
            },
            Vcomponent.map((component) => component.render()))
    }

    toJSON(): IPage {
        return {
            id: this.id,
            title: this.title,
            body: this.body.map((item) => item.toJSON()),
            time: this.time,
        }
    }
}