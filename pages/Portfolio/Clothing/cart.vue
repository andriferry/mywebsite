<template>
  <div class="w-full h-screen bg-red-500 flex justify-center">
    <div class="container bg-white flex flex-col justify-center my-auto p-5">
      <div class="md:container grid md:grid-cols-1 xl:grid-cols-3">
        <div
          class="xl:p-14 p-2 sm:p-4 grid col-span-2 md:col-span-1 auto-rows-auto gap-1 divide-y divide-gray-300 divide-opacity-50"
        >
          <div
            v-for="index in 4"
            :key="index"
            class="grid grid-cols-6 gap-1 align-center py-3 pa-sm-5"
          >
            <img
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              class="rounded-full h-12 w-12 sm:h-20 sm:w-20 lg:h-20 lg:w-20 xl:h-20 xl:w-20"
              width="50"
              height="50"
              alt=""
            />

            <div class="col-span-2 flex flex-col capitalize px-1">
              <v-hover v-slot="{ hover }">
                <NuxtLink
                  to="/"
                  class="font-bold text-sm sm:text-base md:text-lg"
                  :class="hover ? 'secondaryColor--text' : 'primaryColor--text'"
                >
                  classic green
                </NuxtLink>
              </v-hover>

              <span class="text-black text-sm sm:text-base text-opacity-50">
                $ 10.00
              </span>
            </div>

            <div class="col-span-2 justify-center flex">
              <div class="minus">
                <v-btn color="secondaryColor" icon elevation="0" fab x-small>
                  <v-icon class="text-h6">mdi-minus</v-icon>
                </v-btn>
              </div>

              <input
                v-model="paymentAmount"
                ref="input"
                class="w-10 text-center mx-1  capitalize placeholder-gray-600 border-solid p-1 border-b-4 focus:outline-none"
              />
              <div class="plus">
                <v-btn color="secondaryColor" icon elevation="0" fab x-small>
                  <v-icon class="text-h6">mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="col-span-1 flex justify-end">
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>

          <div class="total p-1 sm:p-4 flex justify-end">
            <span class="text-base sm:text-lg font-bold capitalize px-2"
              >total :</span
            >
            <span class="text-base sm:text-lg font-bold">$ 100.00</span>
          </div>
        </div>
        <div class="col-span-2 xl:col-span-1 md:p-4 md:col-span-1 flex justify-center">
          <div class="container rounded-lg bg-black">
            <div class="w-full h-auto bg-white container">
              <p class="capitalize primaryColor--text font-bold text-lg">
                cart detail
              </p>
              <div
                class="grid px-2 divide-y divide-gray-300 divide-opacity-50 auto-rows-auto"
              >
                <div
                  class="capitalize grid py-2 grid-cols-2 primaryColor--text font-bold text-base"
                >
                  <span class="m-0">cart subtotal</span>
                  <span class="flex justify-end">$ 100.00</span>
                </div>
                <div
                  class="capitalize grid py-2 grid-cols-2 text-primaryColor font-bold text-base"
                >
                  <span class="m-0">shipping</span>
                  <span class="flex justify-end">free delivery</span>
                </div>
                <div
                  class="capitalize grid py-2 grid-cols-2 text-primaryColor font-bold text-base"
                >
                  <span class="m-0">total</span>
                  <span class="flex justify-end">$ 100.00</span>
                </div>
                <div
                  class="capitalize grid py-5 grid-cols-1  text-primaryColor font-bold text-base"
                >
                  <v-btn flat color="secondaryColor" class="white--text"
                    >checkout</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "clothinglayout",
  head: {
    title: "Cart"
  },
  data() {
    return {
      paymentAmount: 1
    };
  }
};
</script>

<style></style>
