<template>
  <div
    class="w-full hero sm:h-smVh md:h-bigVh xl:h-bigVh lg:h-bigVh flex justify-center"
  >
    <div
      class="container p-5 h-mobileSize sm:h-smVh md:h-bigVh xl:h-bigVh lg:h-bigVh w-full flex justify-center"
    >
      <div class="flex flex-col my-auto items-center">
        <h1
          class="text-5xl text-center my-10 xl:text-9xl sm:text-7xl lg:text-8xl font-bold capitalize p-4 text-primaryColor"
        >
          <slot name="textComponent" />
        </h1>

        <button class="animate-bounce pa-5" @click="clickScroll(target)">
          <v-icon
            :style="{ 'font-size': iconSize }"
            v-text="'mdi-arrow-down'"
          ></v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["target"],
  computed: {
    iconSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "45px";
        case "sm":
          return "45px";
        case "md":
          return "60px";
        case "lg":
          return "60px";
      }
    }
  }
};
</script>

<style></style>
