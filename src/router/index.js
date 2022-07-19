import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreateBlog from "@/views/CreateBlog.vue";
import BlogView from "@/views/BlogView.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    meta: {
      title: "Blog",
    },
  },
  {
    path: "/create-blog",
    name: "createblog",
    component: CreateBlog,
    meta: {
      title: "Create Blog",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: "forgotpassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      title: "About",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
