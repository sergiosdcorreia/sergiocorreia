<template>
  <div class="skill">
    <div class="skillCircle">
      <div class="outer">
        <div class="inner">
          <div id="number">{{ animatedSkillValue }}%</div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
    <!--<div>{{ skill.name }}</div>-->
    <div class="skillName">Bootstrap</div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "AnimatedSkill",
  setup() {
    const skillValue = ref(65);
    const speedValue = ref(30);
    const animatedSkillValue = ref(null);

    const skillCounter = () => {
      let counter = 0;
      setInterval(() => {
        if (counter == skillValue.value) {
          clearInterval();
        } else {
          counter++;
          animatedSkillValue.value = counter;
        }
      }, speedValue.value);
    };

    onMounted(skillCounter);

    return { animatedSkillValue };
  },
};
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

      circle {
        fill: none;
        stroke: orange;
        stroke-width: 20px;
        stroke-dasharray: 472;
        stroke-dashoffset: 472;
        animation: anim 2s linear forwards;
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
    stroke-dashoffset: 165.2;
  }
}
</style>
