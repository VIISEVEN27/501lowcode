import TDesign from "tdesign-vue-next"
import "tdesign-vue-next/es/style/index.css"
import {createApp} from "vue"
import App from "./App.vue"
import router from "./router"

createApp(App).use(router).use(TDesign).mount("#app")
