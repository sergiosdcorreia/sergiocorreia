<template>
  <div class="content-section p-6 mt-10">
    <h3 class="text-center md:text-left">
      Around 7 years of development experience
    </h3>
    <div v-if="documents.length">
      <template v-for="work in documents" :key="work.company">
        <WorkExperience :work-experience="work" />
      </template>
    </div>
  </div>
</template>

<script>
import { useCollectionWithOrder } from "@/composables/useCollection";

export default {
  setup() {
    const collectionName = "work experience";
    const orderBy = "year";
    const { documents } = useCollectionWithOrder(collectionName, orderBy);
    console.log(documents);
    return { documents };
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  background-color: var(--darker-grey);
  border-radius: 16px;
}
h3 {
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--light-grey);
}
</style>
