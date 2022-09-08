<template>
  <h1
    class="title text-center pt-10 text-2xl md:text-6xl font-bold select-none"
  >
    about
  </h1>
  <transition
    name="content"
    tag="section"
    appear
    class="flex flex-col md:flex-row"
  >
    <div>
      <div class="content-section w-full md:w-50 p-6 mt-10 mr-10">
        <h3 class="text-center md:text-left">He loves to dance</h3>
        <p class="pt-4">
          Since 2015 one of his hobbies has been dancing Lindy Hop, he started
          in Porto at Hop Dance Studio and then in 2017 he moved to Exeter,
          England where he carried on dancing with the South West Lindy Hoppers.
        </p>
        <img
          class="max-w-md"
          src="https://firebasestorage.googleapis.com/v0/b/sergiocorreia-7fcac.appspot.com/o/about%2FLindy_on_beach.png?alt=media&token=60f0d836-f5c6-4cfc-bb4a-fefe81ed0eae"
        />
      </div>
      <div class="content-section p-6 mt-10">
        <h3 class="text-center md:text-left">
          Around 5 years of development experience
        </h3>
      </div>
    </div>
  </transition>
</template>
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
