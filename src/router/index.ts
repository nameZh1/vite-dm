import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";

// 项目其他页面路由（推荐使用）

// vue项目自带路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(), // 使用默认的根目录
  routes // 直接使用 routes 变量
});

export default router;
