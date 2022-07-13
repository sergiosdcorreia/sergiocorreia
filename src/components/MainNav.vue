<template>
  <nav>
    <div>
      <router-link :to="{ name: 'home' }">Sergio Correia</router-link> |
    </div>
    <router-link :to="{ name: 'blog' }">Blog</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
