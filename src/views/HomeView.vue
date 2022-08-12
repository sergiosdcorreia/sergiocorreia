<template>
  <div class="home container pt-10">
    <section class="flex justify-between items-center">
      <div>
        <h1 class="main-title">sérgio correia</h1>
        <h2 class="subtitle mt-1">frontend web developer</h2>
      </div>
      <div class="profile-picture flex justify-center items-center">
        <img src="@/assets/images/SergioFoto200.png" />
      </div>
    </section>
    <section class="content-section p-6 mt-10">
      <h3>He loves development and design</h3>
      <p class="pt-4">
        Being passionate about Design and Technology, he finds himself
        constantly exploring and learning about new trends and technologies in
        the field of <span class="font-bold">Web Design</span> and
        <span class="font-bold">Development</span>. If you need someone who can
        quickly prototype and develop with <span class="font-bold">HTML</span>,
        <span class="font-bold">CSS</span> and
        <span class="font-bold">JavaScript (Vue.js)</span> let's talk!
      </p>
    </section>
    <section class="content-section p-6 mt-10">
      <div v-if="skills.length" class="flex">
        <template v-for="skill in skills" :key="skill.skillName">
          <AnimatedSkill :skills="skill" />
        </template>
      </div>
    </section>
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
.home {
  margin: 0 auto;
}

.main-title {
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 78px;
  line-height: 78px;
  color: #e0d9da;
}

.subtitle {
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #ff824a;
}

.profile-picture {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #e0d9da;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}

h3 {
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #e0d9da;
}

p {
  font-family: "Roboto";
  color: #e0d9da;
}

.content-section {
  background-color: #25272b;
  border-radius: 16px;
}
</style>
