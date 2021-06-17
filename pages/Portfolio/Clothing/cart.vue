<template>
  <div class="w-full h-screen bg-red-500 flex justify-center">
    <div class="container bg-white flex justify-center my-auto p-5">
      <div class="container grid md:grid-cols-2 xl:grid-cols-2">
        <div
          class="p-14 grid auto-rows-auto gap-1 divide-y divide-gray-300 divide-opacity-50"
        >
          <div
            v-for="index in 4"
            :key="index"
            class="grid grid-cols-6 gap-1 align-center py-3"
          >
            <img
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              class="rounded-full h-20 w-20"
              width="50"
              height="50"
              alt=""
            />

            <div class="col-span-2 flex flex-col capitalize px-1">
              <v-hover v-slot="{ hover }">
                <NuxtLink
                  to="/"
                  class="font-bold"
                  :class="hover ? 'secondaryColor--text' : 'primaryColor--text'"
                >
                  classic green
                </NuxtLink>
              </v-hover>

              <span class="text-black text-sm text-opacity-50">
                $ 10.00
              </span>
            </div>

            <div class="col-span-2 flex">
              <div class="minus">
                <v-btn color="secondaryColor" icon elevation="0" fab x-small>
                  <v-icon class="text-h6">mdi-minus</v-icon>
                </v-btn>
              </div>

              <input
                v-model="paymentAmount"
                ref="input"
                class="w-10 text-center mx-1  capitalize placeholder-gray-600 border-solid p-1 border-b-4 focus:outline-none"
                :class="
                  error
                    ? 'border-red-500'
                    : 'focus:border-gray-500 border-gray-200'
                "
              />
              <div class="plus">
                <v-btn color="secondaryColor" icon elevation="0" fab x-small>
                  <v-icon class="text-h6">mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="col-span-1">
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div>cart right</div>
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
