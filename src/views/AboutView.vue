<template>
  <div class="container mx-auto px-4">
    <h1 class="title pt-10 text-2xl md:text-6xl font-bold select-none">
      about
    </h1>
    <transition
      name="content"
      tag="section"
      appear
      class="flex flex-col md:flex-row"
    >
      <div>
        <div class="content-section w-full md:w-50 p-6 mt-10 md:mr-10">
          <h3 class="text-center md:text-left">He studied arts and crafts</h3>
          <div class="flex flex-col xl:flex-row">
            <p class="pt-4 mr-0 md:mr-10">
              At high school he explored lots of drawing and painting
              techniches. There he also studied history of art, geometry and
              math. He loved to paint with acrylic, soft and oil pastels as well
              as watercolor paintings.
            </p>
            <div class="mt-4">
              <img
                class="mt-4 max-w-[260px] md:max-w-xs rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/about%2Fvieiradasilva.jpg?alt=media&token=763432e6-6cac-4ff9-ae60-fcad39a87def"
              />
              <span class="text-xs text-slate-400"
                >Acrylic Painting (Inspired by Helena Vieira da Silva)</span
              >
            </div>
          </div>
        </div>
        <div class="content-section w-full md:w-50 p-6 mt-10 md:mr-10">
          <h3 class="text-center md:text-left">He studied architecture</h3>
          <div class="flex flex-col xl:flex-row">
            <p class="pt-4 mr-0 md:mr-10">
              In 2004 he started studying architecture at ESAP (Escola Superior
              Artistica do Porto) for 3 years. There he developed his drawing
              skills, made lots of architectural mockups and learned CAD
              software to create his architectural plans. He loves Luis
              Barragan's gardens, the Schindler's house, japanese architecture
              and it's culture of shadow.
            </p>
            <div>
              <img
                class="mt-4 max-w-[260px] md:max-w-xs rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/about%2Fschindler.jpg?alt=media&token=69d52678-6cd8-4373-acfc-3663eaa714cc"
              />
              <span class="text-xs text-slate-400"
                >Schindler's house, LA, USA by Rudolph Schindler</span
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div class="container mx-auto px-4">
    <transition
      name="content"
      tag="section"
      appear
      class="flex flex-col md:flex-row"
    >
      <div>
        <div class="content-section w-full md:w-50 p-6 mt-10 md:mr-10">
          <h3 class="text-center md:text-left">He studied design</h3>
          <div class="flex flex-col xl:flex-row">
            <p class="pt-4 mr-0 md:mr-10">
              In 2009 he started studying Design at ESAD Matosinhos (Escola
              Superior de Arte e Design). There he improved his artistic skills
              to another level especially in the areas of illustration, video
              production, 2D and 3D animation, interior design, photography and
              web design.
            </p>
            <div class="mt-4">
              <div class="hidden md:block">
                <vimeo-player
                  ref="player"
                  :video-id="videoID"
                  :player-height="height"
                  :player-width="width"
                  @ready="onReady"
                />
              </div>
              <div class="md:hidden">
                <vimeo-player
                  ref="player"
                  :video-id="videoID"
                  :player-height="200"
                  :player-width="250"
                  @ready="onReady"
                />
              </div>
              <span class="text-xs text-slate-400"
                >3D animation (Pinscreen technique) | ESAD</span
              >
            </div>
          </div>
        </div>
        <div class="content-section w-full md:w-50 p-6 mt-10 md:mr-10">
          <h3 class="text-center md:text-left">He studied programming</h3>
          <div class="flex flex-col xl:flex-row">
            <p class="pt-4 mr-0 md:mr-10">
              In 2015 he had Web Design classes at ESAD Matosinhos where he was
              introduced on a basic level to programming languages like HTML,
              CSS and JavaScript. He enjoyed the hability of creating content
              and be able to layout websites for the web. Since then he has been
              studying through online courses from websites like Udemy and
              Frontend Masters.
            </p>
            <div>
              <img
                class="mt-4 max-w-[260px] md:max-w-xs rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/about%2Fprogramming.jpg?alt=media&token=915afe96-ad94-4677-b608-bb0a6a136968"
              />
              <span class="text-xs text-slate-400"
                >BelayCords Web Design and Development project | ESAD</span
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div class="container mx-auto px-4">
    <transition
      name="content"
      tag="section"
      appear
      class="flex flex-col md:flex-row"
    >
      <div>
        <div class="content-section w-full md:w-50 p-6 mt-10 md:mr-10">
          <h3 class="text-center md:text-left">He plays the piano</h3>
          <div class="flex flex-col xl:flex-row">
            <p class="pt-4 mr-0 md:mr-10">
              Since he was 10 years old he started to learn piano at a Music
              Academy. He knows how to read sheet music and plays just for fun.
              He started by learning the classics and know he enjoys playing
              music of his favourite bands. Later he also worked as a freelance
              designer for this academy in exchange for classes.
            </p>
            <div class="mt-4">
              <YouTube
                src="https://www.youtube.com/watch?v=BTSzGy3F62A"
                :width="ytWidth"
                :height="ytHeight"
              />
              <span class="text-xs text-slate-400"
                >Playing at the academy's annual concert (piano on the
                left)</span
              >
            </div>
          </div>
        </div>
        <div class="content-section w-full md:w-50 p-6 mt-10 md:mr-10">
          <h3 class="text-center md:text-left">He loves to dance</h3>
          <div class="flex flex-col xl:flex-row">
            <p class="pt-4 mr-0 md:mr-10">
              Since 2015 one of his hobbies has been dancing Lindy Hop. He
              started in Porto at Hop Dance Studio. In 2017 he moved to Exeter,
              in England, where he continued to dance with the South West Lindy
              Hoppers. He loves the swing music and all the vintage culture
              surrounding.
            </p>
            <div>
              <img
                class="mt-4 max-w-[260px] md:max-w-xs rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/about%2FLindy_on_beach.png?alt=media&token=60f0d836-f5c6-4cfc-bb4a-fefe81ed0eae"
              />
              <span class="text-xs text-slate-400"
                >Yulia and Sérgio dancing | Photo by
                <a
                  class="font-bold"
                  href="https://www.instagram.com/yuliaw____/"
                  >@yuliaw____</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div class="container mx-auto px-4 pb-10">
    <transition
      name="content"
      tag="section"
      appear
      class="flex flex-col md:flex-row"
    >
      <div>
        <div class="content-section w-full p-6 mt-10 md:mr-10">
          <h3 class="text-center md:text-left">About the website</h3>
          <p class="pt-4 mr-0 md:mr-10">
            Developed and designed by Sérgio Correia using the Vue 3 framework,
            Tailwind CSS and Firebase.
          </p>
          <p>
            Check the website's repository
            <a
              href="https://github.com/sergiosdcorreia/sergiocorreia"
              target="blank"
              class="font-bold"
              >here</a
            >.
          </p>
          <p class="text-xs pt-4">© Sérgio Correia 2022</p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "AboutView",
  data() {
    return {
      videoID: "71989292",
      height: 250,
      width: 320,
      options: {
        muted: true,
        autoplay: true,
      },
      playerReady: false,
      windowWidth: 0,
      windowHeight: 0,
      ytWidth: "",
      ytHeight: "",
    };
  },
  mounted() {
    window.addEventListener("resize", this.getDimentions);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDimentions);
  },
  methods: {
    onReady() {
      this.playerReady = true;
    },
    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    },
    getDimensions(e) {
      this.windowHeight = e.target.innerHeight;
      this.windowWidth = e.target.innerWidth;

      if (e.target.innerWidth > 768) {
        this.ytWidth = 320;
        this.ytHeight = 180;
        console.log("desktop");
      } else {
        this.ytWidth = 200;
        this.ytHeight = 100;
        console.log("mobile");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-family: "Baloo 2", sans-serif;
  color: var(--light-grey);
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
.content-section {
  background-color: var(--darker-grey);
  border-radius: 16px;
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
</style>
