<template>
  <div class="content-section flex justify-around p-6 mt-10 md:mb-10">
    <div class="flex flex-col">
      <h3 class="text-center md:text-left">His development skills</h3>
      <div v-if="documents.length" class="flex flex-col lg:flex-row">
        <template v-for="skill in documents" :key="skill.skillName">
          <AnimatedSkill :skills="skill" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { useCollectionWithOrder } from "@/composables/useCollection";

export default {
  setup() {
    const collectionName = "skills";
    const orderBy = "skillPercent";
    const { documents } = useCollectionWithOrder(collectionName, orderBy);

    return { documents };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--light-grey);
}
</style>
