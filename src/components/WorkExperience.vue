<template>
  <div class="flex pt-4">
    <p class="year pr-4">{{ workExperience.year }}</p>
    <div class="flex flex-col items-center pt-2 pr-4">
      <div class="circle"></div>
      <div class="dotted-line"></div>
    </div>
    <div>
      <p class="font-bold">
        {{ workExperience.role }} ({{ workExperience.location }})
      </p>
      <p>{{ workExperience.company }}, {{ workExperience.duration }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  workExperience: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.year {
  color: #ff824a;
}

.dotted-line {
  border-right: 1px dashed #a5a4a4;
  height: 100%;
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff824a;
}

p {
  color: #e0d9da;
}
</style>
