<template>
  <h1
    class="title text-center pt-10 text-2xl md:text-6xl font-bold select-none"
  >
    about
  </h1>
  <div class="container mx-auto px-4">
    <transition
      name="content"
      tag="section"
      appear
      class="flex flex-col md:flex-row"
    >
      <div>
        <div class="content-section w-full md:w-50 p-6 mt-10 mr-10">
          <h3 class="text-center md:text-left">He plays the piano</h3>
          <div class="flex flex-col xl:flex-row">
            <p class="pt-4 mr-0 md:mr-10">
              Since he was 10 years old he started to learn piano at a Music
              Academy. He knows how to read sheet music and plays just for fun.
              He started by learning the classics and know he enjoys playing
              music of his favourite bands. He also worked as a designer for
              this academy in exchange for classes.
            </p>
            <div class="mt-4">
              <YouTube
                src="https://www.youtube.com/watch?v=BTSzGy3F62A"
                width="320"
                height="180"
              />
              <span class="text-xs text-slate-400"
                >Sérgio playing at an academy concert (piano on the left)</span
              >
            </div>
          </div>
        </div>
        <div class="content-section w-full md:w-50 p-6 mt-10 mr-10">
          <h3 class="text-center md:text-left">He loves to dance</h3>
          <div class="flex flex-col xl:flex-row">
            <p class="pt-4 mr-0 md:mr-10">
              Since 2015 one of his hobbies has been dancing Lindy Hop. He
              started in Porto at Hop Dance Studio. In 2017 he moved to Exeter,
              in England, where he continued to dance with the South West Lindy
              Hoppers.
            </p>
            <div>
              <img
                class="mt-4 max-w-xs rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/about%2FLindy_on_beach.png?alt=media&token=60f0d836-f5c6-4cfc-bb4a-fefe81ed0eae"
              />
              <span class="text-xs text-slate-400"
                >Yulia and Sérgio | Photo by
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
</template>
<script>
export default {
  name: "AboutView",
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
