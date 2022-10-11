import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeView from "@/views/HomeView.vue";

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
    meta: {
      title: "Achievements",
    },
    component: () =>
      import(/* webpackChunkName: "achievements" */ "@/views/Achievements.vue"),
  },
  {
    path: "/photo-gallery",
    name: "photogallery",
    meta: {
      title: "Photo Gallery",
    },
    component: () =>
      import(
        /* webpackChunkName: "photo-gallery" */ "@/views/PhotoGallery.vue"
      ),
  },
  {
    path: "/art-gallery",
    name: "artgallery",
    meta: {
      title: "Art Gallery",
    },
    component: () =>
      import(/* webpackChunkName: "art-gallery" */ "@/views/ArtGallery.vue"),
  },
  {
    path: "/about",
    name: "about",
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
