<template>
  <h1 class="text-6xl font-bold" @click="showModal = true">
    This is the Photo Gallery page
  </h1>
  <UploadForm />
  <div v-if="gallery">
    <template v-for="image in gallery" :key="image.src">
      <GalleryList :gallery="image" />
    </template>
  </div>
  <CardModal :showing="showModal" />
</template>

<script>
import { ref } from "vue";
import CardModal from "@/components/CardModal.vue";
import GalleryList from "@/components/GalleryList.vue";
import UploadForm from "@/components/UploadForm.vue";

export default {
  name: "PhotoGallery",
  components: { CardModal, UploadForm, GalleryList },
  setup() {
    const showModal = ref(false);
    const gallery = ref([
      {
        src: "https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/photos%2Famarante.jpg?alt=media&token=15473f3a-07c3-4e9e-9916-dfc510eed3e2",
        description: "Description",
        alt: "Image alt",
        thumbnail: "@/assets/images/SergioFoto200.png",
        thumbnailWidth: "200px",
        thumbnailheight: "100px",
        autoplay: true,
        controls: true,
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/photos%2Famarante.jpg?alt=media&token=15473f3a-07c3-4e9e-9916-dfc510eed3e2",
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
