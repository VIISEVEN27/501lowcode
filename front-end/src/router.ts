import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
