<template>
  <nav class="sidebar" :style="{ width: sidebarWidth }">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <font-awesome-icon icon="fa-solid fa-angles-left" />
    </span>
    <span v-if="collapsed"> SC </span>
    <span v-else> Sergio Correia </span>

    <MainNavLink :to="{ name: 'home' }" icon="fa-solid fa-pen-ruler"
      >Projects</MainNavLink
    >
    <MainNavLink :to="{ name: 'photogallery' }" icon="fa-solid fa-camera"
      >Photo Gallery</MainNavLink
    >
    <div v-if="isLoggedIn">
      <MainNavLink :to="{ name: 'blog' }" icon="fa-solid fa-rss"
        >Blog</MainNavLink
      >
    </div>
    <MainNavLink :to="{ name: 'about' }" icon="fa-solid fa-info"
      >About</MainNavLink
    >
    <div v-if="isLoggedIn">
      <MainNavLink :to="{ name: 'createpost' }" icon="fa-solid fa-pen-to-square"
        >Create Post</MainNavLink
      >
      <button @click="logOutUser">
        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /> Log
        Out
      </button>
    </div>
    <div v-if="!isLoggedIn">
      <MainNavLink
        :to="{ name: 'login' }"
        icon="fa-solid fa-arrow-right-to-bracket"
        >Sign In</MainNavLink
      >
    </div>
    <button v-if="collapsed">
      <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
    </button>
  </nav>
</template>

<script>
import MainNavLink from "@/components/MainNavLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "@/composables/state";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "MainNav",
  components: { MainNavLink },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLoggedIn = computed(() => {
      return store.state.isLoggedIn;
    });
    const logOutUser = () => {
      store.commit("LOGOUT_USER");
      router.push({ name: "login" });
    };
    return { collapsed, toggleSidebar, sidebarWidth, isLoggedIn, logOutUser };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

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
  bottom: 1em;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
