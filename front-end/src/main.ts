import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(TDesign).mount("#app");
