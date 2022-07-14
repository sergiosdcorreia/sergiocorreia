<template>
  <h1>This is the Blog page</h1>
  <BlogPost :post="post" v-for="(post, index) in blogPosts" :key="index" />
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "BlogView",
  components: { BlogPost },
  data() {
    return {
      blogPosts: [
        {
          title: "This is a Title!",
          description: "This is a blog post description",
          photo: "picture-1",
        },
        {
          title: "This is a Title!",
          description: "This is a blog post description",
          photo: "picture-2",
        },
      ],
    };
  },
};
</script>
