<template>
  <nav>
    <div>
      <router-link :to="{ name: 'home' }">Sergio Correia</router-link> |
    </div>
    <router-link :to="{ name: 'blog' }">Blog</router-link> |
    <div v-if="isloggedIn">
      <router-link :to="{ name: 'createblog' }">Create Blog</router-link>
    </div>
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>
