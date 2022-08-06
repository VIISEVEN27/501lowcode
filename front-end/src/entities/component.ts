import {ArrowDown} from "@element-plus/icons-vue"
import {ErrorPicture} from "@icon-park/vue-next"
import {
    ElAffix,
    ElAside, ElBacktop, ElBreadcrumb, ElBreadcrumbItem,
    ElButton,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElCheckbox,
    ElCollapse,
    ElCollapseItem,
    ElColorPicker,
    ElContainer,
    ElDatePicker,
    ElDivider, ElDropdown, ElDropdownItem, ElDropdownMenu,
    ElEmpty,
    ElFooter,
    ElForm,
    ElFormItem,
    ElHeader, ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElLink,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElOption,
    ElOptionGroup,
    ElPageHeader,
    ElPagination,
    ElRadio,
    ElRadioGroup,
    ElRate,
    ElSelect,
    ElSlider,
    ElSpace, ElStep, ElSteps,
    ElSubMenu, ElTabs,
} from "element-plus"
import {h, VNode} from "vue"

export interface IComponent {
    name: string
    type: string
    props?: Record<string, any>
    style?: Record<string, string>
    slots?: (string | IComponent)[]
}

export abstract class Component {
    name: string
    type?: string
    props?: Record<string, any>
    style?: Record<string, string>
    slots?: (string | Component)[]

    constructor(
        name: string,
        props?: Record<string, any>,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        this.name = name
        this.props = props
        this.style = style
        this.slots = slots
    }

    abstract render(): VNode
}

function _render(type: any, props?: Record<string, any>, style?: Record<string, string>, slots?: (string | Component)[]) {
    return h(type, {
        ...props,
        style: style,
    }, () => slots?.map((item) => typeof item === "string" ? item : item.render()))
}

type Constructor<T = any> = new(...args: any[]) => T

const registeredComponents = new Map<string, Constructor>()

function RegisterIt<T extends Constructor>(type?: string) {
    return function (target: T) {
        const newConstructor = class extends target {
            type = type || target.name
        }
        registeredComponents.set(type || target.name, target)
        return newConstructor
    }
}

export function Factory(component: IComponent): Component {
    const {name, type, props, style, slots} = component
    const constructor = registeredComponents.get(type)!!
    return new constructor(name, props, style,
        slots?.map((item) => typeof item === "string" ? item : Factory(item)))
}

export type TitlePropType = {
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

@RegisterIt()
export class Title extends Component {
    props?: TitlePropType

    constructor(
        name: string,
        props?: TitlePropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render("h" + this.props?.level ?? 1, undefined, this.style, this.slots)
    }
}

export type CheckboxPropType = {
    disabled?: boolean
    size?: "large" | "default" | "small"
    name?: string
    checked?: boolean
}

@RegisterIt()
export class Checkbox extends Component {
    props?: CheckboxPropType

    constructor(
        name: string,
        props?: CheckboxPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElCheckbox, this.props, this.style, this.slots)
    }
}

export type ColorPickerPropType = {
    disabled?: boolean
    size?: "large" | "default" | "small"
    showAlpha?: boolean
    colorFormat?: "hsl" | "hsv" | "hex" | "rgb"
    predefine?: Array<string>
}

@RegisterIt()
export class ColorPicker extends Component {
    props?: ColorPickerPropType

    constructor(
        name: string,
        props?: ColorPickerPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElColorPicker, this.props, this.style, this.slots)
    }
}

export type DatePickerPropType = {
    readonly?: boolean
    disabled?: boolean
    size?: "large" | "default" | "small"
    editable?: boolean
    clearable?: boolean
    placeholder?: string
    startPlaceholder?: string
    endPlaceholder?: string
    type?: "year" | "month" | "date" | "dates" | "datetime" | "week" | "datetimerange" | "daterange" | "monthrange"
    format?: string
    rangeSeparator?: string
    defaultValue?: Date
    defaultTime?: Date[]
}

