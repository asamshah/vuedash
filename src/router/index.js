import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignIn from "../views/SignIn/SignIn";
import Recover from "../views/SignIn/Recover";
import Request from "../views/SignIn/Request";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
