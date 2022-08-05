import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
      requiresAuth: true,
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access!");
      next("/");
    }
  }
});

export default router;
