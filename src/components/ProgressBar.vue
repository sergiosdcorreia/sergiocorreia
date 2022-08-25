<template>
  <div class="progress-bar">uploading...</div>
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
  },
  setup(props, context) {
    const { progress } = useStorage(props.file);

    watchEffect(() => {
      if (progress.value >= 100) {
        context.emit("complete");
      }
    });
  },
};
</script>

<style></style>
