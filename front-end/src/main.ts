/*
 * @Author: yky
 * @Date: 2022-07-30 08:51:36
 * @LastEditTime: 2022-08-02 13:59:39
 */
import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import CustomComponents from "./components/custom_components";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// import { install } from "@icon-park/vue-next/es/all";
// import TDesign from "tdesign-vue-next";
// import "tdesign-vue-next/es/style/index.css";

import "./assets/base.css";

import axios from "axios";

axios.defaults.baseURL = "http://139.224.220.27:3000/";

const app = createApp(App);
app.use(router);
app.use(createPinia());

app.use(ElementPlus);
app.use(CustomComponents);

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }

// install(app); // 使用默认前缀“ icon”
// app.use(TDesign)

app.mount("#app");
