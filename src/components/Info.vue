<template>
  <section class="content-section p-6 my-10 mr-10 w-full md:w-auto">
    <h3 class="text-center md:text-left">Where you can find him</h3>
    <div class="flex items-center pt-6">
      <div
        class="icon-bg w-10 h-10 md:w-14 md:h-14 flex justify-center items-center mr-4 md:mr-6"
      >
        <font-awesome-icon
          class="icon text-2xl md:text-3xl"
          icon="fa-solid fa-location-dot"
        />
      </div>
      <div class="flex flex-col justify-center">
        <p>Location</p>
        <p class="font-bold">Copplestone, UK</p>
      </div>
    </div>
    <div class="flex items-center pt-6">
      <div
        class="icon-bg w-10 h-10 md:w-14 md:h-14 flex justify-center items-center mr-4 md:mr-6"
      >
        <font-awesome-icon
          class="icon text-2xl md:text-3xl"
          icon="fa-solid fa-envelope"
        />
      </div>
      <div class="flex flex-col justify-center">
        <p>Email</p>
        <p class="font-bold">sergiosdcorreia@gmail.com</p>
      </div>
    </div>
    <div class="flex items-center pt-6">
      <div
        class="icon-bg w-10 h-10 md:w-14 md:h-14 flex justify-center items-center mr-4 md:mr-6"
      >
        <font-awesome-icon
          class="icon text-2xl md:text-3xl"
          icon="fa-solid fa-phone"
        />
      </div>
      <div class="flex flex-col justify-center">
        <p>Phone</p>
        <p class="font-bold">(+44) 7462 184484</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PersonalInfo",
};
</script>

<style lang="scss" scoped>
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
.icon-bg {
  border-radius: 50%;
  background-color: var(--primary);

  .icon {
    color: var(--light-grey);
  }
}
</style>
