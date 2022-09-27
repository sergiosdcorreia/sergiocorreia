<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="title text-2xl md:text-6xl font-bold select-none">
      achievements
    </h1>
    <transition
      name="content"
      tag="section"
      appear
      class="grid grid-cols-1 md:grid-cols-2 gap-x-6"
    >
      <div>
        <template v-for="item in documents" :key="item.id">
          <ContentCards :content="item" />
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
import ContentCards from "@/components/ContentCards.vue";
import { useCollection } from "@/composables/useCollection";

export default {
  name: "MyAchievements",
  components: { ContentCards },
  setup() {
    const { documents } = useCollection("achievements");

    return {
      documents,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "Baloo 2", sans-serif;
  color: var(--light-grey);
}

.content-enter-from {
  opacity: 0;
}
.content-enter-to {
  opacity: 1;
}
.content-enter-active {
  transition: all 4s ease;
}
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

p {
  color: var(--light-grey);
}
</style>
