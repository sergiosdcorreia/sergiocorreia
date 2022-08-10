<template>
  <div class="home">
    <h1>Sergio Correia</h1>
    <h2>Building a better web.</h2>
    <p>Front End Web Developer</p>
    <h2>Technologies</h2>
    <h3>Development</h3>
    <h4>HTML/CSS</h4>
    <template v-for="skill in skills" :key="skill.skillName">
      <AnimatedSkill :skills="skill" />
    </template>
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
import { ref } from "vue";
import Skills from "@/data/skills.json";
import AnimatedSkill from "@/components/AnimatedSkill.vue";

export default {
  name: "HomeView",
  components: { AnimatedSkill },
  setup() {
    const skills = ref(Skills);
    return { skills };
  },
};
</script>
