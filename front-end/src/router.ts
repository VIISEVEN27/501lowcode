import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Editor from "./views/Editor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:id?",
    name: "Editor",
    component: Editor,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
