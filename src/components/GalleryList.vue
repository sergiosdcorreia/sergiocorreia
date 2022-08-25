<template>
  <div>
    <img :src="gallery.src" :alt="gallery.description" />
    <div>{{ gallery.description }}</div>
  </div>
</template>

<script>
export default {
  name: "GalleryList",
  props: {
    gallery: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style></style>
