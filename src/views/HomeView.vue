<template>
  <div class="home container mx-auto px-4 pt-10">
    <transition
      tag="section"
      name="heading"
      appear
      class="flex flex-col-reverse justify-start md:flex-row md:justify-between md:items-center"
    >
      <div>
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
      </div>
    </transition>
    <transition
      v-if="visible"
      name="content"
      tag="section"
      appear
      class="flex flex-col md:flex-row"
    >
      <div>
        <div class="content-section w-full md:w-50 p-6 mt-10 mr-10">
          <h3 class="text-center md:text-left">
            He loves development and design
          </h3>
          <p class="pt-4">
            Being passionate about Technology and Design, he finds himself
            constantly exploring and learning about new technologies and new
            trends in the field of
            <span class="font-bold">Web Development</span> and
            <span class="font-bold">Web Design</span>. If you need someone who
            can quickly prototype and develop with
            <span class="font-bold">HTML</span>,
            <span class="font-bold">CSS</span> and
            <span class="font-bold">JavaScript (Vue.js)</span> he's happy to
            help!
          </p>
          <div class="flex flex-col md:flex-row">
            <a
              href="mailto: sergiosdcorreia@gmail.com"
              class="btn-primary text-center inline-block mt-6 font-bold"
              >Hire him!</a
            >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/files%2FCV_SergioCorreia_2022.pdf?alt=media&token=fea6db60-fb72-4290-b780-316393ad52a7"
              class="btn-secondary text-center inline-block md:ml-4 mt-6 font-bold"
              target="blank"
            >
              Download CV
            </a>
            <a
              href="https://github.com/sergiosdcorreia"
              class="btn-secondary text-center inline-block md:ml-4 mt-6 font-bold"
            >
              GitHub Repository
            </a>
          </div>
        </div>
        <div class="content-section p-6 mt-10">
          <h3 class="text-center md:text-left">
            Around 5 years of development experience
          </h3>
          <div v-if="workExperience.length">
            <template v-for="work in workExperience" :key="work.company">
              <WorkExperience :work-experience="work" />
            </template>
          </div>
        </div>
      </div>
    </transition>
    <transition
      v-if="visible"
      tag="section"
      name="content"
      appear
      class="flex flex-col-reverse md:flex-row"
    >
      <div>
        <Info />
        <section class="content-section flex justify-around p-6 mt-10 md:mb-10">
          <div class="flex flex-col">
            <h3 class="text-center md:text-left">His development skills</h3>
            <div v-if="skills.length" class="flex flex-col lg:flex-row">
              <template v-for="skill in skills" :key="skill.skillName">
                <AnimatedSkill :skills="skill" />
              </template>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import AnimatedSkill from "@/components/AnimatedSkill.vue";
import Info from "@/components/Info.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import { getSkills, getWorkExperience } from "@/composables/data.js";

export default {
  name: "HomeView",
  components: { AnimatedSkill, Info, WorkExperience },
  setup() {
    let visible = ref(false);
    const { skills } = getSkills();
    const { workExperience } = getWorkExperience();

    function delayElements() {
      setTimeout(() => {
        visible.value = true;
      }, 1000);
    }

    onMounted(delayElements);
    return { skills, workExperience, visible };
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
}

.heading-enter-from {
  opacity: 0;
}
.heading-enter-to {
  opacity: 1;
}
.heading-enter-active {
  transition: all 2s ease;
}

.content-enter-from {
  opacity: 0;
}
.content-enter-to {
  opacity: 1;
}
.content-enter-active {
  transition: all 4s ease;
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

  &:hover {
    background-color: var(--light-grey);
    color: var(--primary);
  }
}

.btn-secondary {
  background-color: var(--light-grey);
  padding: 0.5em 1em;
  color: var(--primary);
  border-radius: 35px;

  &:hover {
    background-color: var(--primary);
    color: var(--light-grey);
  }
}

.content-section {
  background-color: var(--darker-grey);
  border-radius: 16px;
}

.w-50 {
  width: 50%;
}
</style>
