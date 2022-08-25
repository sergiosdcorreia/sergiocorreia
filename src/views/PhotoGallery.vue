<template>
  <h1 class="text-6xl font-bold" @click="showModal = true">
    This is the Photo Gallery page
  </h1>
  <UploadForm />
  <transition-group
    v-if="documents.length"
    tag="div"
    name="grid"
    appear
    class="img-grid"
  >
    <template v-for="document in documents" :key="document.id">
      <GalleryList :documents="document" />
    </template>
  </transition-group>
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
.grid-enter-from {
  opacity: 0;
}
.grid-enter-to {
  opacity: 0.8;
}
.grid-enter-active {
  transition: all 3s ease;
}
</style>
