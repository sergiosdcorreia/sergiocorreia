<template>
  <h1
    class="title text-center pt-10 text-2xl md:text-6xl font-bold select-none"
  >
    photo gallery
  </h1>
  <div v-if="isLoggedIn">
    <UploadForm
      :collection-ref="collectionRef"
      :collection-name="collectionName"
    />
  </div>
  <transition-group
    v-if="documents.length"
    tag="div"
    name="grid"
    appear
    class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 py-10 mx-3 md:mx-10"
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
import { ref, computed } from "vue";
import GalleryList from "@/components/GalleryList.vue";
import UploadForm from "@/components/UploadForm.vue";
import Modal from "@/components/Modal.vue";
import { useCollection } from "@/composables/useCollection";
import { useStore } from "vuex";

export default {
  name: "PhotoGallery",
  components: { UploadForm, GalleryList, Modal },
  setup() {
    const store = useStore();
    const selectedImgUrl = ref(null);
    const collectionRef = "photos/";
    const collectionName = "photos";
    const isLoggedIn = computed(() => {
      return store.state.isLoggedIn;
    });
    const updateSelectedImgUrl = (url) => {
      selectedImgUrl.value = url;
      console.log(selectedImgUrl);
    };

    const { documents } = useCollection(collectionName);

    return {
      documents,
      selectedImgUrl,
      collectionRef,
      collectionName,
      updateSelectedImgUrl,
      isLoggedIn,
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-enter-from {
  opacity: 0;
}
.grid-enter-to {
  opacity: 0.8;
}
.grid-enter-active {
  transition: all 3s ease;
}
.title {
  font-family: "Baloo 2", sans-serif;
  color: var(--primary);
}
</style>
