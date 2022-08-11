<template>
  <div class="home">
    <h1 class="main-title">sergio correia</h1>
    <h2>Building a better web.</h2>
    <p>Front End Web Developer</p>
    <h2>Technologies</h2>
    <h3>Development</h3>
    <h4>HTML/CSS</h4>
    <div v-if="skills.length">
      <template v-for="skill in skills" :key="skill.skillName">
        <AnimatedSkill :skills="skill" />
      </template>
    </div>
    <p>Bootstrap</p>
    <p>Tailwind</p>
    <h4>JavaScript</h4>
    <p>Vue</p>
    <p>React</p>
    <h4>Testing</h4>
    <p>Jest</p>
    <h4>Source Control</h4>
    <p>GitHub</p>
    <p>GitLab</p>
    <h4>Backend</h4>
    <p>Firebase</p>
    <h3>Design</h3>
    <p>Photoshop</p>
    <p>Illustrator</p>
    <p>Adobe XD</p>
    <p>Figma</p>
  </div>
</template>

<script>
import { getSkills } from "@/composables/data.js";
import AnimatedSkill from "@/components/AnimatedSkill.vue";

export default {
  name: "HomeView",
  components: { AnimatedSkill },
  setup() {
    const { skills } = getSkills();

    return { skills };
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #e0d9da;
}
</style>
