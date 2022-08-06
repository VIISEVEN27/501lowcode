import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import { createStyleImportPlugin } from "vite-plugin-style-import";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://139.224.220.27:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
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
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/css.js`,
        },
        {
          libraryName: "@arco-design/web-vue",
          esModule: true,
          resolveStyle: (name) =>
            `@arco-design/web-vue/es/${name}/style/css.js`,
        },
      ],
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), IconsResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
