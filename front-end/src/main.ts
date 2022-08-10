/*
 * @Author: yky
 * @Date: 2022-07-30 08:51:36
 * @LastEditTime: 2022-08-02 13:59:39
 */
import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { install } from "@icon-park/vue-next/es/all";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import "./assets/base.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.use(createPinia());

install(app); // 使用默认前缀“ icon”

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus)
app.use(router).use(TDesign).mount("#app");
