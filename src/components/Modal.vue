<template>
  <div class="backdrop" @click="handleClick">
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  name: "PhotoModal",
  props: {
    imgUrl: {
      type: String,
      default: "",
    },
  },
  emits: ["close"],
  setup(props, context) {
    const handleClick = () => {
      context.emit("close", null);
    };

    return { handleClick };
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  cursor: pointer;

  img {
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba($color: #000000, $alpha: 0.5);
    position: relative;
  }
}
</style>
