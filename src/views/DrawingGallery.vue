<template>
  <h1 class="text-6xl font-bold" @click="showModal = true">
    This is the Drawing Gallery page
  </h1>
  <UploadForm
    :collection-ref="collectionRef"
    :collection-name="collectionName"
  />
  <transition-group
    v-if="documents.length"
    tag="div"
    name="grid"
    appear
    class="img-grid"
  >
    <template v-for="document in documents" :key="document.id">
      <GalleryList :documents="document" @selected="updateSelectedImgUrl" />
    </template>
  </transition-group>
  <Modal
    v-if="selectedImgUrl"
    :img-url="selectedImgUrl"
    @close="updateSelectedImgUrl"
  />
</template>

<script>
import { ref } from "vue";
import GalleryList from "@/components/GalleryList.vue";
import UploadForm from "@/components/UploadForm.vue";
import Modal from "@/components/Modal.vue";
import { useCollection } from "@/composables/useCollection";

export default {
  name: "PhotoGallery",
  components: { UploadForm, GalleryList, Modal },
  setup() {
    const selectedImgUrl = ref(null);
    const collectionRef = "drawings/";
    const collectionName = "drawings";

    const updateSelectedImgUrl = (url) => {
      selectedImgUrl.value = url;
    };

    const { documents } = useCollection(collectionName);

    return {
      documents,
      selectedImgUrl,
      collectionRef,
      collectionName,
      updateSelectedImgUrl,
    };
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
