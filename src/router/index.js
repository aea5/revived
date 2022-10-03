import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";
import Home from "../pages/Home.vue"
import R from "../pages/renwen/R.vue"
import W from "../pages/wenhua/W.vue"
import test from "../pages/test.vue"

const routes = [

    {
        path: "/",
        name: "Home",
        component: Home 
    },

  {
    path: "/renwenlishi",
    name: "renwenlishi",
    component: R,
  },
  {
    path: "/wenhualvyou",
    name: "wenhualvyou",
    component: W,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;