@RegisterIt()
export class DatePicker extends Component {
    props?: DatePickerPropType

    constructor(
        name: string,
        props?: DatePickerPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElDatePicker, this.props, this.style, this.slots)
    }
}

export type FormPropType = {
    inline?: boolean
    labelPosition?: "ledt" | "right" | "top"
    labelWidth?: string | number
    disabled?: boolean
}

@RegisterIt()
export class Form extends Component {
    props?: FormPropType

    constructor(
        name: string,
        props?: FormPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElForm, this.props, this.style, this.slots)
    }
}

export type FormItemPropType = {
    label?: string
    labelWidth?: string | number
    required?: boolean
}

@RegisterIt()
export class FormItem extends Component {
    props?: FormItemPropType

    constructor(
        name: string,
        props?: FormItemPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElFormItem, this.props, this.style, this.slots)
    }
}

export type InputPropType = {
    type?: "text" | "textarea"
    maxLength?: number
    minLength?: number
    showWordLimit?: boolean
    placeholder?: string
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
    readonly?: boolean
    autoFocus?: boolean
}

@RegisterIt()
export class Input extends Component {
    props?: InputPropType

    constructor(
        name: string,
        props?: InputPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElInput, this.props, this.style, this.slots)
    }
}

export type InputNumberPropType = {
    min?: number
    max?: number
    step?: number
    precision?: number
    disabled?: boolean
    controls?: boolean
    controlsPosition?: "right"
    placeholder?: string
}

@RegisterIt()
export class InputNumber extends Component {
    props?: InputNumberPropType

    constructor(
        name: string,
        props?: InputNumberPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElInputNumber, this.props, this.style, this.slots)
    }
}

export type RadioPropType = {
    disabled?: boolean
    size?: "large" | "default" | "small"
}

@RegisterIt()
export class Radio extends Component {
    props?: RadioPropType

    constructor(
        name: string,
        props?: RadioPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElRadio, this.props, this.style, this.slots)
    }
}

export type RadioGroupPropType = {
    disabled?: boolean
    size?: "large" | "default" | "small"
}

@RegisterIt()
export class RadioGroup extends Component {
    props?: RadioGroupPropType

    constructor(
        name: string,
        props?: RadioGroupPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElRadioGroup, this.props, this.style, this.slots)
    }
}

export type RatePropType = {
    max?: number
    size?: "large" | "default" | "small"
    disabled?: boolean
    allowHalf?: boolean
    lowThreshold?: number
    highThreshold?: number
    showScore?: boolean
}

@RegisterIt()
export class Rate extends Component {
    props?: RatePropType

    constructor(
        name: string,
        props?: RatePropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElRate, this.props, this.style, this.slots)
    }
}

export type SelectPropType = {
    multiple?: boolean
    disabled?: boolean
    size?: "large" | "default" | "small"
    clearable?: boolean
    placeholder?: string
}

@RegisterIt()
export class Select extends Component {
    props?: SelectPropType

    constructor(
        name: string,
        props?: SelectPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElSelect, this.props, this.style, this.slots)
    }
}

export type OptionGroupPropType = {
    label?: string
    disabled?: boolean
}

@RegisterIt()
export class OptionGroup extends Component {
    props?: OptionGroupPropType

    constructor(
        name: string,
        props?: OptionGroupPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElOptionGroup, this.props, this.style, this.slots)
    }
}

export type OptionPropType = {
    value?: string | number | boolean | object
    label?: string
    disabled?: boolean
}

@RegisterIt()
export class Option extends Component {
    props?: OptionPropType

    constructor(
        name: string,
        props?: OptionPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElOption, this.props, this.style, this.slots)
    }
}

export type SliderPropType = {
    min?: number
    max?: number
    disabled?: boolean
    step?: number
    size?: "large" | "default" | "small"
    vertical?: boolean
    height?: string
}

