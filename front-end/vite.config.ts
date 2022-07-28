import vue from "@vitejs/plugin-vue"
import ElementPlus from "unplugin-element-plus/vite"
import Icons from "unplugin-icons/vite"
import {defineConfig} from "vite"
import {createStyleImportPlugin} from "vite-plugin-style-import"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:3080/",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ""),
            },
        },
    },
    plugins: [
        vue(),
        ElementPlus(),
        createStyleImportPlugin({
            libs: [
                {
                    libraryName: "ant-design-vue",
                    esModule: true,
                    resolveStyle: name => `ant-design-vue/es/${name}/style/css.js`,
                },
                {
                    libraryName: "@arco-design/web-vue",
                    esModule: true,
                    resolveStyle: name => `@arco-design/web-vue/es/${name}/style/css.js`,
                },
            ],
        }),
        Icons({
            compiler: "vue3",
            autoInstall: true,
        }),
    ],
})
