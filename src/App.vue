<template>
  <MainNav />
  <div class="app-container" :style="{ paddingLeft: sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import { sidebarWidth } from "@/composables/useState";

export default {
  name: "App",
  components: { MainNav },
  data() {
    return {
      sidebarWidth,
    };
  },
};
</script>

<style scoped>
.app-container {
  transition: 0.3s ease;
  background: rgb(40, 43, 48);
  background: linear-gradient(
    45deg,
    rgba(40, 43, 48, 1) 0%,
    rgba(40, 43, 48, 1) 35%,
    rgba(53, 61, 73, 1) 100%
  );
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100%;
}
</style>
