import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";
import Login from "@/admin/login/index.vue"
import Page404 from "@/components/Page404.vue";


// 项目其他页面路由（推荐使用）

// vue项目自带路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page404',
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用默认的根目录
  routes // 直接使用 routes 变量
});

export default router;
