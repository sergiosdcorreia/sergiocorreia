import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeView from "@/views/HomeView.vue";
import Achievements from "@/views/Achievements.vue";
import PhotoGallery from "@/views/PhotoGallery.vue";
import ArtGallery from "@/views/ArtGallery.vue";
import Login from "@/views/Login.vue";

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
    path: "/achievements",
    name: "achievements",
    component: Achievements,
    meta: {
      title: "Achievements",
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
    path: "/art-gallery",
    name: "artgallery",
    component: ArtGallery,
    meta: {
      title: "Art Gallery",
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
    next();
  } else {
    if (await getCurrentUser()) {
      next();
    } else {
      next(); // TODO: Redirect the user
    }
  }
});

export default router;
