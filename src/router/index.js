import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("../views/Dashboard"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/Home"),
      },
      {
        path: "/tags",
        name: "tags.list",
        component: () =>
          import(/* webpackChunkName: "additional" */ "../views/Tags"),
      },
      {
        path: "/users",
        name: "users.list",
        component: () =>
          import(/* webpackChunkName: "additional" */ "../views/users/List"),
      },
      {
        path: "/users/:id(\\d+)",
        name: "users.view",
        props: true,
        component: () =>
          import(/* webpackChunkName: "additional" */ "../views/users/View"),
      },
      {
        path: "/questions/",
        name: "questions.list",
        component: () =>
          import(
            /* webpackChunkName: "additional" */ "../views/questions/List"
          ),
      },
      {
        path: "/questions/:id(\\d+)",
        name: "questions.view",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "additional" */ "../views/questions/View"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "additional" */ "../views/About"),
  },
  {
    path: "*",
    component: NotFound,
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