@RegisterIt()
export class Slider extends Component {
    props?: SliderPropType

    constructor(
        name: string,
        props?: SliderPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElSlider, this.props, this.style, this.slots)
    }
}

export type CardPropType = {
    header?: string
    shadow?: "always" | "hover" | "never"
}

@RegisterIt()
export class Card extends Component {
    props?: CardPropType

    constructor(
        name: string,
        props?: CardPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElCard, {...this.props, bodyStyle: this.style}, undefined, this.slots)
    }
}

export type CarouselPropType = {
    height?: string
    initialIndex?: number
    trigger?: "hover" | "click"
    autoplay?: boolean
    interval?: number
    indicatorPosition?: "outside" | "none"
    arrow?: "always" | "hover" | "never"
    type?: "card"
    loop?: boolean
    direction?: "horizontal" | "vertical"
    pauseOnHover?: boolean
}

@RegisterIt()
export class Carousel extends Component {
    props?: CarouselPropType

    constructor(
        name: string,
        props?: CarouselPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElCarousel, this.props, this.style, this.slots)
    }
}

export type CarouselItemPropType = {
    name?: string
    label?: string
}

@RegisterIt()
export class CarouselItem extends Component {
    props?: CarouselItemPropType

    constructor(
        name: string,
        props?: CarouselItemPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElCarouselItem, this.props, this.style, this.slots)
    }
}

export type CollapsePropType = {
    accordion?: boolean
}

@RegisterIt()
export class Collapse extends Component {
    props?: CollapsePropType

    constructor(
        name: string,
        props?: CollapsePropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElCollapse, this.props, this.style, this.slots)
    }
}

export type CollapseItemPropType = {
    name?: string | number
    title?: string
    disabled?: boolean
}

@RegisterIt()
export class CollapseItem extends Component {
    props?: CollapseItemPropType

    constructor(
        name: string,
        props?: CollapseItemPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElCollapseItem, this.props, this.style, this.slots)
    }
}

export type EmptyPropType = {
    description?: string
}

@RegisterIt()
export class Empty extends Component {
    props?: EmptyPropType

    constructor(
        name: string,
        props?: EmptyPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElEmpty, this.props, this.style, this.slots)
    }
}

export type ImagePropType = {
    src?: string
    fit?: "fill" | "contain" | "cover" | "none" | "scale-down"
    loading?: boolean
    lazy?: boolean
    alt?: string
    previewSrcList?: string[]
    initialIndex?: number
    hideOnClickModal?: boolean
}

@RegisterIt()
export class Image extends Component {
    props?: ImagePropType

    constructor(
        name: string,
        props?: ImagePropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        // @ts-ignore
        return h(ElImage, {...this.props, style: this.style}, {
            default: () => this.slots?.map((item) => typeof item === "string" ? item : item.render()),
            error: () => h("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--el-fill-color-light)",
                    color: "var(--el-text-color-secondary)",
                    fontSize: "2rem",
                },
            }, h(ErrorPicture)),
        })
    }
}

export type PaginationPropType = {
    background?: boolean
    pageSize?: number
    total?: number
    pageCount?: number
    pagerCount?: number
    currentPage?: number
    disabled?: boolean
    hideOnSinglePage?: boolean
}

@RegisterIt()
export class Pagination extends Component {
    props?: PaginationPropType

    constructor(
        name: string,
        props?: PaginationPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElPagination, this.props, this.style, this.slots)
    }
}

export type LinkPropType = {
    type?: "default" | "primary" | "success" | "warning" | "info" | "danger";
    underline?: boolean;
    disabled?: boolean;
    href?: string;
};

@RegisterIt()
export class Link extends Component {
    props?: LinkPropType

    constructor(
        name: string,
        props?: LinkPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElLink, this.props, this.style, this.slots)
    }
}

