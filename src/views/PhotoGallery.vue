<template>
  <h1 class="text-6xl font-bold" @click="showModal = true">
    This is the Photo Gallery page
  </h1>
  <UploadForm />
  <div v-if="documents.length" class="img-grid">
    <template v-for="document in documents" :key="document.id">
      <GalleryList :documents="document" />
    </template>
  </div>
  <CardModal :showing="showModal" />
</template>

<script>
import { ref } from "vue";
import CardModal from "@/components/CardModal.vue";
import GalleryList from "@/components/GalleryList.vue";
import UploadForm from "@/components/UploadForm.vue";
import { useCollection } from "@/composables/useCollection";

export default {
  name: "PhotoGallery",
  components: { CardModal, UploadForm, GalleryList },
  setup() {
    const showModal = ref(false);

    const { documents } = useCollection();

    return { showModal, documents };
  },
};
</script>

<style lang="scss" scoped>
.img-grid {
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
}
</style>
