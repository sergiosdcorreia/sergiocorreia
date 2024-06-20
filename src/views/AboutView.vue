<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="title text-2xl md:text-6xl font-bold select-none">
      his background
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
    <div>
      <div class="content-section w-full p-6 mt-10 md:mr-10">
        <h3 class="text-center md:text-left">About the website</h3>
        <p class="pt-4 mr-0 md:mr-10">
          Developed and designed by Sérgio Correia using the Vue 3 framework,
          Tailwind CSS and Firebase.
        </p>
        <p>
          Check the website's repository
          <a
            href="https://github.com/sergiosdcorreia/sergiocorreia"
            target="blank"
            class="font-bold"
            >here</a
          >.
        </p>
        <p class="text-xs pt-4">© Sérgio Correia 2024</p>
      </div>
    </div>
  </div>
</template>
<script>
import ContentCards from "@/components/ContentCards.vue";
import { useCollection } from "@/composables/useCollection";

export default {
  name: "AboutView",
  components: { ContentCards },
  setup() {
    const { documents } = useCollection("about");

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
