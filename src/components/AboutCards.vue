<template>
  <div class="content-section w-full md:w-50 p-6 mt-10 md:mr-10">
    <h3 class="text-center md:text-left">{{ about.title }}</h3>
    <div class="flex flex-col xl:flex-row">
      <p class="py-4 mr-0 md:mr-10">
        {{ about.text }}
      </p>
      <div v-if="about.imageUrl">
        <img
          class="mt-4 max-w-[260px] md:max-w-xs rounded-2xl"
          :src="about.imageUrl"
        />
        <span class="text-xs text-slate-400">{{ about.caption }}</span>
        <a class="text-xs text-slate-400 font-bold" :href="about.captionHref">
          &nbsp;{{ about.captionAnchor }}</a
        >
      </div>
      <div v-if="about.videoId" class="mt-4">
        <div class="hidden md:block">
          <vimeo-player
            ref="player"
            :video-id="about.videoId"
            :player-height="250"
            :player-width="320"
            @ready="onReady"
          />
          <span class="text-xs text-slate-400">{{ about.caption }}</span>
        </div>
        <div class="md:hidden">
          <vimeo-player
            ref="player"
            :video-id="about.videoId"
            :player-height="200"
            :player-width="250"
            @ready="onReady"
          />
          <span class="text-xs text-slate-400">{{ about.caption }}</span>
        </div>
      </div>
      <div v-if="about.videoUrl">
        <YouTube :src="about.videoUrl" width="250" height="200" />
        <span class="text-xs text-slate-400">{{ about.caption }}</span
        ><a class="text-xs text-slate-400 font-bold" :href="about.captionHref"
          >&nbsp;{{ about.captionAnchor }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  about: {
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
