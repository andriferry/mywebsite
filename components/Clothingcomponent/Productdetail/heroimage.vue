<template>
  <div>
    <v-img
      eager
      :height="heightBreakpoint"
      src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      lazy-src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      aspect-ratio="2"
    >
      <div class="w-full h-full flex items-center">
        <div class="flex flex-col">
          <h1
            class="flex font-bold uppercase w-full text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl justify-center tracking-widest sm:py-2"
          >
            vinta travel bags
          </h1>

          <span
            class="flex justify-center font-bold capitalize text-white text-opacity-75 text-sm sm:text-lg lg:text-xl tracking-widest"
            >t-shirt</span
          >
          <div class="w-full flex justify-center">
            <ol
              class="list-reset flex justify-center py-4 pl-4 rounded bg-grey-light text-grey"
            >
              <li class="px-2" v-for="data in 3" :key="data">
                <NuxtLink
                  to="/"
                  class="no-underline white--text font-weight-bold"
                  >Home</NuxtLink
                >
                <span>/</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadCumbsItems: [
        { text: "Home", to: "/" },
        { text: "t-shirt", to: "/" },
        { text: "green collection", to: "/" }
      ]
    };
  },
  computed: {
    heightBreakpoint() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "150";
        case "sm":
          return "200";
        case "md":
          return "230";
        case "lg":
          return "280";
      }
    }
  }
};
</script>

<style></style>
