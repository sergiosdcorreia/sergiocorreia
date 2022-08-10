<template>
  <div class="skill">
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
        <circle id="circle" cx="80" cy="80" r="70" stroke-linecap="round" />
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
  console.log(props.skills.offset);
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
      height: 160px;
      width: 160px;
      border-radius: 50%;

      position: relative;

      .inner {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        box-shadow: inset;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        #number {
          position: absolute;
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
        stroke: orange;
        stroke-width: 20px;
        stroke-dasharray: 472;
        stroke-dashoffset: 472;
        animation: anim 2s ease-in forwards;
      }
    }
  }
}

.skillName {
  padding-top: 16px;
  font-weight: 600;
}

@keyframes anim {
  100% {
    stroke-dashoffset: var(--percent);
  }
}
</style>
