<template>
  <v-menu
    fixed
    activator="#cartList"
    nudge-bottom="210"
    :nudge-left="nudgeLeft"
    :min-width="cartListMinWidth"
    nudge-top="200"
    z-index="20"
    offset-y
  >
    <div class="container text-white bg-white">
      <div class="grid grid-rows-3 divide-y divide-gray-300">
        <div class="text-primaryColor font-bold capitalize text-lg">
          shopping cart
        </div>
        <div class="flex justify-between py-3 px-2">
          <div class="text-black for image">
            <v-img
              src="https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60"
              lazy-src="https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60"
              width="44"
              height="44"
            ></v-img>
          </div>
          <div class="forText px-3 flex flex-col">
            <v-hover v-slot="{ hover }">
              <NuxtLink
                to="/"
                class="font-bold text-sm capitalize"
                :class="hover ? 'secondaryColor--text' : 'primaryColor--text'"
                >Hoope blackfjfjfj totebag</NuxtLink
              >
            </v-hover>

            <span class="text-black text-sm text-opacity-50">$ 20.00</span>
          </div>
          <div class="text-black capitalize">
            <span class="text-xs font-medium text-opacity-50 text-black"
              >x 1</span
            >
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 px-3">
          <div class="col-span-1 flex flex-col justify-center">
            <span class="text-black font-black text-lg text-opacity-75"
              >$ 20.00</span
            >
          </div>
          <div
            class="col-span-1 flex flex-col justify-center lg:px-6 sm:px-4"
          >
            <button
              class="uppercase font-bold w-auto rounded-lg bg-secondaryColor p-2"
            >
              view cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </v-menu>
</template>

<script>
export default {
  computed: {
    cartListMinWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "20rem";
        case "sm":
          return "22rem";
        case "md":
          return "24rem";
        case "lg":
          return "25rem";
      }
    },
    nudgeLeft() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 290;
        case "md":
          return 340;
        case "lg":
          return 350;
      }
    }
  }
};
</script>

<style></style>
