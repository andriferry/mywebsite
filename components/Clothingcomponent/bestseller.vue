<template>
  <div class="w-full p-5 h-screen">
    <div class="container">
      <div
        class="flex mb-6 justify-center capitalize font-semibold text-primaryColor text-xl"
      >
        best selling in {{ month }}
      </div>

      <div class="grid grid-rows-1 gap-3">
        <div class="grid grid-cols-12 gap-5">
          <NuxtLink
            to="/"
            class="h-auto hover:shadow-2xl transition duration-200 ease-out col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 justify-start flexflex-col"
            v-for="data in 8"
            :key="data"
          >
            <div class="image1 w-full h-80 xl:h-96"></div>
            <div class="p-4">
              <div
                class="title capitalize text-primaryColor hover:text-secondaryColor product"
              >
                green collection
              </div>
              <span class="text-gray-500 price">
                $ 15.00
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
  },
  mounted() {
    let date = new Date();

    console.log(date);
  }
};
</script>

<style></style>
