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
    <div class="flex">
      <section class="content-section w-50 p-6 mt-10 mr-10">
        <h3>He loves development and design</h3>
        <p class="pt-4">
          Being passionate about Design and Technology, he finds himself
          constantly exploring and learning about new trends and technologies in
          the field of <span class="font-bold">Web Design</span> and
          <span class="font-bold">Development</span>. If you need someone who
          can quickly prototype and develop with
          <span class="font-bold">HTML</span>,
          <span class="font-bold">CSS</span> and
          <span class="font-bold">JavaScript (Vue.js)</span> hire him!
        </p>
      </section>
      <section class="content-section p-6 mt-10">
        <h3>Around 5 years of development experience</h3>
        <div v-if="workExperience.length">
          <template v-for="work in workExperience" :key="work.company">
            <WorkExperience :work-experience="work" />
          </template>
        </div>
      </section>
    </div>
    <div class="flex">
      <Info />
      <section class="content-section flex justify-around p-6 mt-10">
        <div class="flex flex-col">
          <h3>His skillset</h3>
          <div v-if="skills.length" class="flex">
            <template v-for="skill in skills" :key="skill.skillName">
              <AnimatedSkill :skills="skill" />
            </template>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AnimatedSkill from "@/components/AnimatedSkill.vue";
import Info from "@/components/Info.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import { getSkills, getWorkExperience } from "@/composables/data.js";

export default {
  name: "HomeView",
  components: { AnimatedSkill, Info, WorkExperience },
  setup() {
    const { skills } = getSkills();
    const { workExperience } = getWorkExperience();

    return { skills, workExperience };
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
  color: var(--light-grey);
}

.subtitle {
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: var(--primary);
}

.profile-picture {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: var(--light-grey);

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
  color: var(--light-grey);
}

p {
  color: var(--light-grey);
}

.content-section {
  background-color: var(--darker-grey);
  border-radius: 16px;
}

.w-50 {
  width: 50%;
}
</style>
