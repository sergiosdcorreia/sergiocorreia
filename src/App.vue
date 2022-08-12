<template>
  <MainNav v-if="hasNavigation" />
  <div class="app-container" :style="{ paddingLeft: sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import { sidebarWidth } from "@/composables/state";

export default {
  name: "App",
  components: { MainNav },
  data() {
    return {
      hasNavigation: null,
      sidebarWidth,
    };
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
  mounted() {
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "login" ||
        this.$route.name === "register" ||
        this.$route.name === "forgotpassword"
      ) {
        this.hasNavigation = false;
        return;
      }
      this.hasNavigation = true;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Baloo 2";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("baloo2"),
    url("./assets/fonts/baloo2/baloo-2-v14-latin-regular.woff2") format("woff2"),
    url("./assets/fonts/baloo2/baloo-2-v14-latin-regular.woff") format("woff");
}

@font-face {
  font-family: "Baloo 2";
  font-weight: 700;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("baloo2"),
    url("./assets/fonts/baloo2/baloo-2-v14-latin-700.woff2") format("woff2"),
    url("./assets/fonts/baloo2/baloo-2-v14-latin-700.woff") format("woff");
}

html,
body {
  font-family: "Roboto", sans-serif;
}
</style>
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
  min-height: 100%;
  width: 100%;
  min-width: 100%;
}
</style>
