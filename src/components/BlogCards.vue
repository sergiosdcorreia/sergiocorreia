<template>
  <div>
    <p>These are Blog Cards!</p>
    <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCards",
  props: {
    post: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
