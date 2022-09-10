<template>
  <nav class="sidebar" :style="{ width: sidebarWidth }">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <font-awesome-icon icon="fa-solid fa-angles-left" />
    </span>
    <div :class="{ 'nav-content-collapsed': collapsed }" class="mt-12">
      <span v-if="collapsed" class="font-bold select-none text-lg"> SC </span>
      <span v-else class="pl-1 font-bold select-none text-lg">
        Sérgio Correia
      </span>
      <div class="mt-2">
        <MainNavLink :to="{ name: 'home' }" icon="fa-solid fa-home">
          Home</MainNavLink
        >
        <MainNavLink :to="{ name: 'photogallery' }" icon="fa-solid fa-camera">
          Photo Gallery</MainNavLink
        >
        <MainNavLink :to="{ name: 'drawinggallery' }" icon="fa-solid fa-pencil">
          Drawing Gallery</MainNavLink
        >
        <MainNavLink :to="{ name: 'about' }" icon="fa-solid fa-circle-info"
          >About</MainNavLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
import MainNavLink from "@/components/MainNavLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "@/composables/state";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "MainNav",
  components: { MainNavLink },
  setup() {
    let auth;
    const store = useStore();
    const router = useRouter();
    const isLoggedIn = computed(() => {
      return store.state.isLoggedIn;
    });
    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          store.commit("LOGIN_USER");
        } else {
          store.commit("LOGOUT_USER");
        }
      });
    });
    const logOutUser = () => {
      signOut(auth).then(() => {
        router.push({ name: "login" });
      });
    };
    return { collapsed, toggleSidebar, sidebarWidth, isLoggedIn, logOutUser };
  },
};
</script>

<style scoped>
.sidebar {
  color: var(--light-grey);
  background-color: var(--primary);

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  top: 1em;
  right: 0.5em;
  padding: 0.25em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.nav-content-collapsed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
