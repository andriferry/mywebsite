<template>
  <div class="w-full p-1 h-auto">
    <div class="container">
      <div class="flex items-center py-10">
        <v-divider></v-divider>
        <h1 class="text-black font-bold capitalize px-5 text-xl">
          Similiar product
        </h1>
        <v-divider></v-divider>
      </div>

      <div class="grid grid-cols-12 gap-5">
        <NuxtLink
          to="/"
          class="h-auto hover:shadow-2xl transition duration-200 ease-out col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3 justify-start flex flex-col"
          v-for="(data, index) in dataImage"
          :key="index"
        >
          <v-img
            :lazy-src="data.img"
            eager
            :src="data.img"
            :height="breakpointObject"
          >
            <div class="py-3 px-1 pa-sm-3">
              <template v-if="data.hasOwnProperty('discount') === true">
                <span
                  v-if="data.discount !== 'out of stock'"
                  class="py-2 px-3 text-xs sm:text-sm md:text-md xl:text-sm tracking-widest capitalize font-bold bg-red-500 text-white rounded-lg"
                  v-text="`- ${data.discount}%`"
                ></span>

                <span
                  v-if="data.discount === 'out of stock'"
                  class="py-2 px-3 text-xs sm:text-sm md:text-md xl:text-sm tracking-widest  capitalize font-bold bg-primaryColor text-white rounded-lg"
                  v-text="`${data.discount}!`"
                ></span>
              </template>
            </div>
          </v-img>
          <div class="p-4">
            <div
              class="font-bold text-xs sm:text-lg md:text-lg  xl:text-xl capitalize text-primaryColor hover:text-secondaryColor product"
              v-text="data.text"
            ></div>

            <template
              v-if="
                data.hasOwnProperty('discount') === true &&
                  data.discount !== 'out of stock'
              "
            >
              <del
                class="text-gray-500 price text-sm sm:text-lg"
                v-text="'$ ' + data.price"
              >
              </del>
              <span
                class="text-secondaryColor text-sm sm:text-lg font-bold price"
              >
                {{ data.price | discount(data.discount) | toUsd }}
              </span>
            </template>

            <template v-else>
              <span
                class="text-secondaryColor text-sm sm:text-lg font-bold price"
                v-text="'$ ' + data.price"
              ></span>
            </template>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataImage: [
        {
          img:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          text: "nike red edition",
          price: "50.00",
          discount: 10
        },
        {
          img:
            "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          text: "vinta travel bags",
          price: "30.00",
          discount: 50
        },
        {
          img:
            "https://images.unsplash.com/photo-1539963011628-c076c7870cad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60",
          text: "saturdays cap",
          price: "20.00",
          discount: "out of stock"
        },
        {
          img:
            "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
          text: "classic white",
          price: "10.00",
          discount: 20
        }
      ]
    };
  },
  computed: {
    breakpointObject() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "160";
        case "sm":
          return "250";
        case "md":
          return "250";
        case "lg":
          return "300";
        case "xl":
          return "800px";
      }
    }
  }
};
</script>

<style></style>
