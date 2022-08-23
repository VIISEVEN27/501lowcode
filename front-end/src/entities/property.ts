export {}
// export type TitlePropType = {
//     level?: 1 | 2 | 3 | 4 | 5 | 6
// }
//
// export type CheckboxPropType = {
//     disabled?: boolean
//     size?: "large" | "default" | "small"
//     name?: string
//     checked?: boolean
// }
//
// export type ColorPickerPropType = {
//     disabled?: boolean
//     size?: "large" | "default" | "small"
//     showAlpha?: boolean
//     colorFormat?: "hsl" | "hsv" | "hex" | "rgb"
//     predefine?: Array<string>
// }
//
// export type DatePickerPropType = {
//     readonly?: boolean
//     disabled?: boolean
//     size?: "large" | "default" | "small"
//     editable?: boolean
//     clearable?: boolean
//     placeholder?: string
//     startPlaceholder?: string
//     endPlaceholder?: string
//     type?: "year" | "month" | "date" | "dates" | "datetime" | "week" | "datetimerange" | "daterange" | "monthrange"
//     format?: string
//     rangeSeparator?: string
//     defaultValue?: Date
//     defaultTime?: Date[]
// }
//
// export type FormPropType = {
//     inline?: boolean
//     labelPosition?: "ledt" | "right" | "top"
//     labelWidth?: string | number
//     disabled?: boolean
// }
//
// export type FormItemPropType = {
//     label?: string
//     labelWidth?: string | number
//     required?: boolean
// }
//
// export type InputPropType = {
//     type?: "text" | "textarea"
//     maxLength?: number
//     minLength?: number
//     showWordLimit?: boolean
//     placeholder?: string
//     clearable?: boolean
//     showPassword?: boolean
//     disabled?: boolean
//     readonly?: boolean
//     autoFocus?: boolean
// }
//
// export type InputNumberPropType = {
//     min?: number
//     max?: number
//     step?: number
//     precision?: number
//     disabled?: boolean
//     controls?: boolean
//     controlsPosition?: "right"
//     placeholder?: string
// }
//
// export type RadioPropType = {
//     disabled?: boolean
//     size?: "large" | "default" | "small"
// }
//
// export type RadioGroupPropType = {
//     disabled?: boolean
//     size?: "large" | "default" | "small"
// }
//
// export type RatePropType = {
//     max?: number
//     size?: "large" | "default" | "small"
//     disabled?: boolean
//     allowHalf?: boolean
//     lowThreshold?: number
//     highThreshold?: number
//     showScore?: boolean
// }
//
// export type SelectPropType = {
//     multiple?: boolean
//     disabled?: boolean
//     size?: "large" | "default" | "small"
//     clearable?: boolean
//     placeholder?: string
// }
//
// export type OptionGroupPropType = {
//     label?: string
//     disabled?: boolean
// }
//
// export type OptionPropType = {
//     value?: string | number | boolean | object
//     label?: string
//     disabled?: boolean
// }
//
// export type SliderPropType = {
//     min?: number
//     max?: number
//     disabled?: boolean
//     step?: number
//     size?: "large" | "default" | "small"
//     vertical?: boolean
//     height?: string
// }
//
// export type CardPropType = {
//     header?: string
//     shadow?: "always" | "hover" | "never"
// }
//
// export type CarouselPropType = {
//     height?: string
//     initialIndex?: number
//     trigger?: "hover" | "click"
//     autoplay?: boolean
//     interval?: number
//     indicatorPosition?: "outside" | "none"
//     arrow?: "always" | "hover" | "never"
//     type?: "card"
//     loop?: boolean
//     direction?: "horizontal" | "vertical"
//     pauseOnHover?: boolean
// }
//
// export type CarouselItemPropType = {
//     name?: string
//     label?: string
// }
//
// export type CollapsePropType = {
//     accordion?: boolean
// }
//
// export type CollapseItemPropType = {
//     name?: string | number
//     title?: string
//     disabled?: boolean
// }
//
// export type EmptyPropType = {
//     description?: string
// }
//
// export type ImagePropType = {
//     src?: string
//     fit?: "fill" | "contain" | "cover" | "none" | "scale-down"
//     loading?: boolean
//     lazy?: boolean
//     alt?: string
//     previewSrcList?: string[]
//     initialIndex?: number
//     hideOnClickModal?: boolean
// }
//
// export type PaginationPropType = {
//     background?: boolean
//     pageSize?: number
//     total?: number
//     pageCount?: number
//     pagerCount?: number
//     currentPage?: number
//     disabled?: boolean
//     hideOnSinglePage?: boolean
// }
//
// export type LinkPropType = {
//     type?: "default" | "primary" | "success" | "warning" | "info" | "danger"
//     underline?: boolean
//     disabled?: boolean
//     href?: string
// }
//
// export type ButtonPropType = {
//     type?: "default" | "primary" | "success" | "warning" | "info" | "danger" | "text"
//     disabled?: boolean
//     size?: "large" | "default" | "small"
// }
//
// export type ContainerPropType = {
//     direction?: "horizontal" | "vertical"
// }
//
// export type HeaderPropType = {
//     height?: string
// }
//
// export type AsidePropType = {
//     width?: string
// }
//
// export type MainPropType = {}
//
// export type FooterPropType = {
//     height?: string
// }
//
// export type SpacePropType = {
//     alignment?: "stretch" | "center" | "start" | "end"
//     direction?: "vertical" | "horizontal"
//     size?: number
//     spacer?: string | number
//     wrap?: boolean
//     fill?: boolean
// }
//
// export type DividerPropType = {
//     direction?: "vertical" | "horizontal"
//     contentPosition?: "left" | "right" | "center"
//     borderStyle?: string
// }
//
// export type PageHeaderPropType = {
//     title?: string
//     content?: string
// }
//
// export type MenuPropType = {
//     mode?: "vertical" | "horizontal"
//     collapse?: boolean
//     ellipsis?: boolean
//     defaultActive?: string
// }
//
// export type SubMenuPropType = {
//     index?: string
//     disabled?: boolean
// }
//
// export type MenuItemGroupPropType = {
//     title?: string
// }
//
// export type MenuItemPropType = {
//     index?: string | null
//     disabled?: boolean
// }
//
// export type DropdownPropType = {
//     text?: string
//     trigger?: "focus" | "hover" | "click" | "contextmenu"
//     size?: "large" | "default" | "small"
//     disabled?: boolean
//     placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end"
//     hideOnClick?: boolean
// }
//
// export type DropdownMenuPropType = {}
//
// export type DropdownItemPropType = {
//     disabled?: boolean
//     divided?: boolean
// }
//
// export type TabsPropType = {
//     type?: "card" | "border-card"
//     tabPosition?: "top" | "right" | "bottom" | "left"
// }
//
// export type BreadcrumbPropType = {
//     separator?: string
// }
//
// export type BreadcrumbItemPropType = {}
//
// export type StepsPropType = {
//     active?: number
//     direction?: "vertical" | "horizontal"
//     "process-status"?: "wait" | "process" | "finish" | "error" | "success"
// }
//
// export type StepPropType = {
//     title?: string
//     description?: string
//     status?: "wait" | "process" | "finish" | "error" | "success"
// }
//
// export type BacktopPropType = {
//     target?: string
//     visibilityHeight?: number
//     right?: number
//     bottom?: number
// }
//
// export type AffixPropType = {
//     offset?: number
//     position?: "top" | "bottom"
//     target?: string
// }