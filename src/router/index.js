import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: "",
        name: "",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "/",
            name: "home",
            component: () => import('../views/Home.vue'),
          },
          {
            path: "/tags",
            name: "tags.list",
            component: () => import(/* webpackChunkName: "additional" */ '../views/Tags.vue'),
          },
          {
            path: "/users",
            name: "users.list",
            component: () => import(/* webpackChunkName: "additional" */ '../views/Users.vue'),
          },
          {
            path: "/questions",
            component: () => import(/* webpackChunkName: "additional" */ '../views/Questions.vue'),
            children: [
              {
                path: "/",
                name: "questions.list",
                component: () => import(/* webpackChunkName: "additional" */ '../views/questions/List.vue'),
              },
              {
                path: "/questions/:id(\\d+)/:slug",
                component: () => import(/* webpackChunkName: "additional" */ '../views/questions/View.vue'),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "additional" */ '../views/About.vue'),
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
