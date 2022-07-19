<template>
  <MainNav v-if="hasNavigation" />
  <router-view />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: { MainNav },
  data() {
    return {
      hasNavigation: null,
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
