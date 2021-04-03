<template>
  <div class="w-full p-5 h-auto">
    <div class="container">
      <div
        class="flex mb-6 py-6 items-center capitalize font-semibold text-primaryColor"
      >
        <v-divider></v-divider>
        <span class="mx-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl">
          best selling in {{ month }}
        </span>

        <v-divider></v-divider>
      </div>

      <div class="grid grid-rows-1 gap-3">
        <div class="grid grid-cols-12 gap-5">
          <NuxtLink
            to="/"
            class="h-auto hover:shadow-2xl transition duration-200 ease-out col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 justify-start flex flex-col"
            v-for="(data, index) in dataImage"
            :key="index"
          >
            <v-img :lazy-src="data.img" :src="data.img" height="300"></v-img>
            <div class="p-4">
              <div
                class="font-bold text-xl md:text-lg lg:text-base xl:text-xl capitalize text-primaryColor hover:text-secondaryColor product"
                v-text="data.text"
              ></div>
              <span class="text-gray-500 price" v-text="'$ ' + data.price">
              </span>
            </div>
          </NuxtLink>
        </div>
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
          price: "50.00"
        },
        {
          img:
            "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          text: "vinta travel bags",
          price: "30.00"
        },
        {
          img:
            "https://images.unsplash.com/photo-1539963011628-c076c7870cad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60",
          text: "saturdays cap",
          price: "20.00"
        },
        {
          img:
            "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
          text: "classic white",
          price: "10.00"
        },
        {
          img:
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: "UV protector sunglass",
          price: "25.00"
        },
        {
          img:
            "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
          text: "minimalist watch",
          price: "50.00"
        },
        {
          img:
            "https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60",
          text: "black hoope totebag",
          price: "20.00"
        },
        {
          img:
            "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          text: "classic green",
          price: "20.00"
        }
      ]
    };
  },
  computed: {
    month() {
      let monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      let month = new Date();

      return monthNames[month.getMonth()];
    }
  }
};
</script>

<style>
/* .bestSellerImage1 {
  
} */
</style>
