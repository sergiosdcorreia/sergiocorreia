import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreatePost from "@/views/CreatePost.vue";
import PhotoGallery from "@/views/PhotoGallery.vue";
import BlogView from "@/views/BlogView.vue";
import Login from "@/views/Login.vue";
import RegisterUser from "@/views/RegisterUser.vue";
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
    path: "/create-post",
    name: "createpost",
    component: CreatePost,
    meta: {
      title: "Create Post",
    },
  },
  {
    path: "/photo-gallery",
    name: "photogallery",
    component: PhotoGallery,
    meta: {
      title: "Photo Gallery",
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
    component: RegisterUser,
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