export type ButtonPropType = {
    type?: "default" | "primary" | "success" | "warning" | "info" | "danger" | "text";
    disabled?: boolean;
    size?: "large" | "default" | "small";
};

@RegisterIt()
export class Button extends Component {
    props?: ButtonPropType

    constructor(
        name: string,
        props?: ButtonPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElButton, this.props, this.style, this.slots)
    }
}

export type ContainerPropType = {
    direction?: "horizontal" | "vertical"
}

@RegisterIt()
export class Container extends Component {
    props?: ContainerPropType

    constructor(
        name: string,
        props?: ContainerPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElContainer, this.props, this.style, this.slots)
    }
}

export type HeaderPropType = {
    height?: string
}

@RegisterIt()
export class Header extends Component {
    props?: HeaderPropType

    constructor(
        name: string,
        props?: HeaderPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElHeader, this.props, this.style, this.slots)
    }
}

export type AsidePropType = {
    width?: string
}

@RegisterIt()
export class Aside extends Component {
    props?: AsidePropType

    constructor(
        name: string,
        props?: AsidePropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElAside, this.props, this.style, this.slots)
    }
}

export type MainPropType = {};

@RegisterIt()
export class Main extends Component {
    props?: MainPropType

    constructor(
        name: string,
        props?: MainPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElMain, this.props, this.style, this.slots)
    }
}

export type FooterPropType = {
    height?: string
}

@RegisterIt()
export class Footer extends Component {
    props?: FooterPropType

    constructor(
        name: string,
        props?: FooterPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElFooter, this.props, this.style, this.slots)
    }
}

export type SpacePropType = {
    alignment?: "stretch" | "center" | "start" | "end";
    direction?: "vertical" | "horizontal";
    size?: number;
    spacer?: string | number | VNode;
    wrap?: boolean;
    fill?: boolean;
};

@RegisterIt()
export class Space extends Component {
    props?: SpacePropType

    constructor(
        name: string,
        props?: SpacePropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElSpace, this.props, this.style, this.slots)
    }
}

export type DividerPropType = {
    direction?: "vertical" | "horizontal";
    contentPosition?: "left" | "right" | "center";
    borderStyle?: string;
};

@RegisterIt()
export class Divider extends Component {
    props?: DividerPropType

    constructor(
        name: string,
        props?: DividerPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElDivider, this.props, this.style, this.slots)
    }
}

export type PageHeaderPropType = {
    title?: string;
    content?: string;
};

@RegisterIt()
export class PageHeader extends Component {
    props?: PageHeaderPropType

    constructor(
        name: string,
        props?: PageHeaderPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElPageHeader, this.props, this.style, this.slots)
    }
}

export type MenuPropType = {
    mode?: "vertical" | "horizontal";
    collapse?: boolean;
    ellipsis?: boolean;
    defaultActive?: string
};

@RegisterIt()
export class Menu extends Component {
    props?: MenuPropType

    constructor(
        name: string,
        props?: MenuPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElMenu, this.props, this.style, this.slots)
    }
}

export type SubMenuPropType = {
    index?: string;
    disabled?: boolean;
};

@RegisterIt()
export class SubMenu extends Component {
    props?: SubMenuPropType

    constructor(
        name: string,
        props?: SubMenuPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElSubMenu, this.props, this.style, this.slots)
    }
}

export type MenuItemGroupPropType = {
    title?: string;
};

@RegisterIt()
export class MenuItemGroup extends Component {
    props?: MenuItemGroupPropType

    constructor(
        name: string,
        props?: MenuItemGroupPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElMenuItemGroup, this.props, this.style, this.slots)
    }
}

export type MenuItemPropType = {
    index?: string | null;
    disabled?: boolean;
};

@RegisterIt()
export class MenuItem extends Component {
    props?: MenuItemPropType

    constructor(
        name: string,
        props?: MenuItemPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElMenuItem, this.props, this.style, this.slots)
    }
}

