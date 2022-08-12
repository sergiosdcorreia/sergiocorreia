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
        <h3>Work experience</h3>
        <div class="flex pt-4">
          <p class="year pr-4">2020</p>
          <div class="flex flex-col items-center pt-2 pr-4">
            <div class="circle"></div>
            <div class="dotted-line"></div>
          </div>
          <div>
            <p class="font-bold">Frontend Web Developer (UK, Newquay)</p>
            <p>Flowmoco, Dec 2020 - Present</p>
          </div>
        </div>
        <div class="flex pt-4">
          <p class="year pr-4">2019</p>
          <div class="flex flex-col items-center pt-2 pr-4">
            <div class="circle"></div>
            <div class="dotted-line"></div>
          </div>
          <div>
            <p class="font-bold">Frontend Web Developer (UK, Bideford)</p>
            <p>Travel Chapter, Nov 2019 - Oct 2020 (1 year)</p>
          </div>
        </div>
        <div class="flex pt-4">
          <p class="year pr-4">2017</p>
          <div class="flex flex-col items-center pt-2 pr-4">
            <div class="circle"></div>
            <div class="dotted-line"></div>
          </div>
          <div>
            <p class="font-bold">
              Frontend Web Developer and Designer (UK, Exeter)
            </p>
            <p>Funeral Guide, Apr 2017 - Nov 2019 (2 years 8 months)</p>
          </div>
        </div>
      </section>
    </div>
    <section class="content-section flex justify-around p-6 mt-10">
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

.w-50 {
  width: 50%;
}

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
</style>
