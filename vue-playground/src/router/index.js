import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CssPage from "@/views/cssPage.vue";
import CanvasPage from "@/views/canvasPage.vue";
import SvgPage from "@/views/svgPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cssPage",
    name: "CSS Page",
    component: CssPage,
  },
  {
    path: "/canvasPage",
    name: "Canvas Page",
    component: CanvasPage,
  },
  {
    path: "/svgPage",
    name: "SVG Page",
    component: SvgPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
