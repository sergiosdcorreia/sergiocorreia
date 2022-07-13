<template>
  <MainNav />
  <router-view />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: { MainNav },
};
</script>
