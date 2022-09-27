<template>
  <div class="content-section w-full md:w-50 p-6 mt-10 md:mr-10">
    <div v-if="content.logo">
      <img class="w-16 mb-3" :src="content.logo" />
    </div>
    <h3 class="text-center md:text-left">{{ content.title }}</h3>
    <div class="flex flex-col xl:flex-row">
      <p class="py-4 mr-0 md:mr-10">
        {{ content.text }}
      </p>
      <div v-if="content.imageUrl">
        <img
          class="mt-4 max-w-[260px] md:max-w-xs rounded-2xl"
          :src="content.imageUrl"
        />
        <span class="text-xs text-slate-400">{{ content.caption }}</span>
        <a class="text-xs text-slate-400 font-bold" :href="content.captionHref">
          &nbsp;{{ content.captionAnchor }}</a
        >
      </div>
      <div v-if="content.videoId" class="mt-4">
        <div class="hidden md:block">
          <vimeo-player
            ref="player"
            :video-id="content.videoId"
            :player-height="250"
            :player-width="320"
            @ready="onReady"
          />
          <span class="text-xs text-slate-400">{{ content.caption }}</span>
        </div>
        <div class="md:hidden">
          <vimeo-player
            ref="player"
            :video-id="content.videoId"
            :player-height="200"
            :player-width="250"
            @ready="onReady"
          />
          <span class="text-xs text-slate-400">{{ content.caption }}</span>
        </div>
      </div>
      <div v-if="content.videoUrl" class="mt-4">
        <YouTube :src="content.videoUrl" width="250" height="200" />
        <span class="text-xs text-slate-400">{{ content.caption }}</span
        ><a class="text-xs text-slate-400 font-bold" :href="content.captionHref"
          >&nbsp;{{ content.captionAnchor }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  content: {
    type: Array,
    default() {
      return [];
    },
  },
});

const playerReady = ref(false);

function onReady() {
  playerReady.value = true;
}
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

p {
  color: var(--light-grey);
}
</style>
