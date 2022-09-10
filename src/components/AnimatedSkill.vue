<template>
  <div class="skill m-6">
    <div class="skillCircle">
      <div class="outer">
        <div class="inner">
          <div id="number">{{ animatedSkill }}%</div>
        </div>
      </div>
      <svg
        :class="skills.skillName"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <circle class="circle" cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
    <div class="skillName">{{ skills.skillName }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  skills: {
    type: Array,
    default() {
      return [];
    },
  },
});
const animatedSkill = ref(null);

function skillCounter() {
  let counter = 0;
  document
    .querySelector(`.${props.skills.skillName}`)
    .style.setProperty("--percent", props.skills.offset);
  setInterval(() => {
    if (counter == props.skills.skillPercent) {
      clearInterval();
    } else {
      counter++;
      animatedSkill.value = counter;
    }
  }, props.skills.speed);
}

onMounted(skillCounter);
</script>

<style lang="scss" scoped>
.skill {
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .skillCircle {
    width: 160px;
    height: 160px;
    position: relative;

    .outer {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      background-color: var(--dark-grey);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .inner {
        height: 130px;
        width: 130px;
        border-radius: 50%;
        box-shadow: inset;
        background-color: var(--darker-grey);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        #number {
          position: absolute;
          font-family: "Baloo 2", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--light-grey);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(-90deg);
      --percent: 472;

      circle {
        fill: none;
        stroke: var(--primary);
        stroke-width: 10px;
        stroke-dasharray: 472;
        stroke-dashoffset: 472;
        animation: anim 2s ease-in forwards;
      }
    }
  }
}

.skillName {
  font-family: "Baloo 2", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--light-grey);
  padding-top: 16px;
}

@keyframes anim {
  100% {
    stroke-dashoffset: var(--percent);
  }
}
</style>
