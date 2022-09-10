<template>
  <div class="img-wrap rounded-2xl" @click="handleClick(documents.url)">
    <img :src="documents.url" :alt="documents.name" />
  </div>
</template>

<script>
export default {
  props: {
    documents: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ["selected"],
  setup(props, context) {
    const handleClick = (url) => {
      context.emit("selected", url);
    };

    return { handleClick };
  },
};
</script>

<style lang="scss" scoped>
.img-wrap {
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 0.8;
  cursor: pointer;

  img {
    min-width: 100%;
    min-height: 100%;
    max-width: 180%;
    position: absolute;
    top: -70%;
    left: -40%;
    transform: translate(0, 50%);
  }
}
</style>
