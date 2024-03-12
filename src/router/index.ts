import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
//views
import HomeView from "../views/Home/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
