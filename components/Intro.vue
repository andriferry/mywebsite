<template>
  <div
    class="w-full sm:h-smVh md:h-bigVh xl:h-bigVh lg:h-bigVh flex justify-center"
  >
    <div
      class="container p-5 h-mobileSize sm:h-smVh md:h-bigVh xl:h-bigVh lg:h-bigVh w-full flex justify-center"
    >
      <div class="flex flex-col my-auto items-center">
        <h1
          class="text-lg xl:text-3xl sm:text-2xl font-bold uppercase p-4 text-primaryColor"
        >
          i'm a freelance
        </h1>
        <h1
          class="text-3xl sm:text-6xl md:text-mdHeader lg:tracking-widest tracking-widest md:tracking-wide lg:text-header font-black text-secondaryColor uppercase"
        >
          web developer
        </h1>
        <p
          class="p-2 text-sm text-center text-gray-600 sm:w-4/5 md:w-mdWidth lg:w-3/4 mb-4"
        >
          Specialist in Vuejs, Nuxtjs, Tailwindcss, Javascript, Awesome website
          design responsive Building and more
        </p>

        <div class="flex p-4 flex-col sm:flex-row justify-center">
          <a
            @click="clickScroll('#portfolio')"
            class="uppercase flex items-center rounded-full p-4 bg-primaryColor white--text font-bold"
            >view our work</a
          >

          <a
            @click="clickScroll('#action')"
            class="capitalize text-lg p-4 flex underline primaryColor--text justify-center"
            >contact me</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    heightBreakpoint() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "65vh";
        case "sm":
          return "9%";
        case "md":
          return "74vh";
        case "lg":
          return "85vh";
      }
    }
  }
};
</script>

<style></style>
