import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录", hidden: true },
    component: () => import("../views/Login.vue"),

  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    meta: { title: "首页" },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: { title: "首页" },
      },
    ],
  },
  {
    path: "/order",
    component: Layout,
    meta: { title: "订单管理" },
    children: [
      {
        path: "/orderList",
        name: "orderList",
        component: () => import("../views/order/orderList.vue"),
        meta: { title: "订单列表" },
      },
      {
        path: "/orderDetail",
        name: "orderDetail",
        component: () => import("../views/order/orderDetail.vue"),
        meta: { title: "订单详情" },
      },
    ],
  },
  {
    path: "/user",
    component: Layout,
    meta: { title: "用户管理" },
    children: [
      {
        path: "/userList",
        name: "userList",
        component: () => import("../views/user/userList.vue"),
        meta: { title: "用户列表" },
      },
      {
        path: "/userDetail",
        name: "userDetail",
        component: () => import("../views/user/userDetail.vue"),
        meta: { title: "用户详情" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
