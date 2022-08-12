import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Editor from "./views/Editor.vue";
import Test from "./views/Test.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/test/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/:id",
    name: "Editor",
    component: Editor,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
