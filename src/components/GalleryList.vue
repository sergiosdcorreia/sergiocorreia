<template>
  <div class="img-wrap">
    <img :src="documents.url" :alt="documents.name" />
  </div>
</template>

<script setup>
defineProps({
  documents: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.img-wrap {
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 0.8;

  img {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
