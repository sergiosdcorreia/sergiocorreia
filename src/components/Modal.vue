<template>
  <div class="backdrop" @click="handleClick">
    <transition name="image" appear>
      <img :src="imgUrl" />
    </transition>
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
    max-width: 80%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba($color: #000000, $alpha: 0.5);
    position: relative;
  }
}
.image-enter-from {
  bottom: -200%;
  opacity: 0;
}
.image-enter-to {
  bottom: 0;
  opacity: 1;
}
.image-enter-active {
  transition: all ease-in-out 0.7s;
}
</style>
