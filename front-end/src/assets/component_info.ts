interface IComponent {
  name: string;
  zh: string;
  editType: "block" | "inline" | "none";
  propSchema?: {
    name: string;
    desc: string;
    type: string;
    candidates?: string[];
    defaultValue: any;
  }[];
  styleSchema?: {
    name: string;
    desc: string;
    type: string;
    candidates?: string[];
    defaultValue?: any;
  }[];
  eventSchema?: {
    name: string;
    desc: string;
  }[];
}

const componentInfo: Record<string, IComponent> = {
  UIPage: {
    name: "Page",
    zh: "页面",
    editType: "none",
    styleSchema: [
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
        defaultValue: "transparent",
      },
    ],
  },
  // 布局
  UIBlock: {
    name: "Block",
    zh: "区块",
    editType: "block",
    styleSchema: [
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
        defaultValue: "transparent",
      },
    ],
  },
  ElDivider: {
    name: "Divider",
    zh: "分割线",
    editType: "block",
  },
  // 基础
  UIH1: {
    name: "H1",
    zh: "一级标题",
    editType: "block",
    propSchema: [
      {
        name: "text",
        desc: "标题文本",
        type: "string",
        defaultValue: "一级标题",
      },
    ],
    styleSchema: [
      {
        name: "color",
        desc: "文字颜色",
        type: "color",
      },
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
      },
    ],
  },
  UIH2: {
    name: "H2",
    zh: "二级标题",
    editType: "block",
    propSchema: [
      {
        name: "text",
        desc: "标题文本",
        type: "string",
        defaultValue: "二级标题",
      },
    ],
    styleSchema: [
      {
        name: "color",
        desc: "文字颜色",
        type: "color",
      },
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
      },
    ],
  },
  UIH3: {
    name: "H3",
    zh: "三级标题",
    editType: "block",
    propSchema: [
      {
        name: "text",
        desc: "标题文本",
        type: "string",
        defaultValue: "三级标题",
      },
    ],
    styleSchema: [
      {
        name: "color",
        desc: "文字颜色",
        type: "color",
      },
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
      },
    ],
  },
  UIH4: {
    name: "H4",
    zh: "四级标题",
    editType: "block",
    propSchema: [
      {
        name: "text",
        desc: "标题文本",
        type: "string",
        defaultValue: "四级标题",
      },
    ],
    styleSchema: [
      {
        name: "color",
        desc: "文字颜色",
        type: "color",
      },
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
      },
    ],
  },
  UIH5: {
    name: "H5",
    zh: "五级标题",
    editType: "block",
    propSchema: [
      {
        name: "text",
        desc: "标题文本",
        type: "string",
        defaultValue: "五级标题",
      },
    ],
    styleSchema: [
      {
        name: "color",
        desc: "文字颜色",
        type: "color",
      },
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
      },
    ],
  },
  UIH6: {
    name: "H6",
    zh: "六级标题",
    editType: "block",
    propSchema: [
      {
        name: "text",
        desc: "标题文本",
        type: "string",
        defaultValue: "六级标题",
      },
    ],
    styleSchema: [
      {
        name: "color",
        desc: "文字颜色",
        type: "color",
      },
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
      },
    ],
  },
  UIText: {
    name: "Text",
    zh: "文本",
    editType: "inline",
    propSchema: [
      {
        name: "text",
        desc: "文字文本",
        type: "string",
        defaultValue: "文本",
      },
    ],
    styleSchema: [
      {
        name: "color",
        desc: "文字颜色",
        type: "color",
      },
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
      },
    ],
  },
  UILink: {
    name: "Link",
    zh: "链接",
    editType: "inline",
    propSchema: [
      {
        name: "text",
        desc: "文字文本",
        type: "string",
        defaultValue: "文本",
      },
      {
        name: "url",
        desc: "链接",
        type: "string",
        defaultValue: "/",
      },
    ],
    styleSchema: [
      {
        name: "color",
        desc: "文字颜色",
        type: "color",
      },
      {
        name: "backgroundColor",
        desc: "背景颜色",
        type: "color",
      },
    ],
  },
  UIButton: {
    name: "Button",
    zh: "按钮",
    editType: "inline",
    propSchema: [
      {
        name: "text",
        desc: "按钮文本",
        type: "string",
        defaultValue: "按钮",
      },
    ],
    eventSchema: [
      {
        name: "click",
        desc: "点击事件",
      },
    ],
  },
  ElImage: {
    name: "Image",
    zh: "图片",
    editType: "block",
    propSchema: [
      {
        name: "src",
        desc: "图片URL",
        type: "string",
        defaultValue: "",
      },
    ],
    styleSchema: [
      {
        name: "width",
        desc: "图片宽度",
        type: "number",
      },
      {
        name: "height",
        desc: "图片高度",
        type: "number",
      },
    ],
  },
  UIVideo: {
    name: "Video",
    zh: "视频",
    editType: "inline",
    propSchema: [
      {
        name: "src",
        desc: "视频URL",
        type: "string",
        defaultValue: "",
      },
    ],
  },
  // 导航
  ElPageHeader: {
    name: "PageHeader",
    zh: "页头",
    editType: "block",
  },
  ElMenu: {
    name: "Menu",
    zh: "菜单",
    editType: "block",
  },
  ElDropdown: {
    name: "Dropdown",
    zh: "下拉菜单",
    editType: "block",
  },
  ElTabs: {
    name: "Tabs",
    zh: "标签页",
    editType: "block",
  },
  ElBreadcrumb: {
    name: "Breadcrumb",
    zh: "面包屑",
    editType: "block",
  },
  ElSteps: {
    name: "Steps",
    zh: "步骤条",
    editType: "block",
  },
  ElBacktop: {
    name: "Backtop",
    zh: "回到顶部",
    editType: "block",
  },
  ElAffix: {
    name: "Affix",
    zh: "固钉",
    editType: "block",
  },
  // 数据
  ElAvatar: {
    name: "Avatar",
    zh: "头像",
    editType: "block",
  },
  ElBadge: {
    name: "Badge",
    zh: "徽章",
    editType: "block",
  },
  ElCalendar: {
    name: "Calendar",
    zh: "日历",
    editType: "block",
  },
  ElCard: {
    name: "Card",
    zh: "卡片",
    editType: "block",
  },
  ElCarousel: {
    name: "Carousel",
    zh: "走马灯",
    editType: "block",
  },
  ElCollapse: {
    name: "Collapse",
    zh: "折叠面板",
    editType: "block",
  },
  ElDescriptions: {
    name: "Descriptions",
    zh: "描述列表",
    editType: "block",
  },
  ElEmpty: {
    name: "Empty",
    zh: "空状态",
    editType: "block",
  },
  ElPagination: {
    name: "Pagination",
    zh: "分页",
    editType: "block",
  },
  ElProgress: {
    name: "Progress",
    zh: "进度条",
    editType: "block",
  },
  ElResult: {
    name: "Result",
    zh: "结果",
    editType: "block",
  },
  ElSkeleton: {
    name: "Skeleton",
    zh: "骨架屏",
    editType: "block",
  },
  ElTable: {
    name: "Table",
    zh: "表格",
    editType: "block",
  },
  ElTag: {
    name: "Tag",
    zh: "标签",
    editType: "block",
  },
  ElTimeline: {
    name: "Timeline",
    zh: "时间线",
    editType: "block",
  },
  ElTree: {
    name: "Tree",
    zh: "树形控件",
    editType: "block",
  },
  ElTreeSelect: {
    name: "TreeSelect",
    zh: "树形选择",
    editType: "block",
  },
  // 表单
  ElInput: {
    name: "Input",
    zh: "输入框",
    editType: "block",
    propSchema: [
      {
        name: "type",
        desc: "类型",
        type: "single_select",
        candidates: ["text", "textarea"],
        defaultValue: "text",
      },
      {
        name: "maxlength",
        desc: "最大输入长度",
        type: "number",
        defaultValue: 100,
      },
    ],
  },
  ElCascader: {
    name: "Cascader",
    zh: "级联选择器",
    editType: "block",
  },
  ElCheckbox: {
    name: "Checkbox",
    zh: "多选框",
    editType: "block",
  },
  ElColorPicker: {
    name: "ColorPicker",
    zh: "取色器",
    editType: "block",
  },
  ElDatePicker: {
    name: "DatePicker",
    zh: "日期选择器",
    editType: "block",
  },
  ElForm: {
    name: "Form",
    zh: "表单",
    editType: "block",
  },
  ElInputNumber: {
    name: "InputNumber",
    zh: "数字输入框",
    editType: "block",
  },
  ElRadio: {
    name: "Radio",
    zh: "单选框",
    editType: "block",
  },
  ElRate: {
    name: "Rate",
    zh: "评分",
    editType: "block",
  },
  ElSelect: {
    name: "Select",
    zh: "选择器",
    editType: "block",
  },
  ElSlider: {
    name: "Slider",
    zh: "滑块",
    editType: "block",
  },
  ElSwitch: {
    name: "Switch",
    zh: "开关",
    editType: "block",
  },
  ElTimePicker: {
    name: "TimePicker",
    zh: "时间选择器",
    editType: "block",
  },
  ElTimeSelect: {
    name: "TimeSelect",
    zh: "时间选择",
    editType: "block",
  },
  ElTransfer: {
    name: "Transfer",
    zh: "穿梭框",
    editType: "block",
  },
  ElUpload: {
    name: "Upload",
    zh: "上传",
    editType: "block",
  },
  // 反馈
  ElAlert: {
    name: "Alert",
    zh: "提示",
    editType: "block",
  },
  ElDialog: {
    name: "Dialog",
    zh: "对话框",
    editType: "block",
  },
  ElDrawer: {
    name: "Drawer",
    zh: "抽屉",
    editType: "block",
  },
  ElLoading: {
    name: "Loading",
    zh: "加载",
    editType: "block",
  },
  ElMessage: {
    name: "Message",
    zh: "消息提示",
    editType: "block",
  },
  ElMessageBox: {
    name: "MessageBox",
    zh: "消息弹出框",
    editType: "block",
  },
  ElNotification: {
    name: "Notification",
    zh: "通知",
    editType: "block",
  },
  ElPopConfirm: {
    name: "PopConfirm",
    zh: "弹出确认框",
    editType: "block",
  },
  ElPopover: {
    name: "Popover",
    zh: "弹出框",
    editType: "block",
  },
  ElTooltip: {
    name: "Tooltip",
    zh: "文字提示",
    editType: "block",
  },
};

export default componentInfo;