export type DropdownPropType = {
    text?: string
    trigger?: "focus" | "hover" | "click" | "contextmenu";
    size?: "large" | "default" | "small";
    disabled?: boolean
    placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";
    hideOnClick?: boolean
};

@RegisterIt()
export class Dropdown extends Component {
    props?: DropdownPropType

    constructor(
        name: string,
        props?: DropdownPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return h(
            ElDropdown,
            {...this.props, style: this.style},
            {
                default: () => h("span", {
                    style: {
                        cursor: "pointer",
                        color: "var(--el-color-primary)",
                        display: "flex",
                        alignItems: "center",
                    },
                }, [this.props?.text ?? "请选择", h(ElIcon, {className: "el-icon el-icon--right"}, () => h(ArrowDown))]),
                dropdown: () => [
                    this.slots?.map((item) =>
                        typeof item === "string" ? item : item.render(),
                    ),
                ],
            })
    }
}

export type DropdownMenuPropType = {};

@RegisterIt()
export class DropdownMenu extends Component {
    props?: DropdownMenuPropType

    constructor(
        name: string,
        props?: DropdownMenuPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElDropdownMenu, this.props, this.style, this.slots)
    }
}

export type DropdownItemPropType = {
    disabled?: boolean;
    divided?: boolean;
};

@RegisterIt()
export class DropdownItem extends Component {
    props?: DropdownItemPropType

    constructor(
        name: string,
        props?: DropdownItemPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElDropdownItem, this.props, this.style, this.slots)
    }
}

export type TabsPropType = {
    type?: "card" | "border-card";
    tabPosition?: "top" | "right" | "bottom" | "left";
};

@RegisterIt()
export class Tabs extends Component {
    props?: TabsPropType

    constructor(
        name: string,
        props?: TabsPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElTabs, this.props, this.style, this.slots)
    }
}

export type BreadcrumbPropType = {
    separator?: string;
};

@RegisterIt()
export class Breadcrumb extends Component {
    props?: BreadcrumbPropType

    constructor(
        name: string,
        props?: BreadcrumbPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElBreadcrumb, this.props, this.style, this.slots)
    }
}

export type BreadcrumbItemPropType = {};

@RegisterIt()
export class BreadcrumbItem extends Component {
    props?: BreadcrumbItemPropType

    constructor(
        name: string,
        props?: BreadcrumbItemPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElBreadcrumbItem, this.props, this.style, this.slots)
    }
}

export type StepsPropType = {
    active?: number;
    direction?: "vertical" | "horizontal";
    "process-status"?: "wait" | "process" | "finish" | "error" | "success";
};

@RegisterIt()
export class Steps extends Component {
    props?: StepsPropType

    constructor(
        name: string,
        props?: StepsPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElSteps, this.props, this.style, this.slots)
    }
}

export type StepPropType = {
    title?: string;
    description?: string;
    status?: "wait" | "process" | "finish" | "error" | "success";
};

@RegisterIt()
export class Step extends Component {
    props?: StepPropType

    constructor(
        name: string,
        props?: StepPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElStep, this.props, this.style, this.slots)
    }
}

export type BacktopPropType = {
    target?: string;
    visibilityHeight?: number;
    right?: number;
    bottom?: number;
};

@RegisterIt()
export class Backtop extends Component {
    props?: BacktopPropType

    constructor(
        name: string,
        props?: BacktopPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElBacktop, this.props, this.style, this.slots)
    }
}

export type AffixPropType = {
    offset?: number;
    position?: "top" | "bottom";
    target?: string;
};

@RegisterIt()
export class Affix extends Component {
    props?: AffixPropType

    constructor(
        name: string,
        props?: AffixPropType,
        style?: Record<string, string>,
        slots?: (string | Component)[],
    ) {
        super(name, undefined, style, slots)
        this.props = props
    }

    render() {
        return _render(ElAffix, this.props, this.style, this.slots)
    }
}