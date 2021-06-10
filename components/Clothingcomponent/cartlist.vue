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
      <div
        v-if="cartLength > 0"
        class="grid auto-rows-auto divide-y divide-gray-300 gap-4"
      >
        <div class="text-primaryColor font-bold capitalize text-lg">
          shopping cart
        </div>
        <div
          class="flex justify-between py-3 px-2"
          v-for="(data, index) in cartList"
          :key="index"
        >
          <div class="text-black for image">
            <v-img
              :src="data.img[0]"
              :lazy-src="data.img[0]"
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
                v-text="data.title"
              ></NuxtLink>
            </v-hover>

            <span class="text-black text-sm text-opacity-50"
              >$ {{ data.price }}</span
            >
          </div>
          <div class="text-black capitalize">
            <span class="text-xs font-medium text-opacity-50 text-black"
              >x {{ data.quantity }}</span
            >
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 p-3">
          <div class="col-span-1 flex flex-col justify-center">
            <span class="text-black font-black text-lg text-opacity-75">{{
              totalPrice | toUsd
            }}</span>
          </div>
          <div class="col-span-1 flex flex-col justify-center lg:px-6 sm:px-4">
            <button
              class="uppercase font-bold w-auto rounded-lg bg-secondaryColor p-2"
            >
              view cart
            </button>
          </div>
        </div>
      </div>

      <h1
        v-else
        class="text-xl capitalize items-center text-black font-bold flex flex-col justify-center"
      >
        Your cart is empty
      </h1>
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
    },
    cartList() {
      return this.$store.getters["cart/carts"];
    },
    cartLength() {
      return this.$store.getters["cart/count"];
    },
    totalPrice() {
      return this.$store.getters["cart/totalPrice"];
    }
  }
};
</script>

<style></style>
