<template>
  <nav>
    <div>
      <router-link :to="{ name: 'home' }">Sergio Correia</router-link> |
    </div>
    <router-link :to="{ name: 'blog' }">Blog</router-link> |
    <div v-if="isLoggedIn">
      <router-link :to="{ name: 'createblog' }">Create Blog</router-link>
    </div>
    <router-link :to="{ name: 'about' }">About</router-link>
    <button @click="loginUser">Sign In</button>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    loginUser() {
      this.$store.commit("LOGIN_USER");
    },
  },
};
</script>
