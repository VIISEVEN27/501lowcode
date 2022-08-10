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
        let Vcomponent = this.body;
        let initId = new Set(this.body.map((item) => item.name));
        let inline = ["Text", "Button", "Link", "Avatar", "Image", "Calender", "Badge", "Tag", "Cascader", "Checkbox",
            "ColorPicker", "DatePicker", "Input", "InputNumber", "Radio", "Rate", "Select", "Slider", "Switch", "TimePicker"
            , "TimeSelect", "Upload"];

        function getComponentId(componentId: string) {
            let ans = 1;
            let name = componentId;
            while (initId.has(name)) {
                name = componentId + ans;
                ans++;
            }
            initId.add(name);
            return name;
        }
        
        function getComponent(componentType: string) {
            const components = Object.values(componentInfo).reduce((pre, cur) => pre.concat(cur), []);
            for (const value of components) {
                if (value["name"] === componentType) {
                    return value;
                }
            }
        }

        function insertComponent(id: string, component: IComponent, cls: string) {
            let flag = 0;
            for (let i = 0; i < Vcomponent.length; i++) {
                if (Vcomponent[i].name === id) {
                    flag = 1;
                    if (cls === "bottom") {
                        Vcomponent.splice(i + 1, 0, Factory(component));

                    }
                    else if (cls === "top") {
                        Vcomponent.splice(i, 0, Factory(component));
                    }
                    break;
                }
            }
            if (!flag)
                Vcomponent.push(Factory(component));
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
                    let component = getComponent(componentType);
                    if (component) {
                        component.name = getComponentId(component.name);
                        if (node.classList.contains('top') || node.classList.contains('bottom')) {
                            const classes = node.classList.contains('top') ? "top" : "bottom";
                            console.log(node.id, classes);
                            insertComponent(node.id, component, classes)
                        }
                        node.classList.remove('top');
                        node.classList.remove('bottom');
                    }
                }
                else if (e.dataTransfer?.getData('text/id')) {
                    const componentType = e.dataTransfer?.getData('text/id');
                    if (node.classList.contains('top') || node.classList.contains('bottom')) {
                        const classes = node.classList.contains('top') ? "top" : "bottom";
                        for (let i = 0; i < Vcomponent.length; i++) {
                            if (Vcomponent[i].name === componentType) {
                                const component = Vcomponent[i];
                                Vcomponent.splice(i, 1);
                                insertComponent(node.id, component, classes);
                                break;
                            }
                        }
                    }
                    node.classList.remove('top');
                    node.classList.remove('bottom');

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

        function dragStart(e: DragEvent) {
            const node = e.target as HTMLElement;
            e.dataTransfer?.setData("text/id", node.id);
        }

        function _render(children: Component) {
            return h("div",
                {
                    id: children.name,
                    class: "root",
                    onDrop: dropItem,
                    onDragover: dragOver,
                    onDragleave: dragLeave,
                    onmouseenter: mouseEnter,
                    onMouseleave: mouseLeave,
                    onDragstart: dragStart,
                    draggable: "true",
                    style: {
                        display: inline.indexOf(children.type) >= 0 ? "inline-block" : "block"
                    }
                },
                children.render()
            )
        }

        return h("div",
            {
                "_id": this.id,
                class: "root",
                onDrop: dropItem,
                onDragover: dragOver,
                onDragleave: dragLeave,
                onmouseenter: mouseEnter,
                onMouseleave: mouseLeave,
                draggable: "true"
            },
            Vcomponent.map((component) => _render(component))
        )
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