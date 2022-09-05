<template>
  <div class="progress-bar" :style="{ width: progress + '%' }"></div>
</template>

<script>
import useStorage from "@/composables/useStorage";
import { watchEffect } from "vue";

export default {
  props: {
    file: {
      type: Array,
      default() {
        return [];
      },
    },
    collectionRef: {
      type: String,
      default: "",
    },
    collectionName: {
      type: String,
      default: "",
    },
  },
  emits: ["complete"],
  setup(props, context) {
    const { progress } = useStorage(
      props.file,
      props.collectionRef,
      props.collectionName
    );

    watchEffect(() => {
      if (progress.value >= 100) {
        setTimeout(() => {
          context.emit("complete");
        }, 1000);
      }
    });

    return { progress };
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  display: block;
  height: 6px;
  background: var(--primary);
  border-radius: 6px;
  margin-top: 20px;
  transition: width 0.3s ease;
}
</style>
