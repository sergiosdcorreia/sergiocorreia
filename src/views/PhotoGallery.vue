<template>
  <h1 @click="showModal = true" class="text-6xl font-bold">
    This is the Photo Gallery page
  </h1>
  <Gallery :gallery="gallery"></Gallery>
  <CardModal :showing="showModal" />
</template>

<script>
import { ref } from "vue";
import CardModal from "@/components/CardModal.vue";

export default {
  name: "PhotoGallery",
  components: { CardModal },
  setup() {
    const showModal = ref(false);
    const gallery = ref([
      {
        src: "https://www.youtube.com/watch?v=OKNQO7S5DlU",
        description: "Description",
        alt: "Image alt",
        thumbnail: "@/assets/images/SergioFoto200.png",
        thumbnailWidth: "200px",
        thumbnailheight: "100px",
        autoplay: true,
        controls: true,
      },
    ]);

    return { gallery, showModal };
  },
};
</script>
