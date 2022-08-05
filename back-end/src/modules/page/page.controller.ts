import {Controller, Get, Logger, Query} from "@nestjs/common"
import {Page} from "./page.entity"
import {PageService} from "./page.service"

@Controller("page")
export class PageController {
    private readonly logger = new Logger(PageController.name)

    constructor(private readonly service: PageService) {
    }

    @Get()
    getPage(@Query("id") id: string) {
        const page: Page = {
            id: id,
            title: "测试页面",
            time: new Date(),
            body: [{
                name: "form0",
                type: "Form",
                slots: [
                    {
                        name: "form-item0",
                        type: "FormItem",
                        slots: [{
                            name: "checkbox0",
                            type: "Checkbox",
                            style: {color: "red"},
                            slots: ["是否勾选"],
                        }],
                    },
                    {
                        name: "form-item1",
                        type: "FormItem",
                        props: {label: "选择颜色"},
                        slots: [{
                            name: "color-picker0",
                            type: "ColorPicker",
                        }],
                    },
                    {
                        name: "form-item2",
                        type: "FormItem",
                        props: {label: "选择日期"},
                        slots: [{
                            name: "date-picker0",
                            type: "DatePicker",
                        }],
                    },
                    {
                        name: "form-item3",
                        type: "FormItem",
                        props: {label: "输入文本"},
                        slots: [{
                            name: "input0",
                            type: "Input",
                            props: {placeholder: "请输入内容", maxLength: 100, minLength: 10, showWordLimit: true},
                        }],
                    },
                    {
                        name: "form-item4",
                        type: "FormItem",
                        props: {label: "输入数字"},
                        slots: [{
                            name: "input-number0",
                            type: "InputNumber",
                            props: {placeholder: "请输入数字", precision: 2},
                        }],
                    },
                ],
            }],
        }
        return page
    }
}