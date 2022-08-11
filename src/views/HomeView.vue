<template>
  <div class="home">
    <h1>Sergio Correia</h1>
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
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseInit";
import AnimatedSkill from "@/components/AnimatedSkill.vue";

export default {
  name: "HomeView",
  components: { AnimatedSkill },
  setup() {
    const skills = ref([]);

    const getSkills = async () => {
      let fbSkills = [];
      const querySnapshot = await getDocs(collection(db, "skills"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const skills = {
          id: doc.id,
          ...doc.data(),
        };
        fbSkills.push(skills);
      });
      skills.value = fbSkills;
    };

    onMounted(getSkills);
    return { skills };
  },
};
</script>
