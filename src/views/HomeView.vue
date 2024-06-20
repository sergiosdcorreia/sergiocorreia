<template>
  <div class="home container mx-auto px-4 pt-10">
    <transition
      tag="section"
      name="heading"
      appear
      class="flex flex-col-reverse justify-start md:flex-row md:justify-between items-center"
    >
      <section>
        <div>
          <h1
            class="main-title font-bold text-center md:text-left text-5xl md:text-7xl select-none"
          >
            sérgio correia
          </h1>
          <h2
            class="subtitle font-bold text-center md:text-left text-2xl md:text-2xl mt-1 select-none"
          >
            creative frontend developer
          </h2>
        </div>
        <div
          class="profile-picture flex justify-center items-center mb-3 md:mb-0 w-24 md:w-40 h-24 md:h-40"
        >
          <img class="w-20 md:w-36" src="@/assets/images/SergioFoto200.png" />
        </div>
      </section>
    </transition>
    <transition
      v-if="visible"
      name="content"
      tag="section"
      appear
      class="flex flex-col md:flex-row"
    >
      <section>
        <div class="content-section w-full md:w-50 p-6 mt-10 mr-10">
          <h3 class="text-center md:text-left">
            He loves web development and design
          </h3>
          <p class="pt-4">
            He's a Creative Developer with 7 years of experience specialising in
            <span class="font-bold">JavaScript</span> and a strong background in
            <span class="font-bold">Design</span>. Proficient in
            <span class="font-bold">Figma</span> and other design tools, he has
            a keen eye for creating visually appealing, intuitive, and
            <span class="font-bold">responsive</span> user experiences. With a
            proven track record in developing seamless
            <span class="font-bold">web applications</span>, he's eager to apply
            his technical expertise and design sensibilities to create
            <span class="font-bold">innovative solutions</span> for clients.
          </p>
          <div class="flex flex-col md:flex-row">
            <a
              href="mailto: sergiosdcorreia@gmail.com"
              class="btn-primary text-center inline-block mt-6 font-bold"
              >Let's talk!</a
            >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/files%2FCV_SergioCorreia_24_05.pdf?alt=media&token=ef15c727-d95c-447a-8489-111a662882e1"
              class="btn-secondary text-center inline-block md:ml-4 mt-6 font-bold"
              target="blank"
            >
              Download CV
            </a>
            <a
              href="https://github.com/sergiosdcorreia"
              class="btn-secondary text-center inline-block md:ml-4 mt-6 font-bold"
              target="blank"
            >
              GitHub Repository
            </a>
            <a
              href="https://www.behance.net/SergioCorreiaDesign"
              class="btn-secondary text-center inline-block md:ml-4 mt-6 font-bold"
              target="blank"
            >
              Design Portfolio
            </a>
          </div>
        </div>
        <ExperienceSection />
      </section>
    </transition>
    <transition
      v-if="visible"
      tag="section"
      name="content"
      appear
      class="flex flex-col-reverse md:flex-row"
    >
      <section>
        <Info />
        <SkillsSection />
      </section>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Info from "@/components/Info.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";

export default {
  name: "HomeView",
  components: { SkillsSection, Info, ExperienceSection },
  setup() {
    let visible = ref(false);

    function delayElements() {
      setTimeout(() => {
        visible.value = true;
      }, 1000);
    }
    onMounted(delayElements);
    return { visible };
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
  flex-grow: 1;
}

.w-50 {
  width: 50%;
}
</style>
