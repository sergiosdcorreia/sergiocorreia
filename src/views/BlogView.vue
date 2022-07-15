<template>
  <h1>This is the Blog page</h1>
  <BlogPost v-for="(post, index) in blogPosts" :key="index" :post="post" />
  <h3>View More Recent Blogs</h3>
  <BlogCards v-for="{ post, index } in blogPosts" :key="index" :post="post" />
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCards from "@/components/BlogCards.vue";

export default {
  name: "BlogView",
  components: { BlogPost, BlogCards },
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
