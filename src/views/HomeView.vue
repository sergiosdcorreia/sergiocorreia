<template>
  <div class="home container mx-auto px-4 pt-10">
    <section
      class="flex flex-col-reverse justify-start md:flex-row md:justify-between md:items-center"
    >
      <div>
        <h1 class="main-title font-bold text-5xl md:text-7xl select-none">
          sérgio correia
        </h1>
        <h2 class="subtitle font-bold text-2xl md:text-2xl mt-1 select-none">
          frontend web developer
        </h2>
      </div>
      <div
        class="profile-picture flex justify-center items-center mb-3 md:mb-0 w-24 md:w-40 h-24 md:h-40"
      >
        <img class="w-20 md:w-36" src="@/assets/images/SergioFoto200.png" />
      </div>
    </section>
    <div class="flex flex-col md:flex-row">
      <section class="content-section w-full md:w-50 p-6 mt-10 mr-10">
        <h3 class="text-center md:text-left">
          He loves development and design
        </h3>
        <p class="pt-4">
          Being passionate about Technology and Design, he finds himself
          constantly exploring and learning about new technologies and new
          trends in the field of
          <span class="font-bold">Web Development</span> and
          <span class="font-bold">Web Design</span>. If you need someone who can
          quickly prototype and develop with
          <span class="font-bold">HTML</span>,
          <span class="font-bold">CSS</span> and
          <span class="font-bold">JavaScript (Vue.js)</span> he's happy to help!
        </p>
        <button class="btn-primary mt-6 font-bold">Hire him!</button>
      </section>
      <section class="content-section p-6 mt-10">
        <h3 class="text-center md:text-left">
          Around 5 years of development experience
        </h3>
        <div v-if="workExperience.length">
          <template v-for="work in workExperience" :key="work.company">
            <WorkExperience :work-experience="work" />
          </template>
        </div>
      </section>
    </div>
    <div class="flex flex-col-reverse md:flex-row">
      <Info />
      <section class="content-section flex justify-around p-6 mt-10">
        <div class="flex flex-col">
          <h3 class="text-center md:text-left">His skillset</h3>
          <div v-if="skills.length" class="flex flex-col md:flex-row">
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
  color: var(--light-grey);
}

.subtitle {
  font-family: "Baloo 2", sans-serif;
  color: var(--primary);
}

.profile-picture {
  border-radius: 50%;
  background-color: var(--light-grey);

  img {
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

.btn-primary {
  background-color: var(--primary);
  padding: 0.5em 1em;
  color: var(--light-grey);
  border-radius: 35px;
}

.content-section {
  background-color: var(--darker-grey);
  border-radius: 16px;
}

.w-50 {
  width: 50%;
}
</style>
