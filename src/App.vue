<template>
  <MainNav v-if="hasNavigation" />
  <div class="container" :style="{ marginLeft: sidebarWidth }">
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

<style scoped>
.container {
  transition: 0.3s ease;
}
</style>
