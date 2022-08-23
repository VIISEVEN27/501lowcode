export {}
// import {ArrowDown} from "@element-plus/icons-vue"
// import {ErrorPicture} from "@icon-park/vue-next"
// import {
//     ElAffix,
//     ElAside,
//     ElBacktop,
//     ElBreadcrumb,
//     ElBreadcrumbItem,
//     ElButton,
//     ElCard,
//     ElCarousel,
//     ElCarouselItem,
//     ElCheckbox,
//     ElCollapse,
//     ElCollapseItem,
//     ElColorPicker,
//     ElContainer,
//     ElDatePicker,
//     ElDivider,
//     ElDropdown,
//     ElDropdownItem,
//     ElDropdownMenu,
//     ElEmpty,
//     ElFooter,
//     ElForm,
//     ElFormItem,
//     ElHeader,
//     ElIcon,
//     ElImage,
//     ElInput,
//     ElInputNumber,
//     ElLink,
//     ElMain,
//     ElMenu,
//     ElMenuItem,
//     ElMenuItemGroup,
//     ElOption,
//     ElOptionGroup,
//     ElPageHeader,
//     ElPagination,
//     ElRadio,
//     ElRadioGroup,
//     ElRate,
//     ElSelect,
//     ElSlider,
//     ElSpace,
//     ElStep,
//     ElSteps,
//     ElSubMenu,
//     ElTabs,
// } from "element-plus"
// import {h, resolveComponent, VNode} from "vue"
//
// export interface IComponent {
//     name: string
//     type: string
//     props?: Record<string, any>
//     style?: Record<string, string>
//     slots?: (string | IComponent)[]
// }
//
// export class Component implements IComponent {
//     name: string
//     type: string
//     props?: Record<string, any>
//     style?: Record<string, string>
//     slots?: (string | Component)[]
//
//     constructor(name: string, props?: Record<string, any>, style?: Record<string, string>, slots?: (string | Component)[]) {
//         this.name = name
//         this.type = "Component"
//         this.props = props
//         this.style = style
//         this.slots = slots
//     }
//
//     render(): VNode {
//         return _render(resolveComponent("El" + this.type), this.props, this.style, this.slots)
//     }
//
//     toJSON(): IComponent {
//         return {
//             name: this.name,
//             type: this.type,
//             props: this.props,
//             style: this.style,
//             slots: this.slots?.map((slot) => typeof slot === "string" ? slot : slot.toJSON()),
//         }
//     }
// }
//
// function _render(type: any, props?: Record<string, any>, style?: Record<string, string>, slots?: (string | Component)[]) {
//     return h(type, {
//         ...props, style: style,
//     }, { default: () => slots?.map((item) => typeof item === "string" ? item : item.render()) })
// }
//
// type Constructor<T = any> = new(...args: any[]) => T
//
// const registeredComponents = new Map<string, Constructor>()
//
// function RegisterIt<T extends Constructor>(type?: string) {
//     return function (target: T) {
//         const newConstructor = class extends target {
//             type = type || target.name
//         }
//         registeredComponents.set(type || target.name, newConstructor)
//         return newConstructor
//     }
// }
//
// export function Factory(component: IComponent): Component {
//     const {name, type, props, style, slots} = component
//     const constructor = registeredComponents.get(type)!!
//     return new constructor(name, props, style,
//         slots?.map((item) => typeof item === "string" ? item : Factory(item)))
// }
//
// @RegisterIt()
// export class Title extends Component {
//     render() {
//         return _render("h" + this.props?.level ?? 1, undefined, this.style, this.slots)
//     }
// }
//
// @RegisterIt()
// export class Checkbox extends Component {
// }
//
// @RegisterIt()
// export class Avatar extends Component {
// }
//
// @RegisterIt()
// export class Badge extends Component {
// }
//
// @RegisterIt()
// export class Calendar extends Component {
// }
//
// @RegisterIt()
// export class Descriptions extends Component {
// }
//
// @RegisterIt()
// export class DescriptionsItem extends Component {
// }
//
// @RegisterIt()
// export class ColorPicker extends Component {
// }
//
// @RegisterIt()
// export class DatePicker extends Component {
// }
//
// @RegisterIt()
// export class Form extends Component {
// }
//
// @RegisterIt()
// export class FormItem extends Component {
// }
//
// @RegisterIt()
// export class Input extends Component {
// }
//
// @RegisterIt()
// export class InputNumber extends Component {
// }
//
// @RegisterIt()
// export class Radio extends Component {
// }
//
// @RegisterIt()
// export class RadioGroup extends Component {
// }
//
// @RegisterIt()
// export class Rate extends Component {
// }
//
// @RegisterIt()
// export class Select extends Component {
// }
//
// @RegisterIt()
// export class OptionGroup extends Component {
// }
//
// @RegisterIt()
// export class Option extends Component {
// }
//
// @RegisterIt()
// export class Slider extends Component {
// }
//
// @RegisterIt()
// export class Switch extends Component {
// }
//
// @RegisterIt()
// export class TimePicker extends Component {
// }
//
// @RegisterIt()
// export class TimeSelect extends Component {
// }
//
// @RegisterIt()
// export class Transfer extends Component {
// }
//
// @RegisterIt()
// export class Upload extends Component {
// }
//
// @RegisterIt()
// export class Card extends Component {
// }
//
// @RegisterIt()
// export class Carousel extends Component {
// }
//
// @RegisterIt()
// export class CarouselItem extends Component {
// }
//
// @RegisterIt()
// export class Collapse extends Component {
// }
//
// @RegisterIt()
// export class CollapseItem extends Component {
// }
//
// @RegisterIt()
// export class Empty extends Component {
// }
//
// @RegisterIt()
// export class Image extends Component {
//     render() {
//         // @ts-ignore
//         return h(ElImage, { ...this.props, style: this.style }, {
//             default: () => this.slots?.map((item) => typeof item === "string" ? item : item.render()),
//             error: () => h("div", {
//                 style: {
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     background: "var(--el-fill-color-light)",
//                     color: "var(--el-text-color-secondary)",
//                     fontSize: "2rem",
//                 },
//             }, h(ErrorPicture)),
//         })
//     }
// }
//
// @RegisterIt()
// export class Pagination extends Component {
// }
//
// @RegisterIt()
// export class Progress extends Component {
// }
//
// @RegisterIt()
// export class Result extends Component {
// }
//
// @RegisterIt()
// export class Skeleton extends Component {
// }
//
// @RegisterIt()
// export class Table extends Component {
// }
//
// @RegisterIt()
// export class TableColumn extends Component {
// }
//
// @RegisterIt()
// export class Tag extends Component {
// }
//
// @RegisterIt()
// export class Timeline extends Component {
// }
//
// @RegisterIt()
// export class TimelineItem extends Component {
// }
//
// @RegisterIt()
// export class Tree extends Component {
// }
//
// @RegisterIt()
// export class TreeSelect extends Component {
// }
//
// @RegisterIt()
// export class Cascader extends Component {
// }
//
// @RegisterIt()
// export class Link extends Component {
// }
//
// @RegisterIt()
// export class Button extends Component {
// }
//
// @RegisterIt()
// export class Container extends Component {
// }
//
// @RegisterIt()
// export class Header extends Component {
// }
//
// @RegisterIt()
// export class Aside extends Component {
// }
//
// @RegisterIt()
// export class Main extends Component {
// }
//
// @RegisterIt()
// export class Footer extends Component {
// }
//
// @RegisterIt()
// export class Space extends Component {
// }
//
// @RegisterIt()
// export class Divider extends Component {
// }
//
// @RegisterIt()
// export class PageHeader extends Component {
// }
//
// @RegisterIt()
// export class Menu extends Component {
// }
//
// @RegisterIt()
// export class SubMenu extends Component {
// }
//
// @RegisterIt()
// export class MenuItemGroup extends Component {
// }
//
// @RegisterIt()
// export class MenuItem extends Component {
// }
//
// @RegisterIt()
// export class Dropdown extends Component {
//     render() {
//         return h(ElDropdown, { ...this.props, style: this.style }, {
//             default: () => h("span", {
//                 style: {
//                     cursor: "pointer", color: "var(--el-color-primary)", display: "flex", alignItems: "center",
//                 },
//             }, [this.props?.text ?? "请选择", h(ElIcon, { className: "el-icon el-icon--right" }, () => h(ArrowDown))]),
//             dropdown: () => [this.slots?.map((item) => typeof item === "string" ? item : item.render())],
//         })
//     }
// }
//
// @RegisterIt()
// export class DropdownMenu extends Component {
// }
//
// @RegisterIt()
// export class DropdownItem extends Component {
// }
//
// @RegisterIt()
// export class TabPane extends Component {
// }
//
// @RegisterIt()
// export class Tabs extends Component {
// }
//
// @RegisterIt()
// export class Breadcrumb extends Component {
// }
//
// @RegisterIt()
// export class BreadcrumbItem extends Component {
// }
//
// @RegisterIt()
// export class Steps extends Component {
// }
//
// @RegisterIt()
// export class Step extends Component {
// }
//
// @RegisterIt()
// export class Backtop extends Component {
// }
//
// @RegisterIt()
// export class Affix extends Component {
// }
//
// @RegisterIt()
// export class Text extends Component {
//     render() {
//         return _render("span", this.props, this.style, this.slots)
//     }
//
// }
//
// @RegisterIt()
// export class Paragraph extends Component {
//     render() {
//         return _render("p", this.props, this.style, this.slots)
//     }
// }
//
// @RegisterIt()
// export class Alert extends Component {
//
// }
//
// @RegisterIt()
// export class Dialog extends Component {
//
// }
//
// @RegisterIt()
// export class Drawer extends Component {
//
// }
//
//
//
// @RegisterIt()
// export class Message extends Component {
//
// }
//
// @RegisterIt()
// export class MessageBox extends Component {
//
// }
//
// @RegisterIt()
// export class Notification extends Component {
//
// }
//
// @RegisterIt()
// export class Popconfirm extends Component {
//
// }
//
// @RegisterIt()
// export class PopOver extends Component {
//
// }
//
// @RegisterIt()
// export class Tooltip extends Component {
//
// }