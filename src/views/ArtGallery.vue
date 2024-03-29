<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="title text-2xl md:text-6xl font-bold select-none">
      art gallery
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
      class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-10 py-10"
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
  </div>
</template>

<script>
import { ref, computed } from "vue";
import GalleryList from "@/components/GalleryList.vue";
import { useCollection } from "@/composables/useCollection";
import { useStore } from "vuex";

const UploadForm = () =>
  import(/* webpackChunkName: "UploadForm" */ "@/components/UploadForm.vue");

const Modal = () =>
  import(/* webpackChunkName: "Modal" */ "@/components/Modal.vue");

export default {
  name: "ArtGallery",
  components: { UploadForm, GalleryList, Modal },
  setup() {
    const store = useStore();
    const selectedImgUrl = ref(null);
    const collectionRef = "drawings/";
    const collectionName = "drawings";
    const isLoggedIn = computed(() => {
      return store.state.isLoggedIn;
    });

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
  color: var(--light-grey);
}
</style>
