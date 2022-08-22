<template>
  <div v-if="showing">
    <div>The modal will go here</div>
  </div>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
  },
};
</script>
