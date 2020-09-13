import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Dashboard.vue"),
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
            name: "Home",
            component: () => import("../views/Home.vue"),
          },
          {
            path: "/tags",
            name: "Tags",
            component: () => import("../views/Tags.vue"),
          },
          {
            path: "/users",
            name: "Users",
            component: () => import("../views/Users.vue"),
          },
          {
            path: "/questions",
            name: "Questions",
            component: () => import("../views/Questions.vue"),
            children: [
              {
                path: "/quetions/:id/:slug",
                name: "Answer",
                component: () => import("../views/Answer.vue"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
