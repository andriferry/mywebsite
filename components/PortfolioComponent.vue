<template>
  <div class="w-full p-4 lg:p-5" id="portfolio">
    <div class="flex flex-col justify-center sm:p-5">
      <div class="container sm:flex-row flex flex-col">
        <div class="w-full p-2 flex items-center">
          <h1
            class="capitalize my-5 sm:mb-0 text-primaryColor font-bold text-2xl lg:text-3xl xl:text-4xl"
          >
            latest my project <br />
            and selected project
          </h1>
        </div>

        <div
          class="w-52 sm:w-96 lg:w-72 p-2 flex justify-start justify-sm-end sm:p-6 items-center"
        >
          <NuxtLink
            to="/portfolio"
            class="uppercase rounded-full py-3 px-4 sm:p-4 transition duration-200 ease-out hover:bg-primaryColor text-primaryColor hover:text-white border-primaryColor font-bold border-2 hover:white--text w-auto flex items-center"
          >
            All project
            <span class="flex justify-center" v-html="arrowIcon"></span>
          </NuxtLink>
        </div>
      </div>

      <div
        class="container grid grid-rows-auto sm:grid-cols-2 gap-3 lg:gap-4 sm:flex-row xl:p-12"
      >
        <v-hover
          v-slot="{ hover }"
          v-for="(data, index) in dataPortfolio"
          :key="index"
        >
          <NuxtLink :to="data.link" class="mx-2 md:mx-1">
            <div class="w-full card p-3 rounded-lg shadow-xl bg-white">
              <img
                height="200"
                :src="require(`~/assets/image/${data.image}`)"
                alt=""
              />
            </div>
            <p
              class="flex justify-center p-4 font-bold text-xl lg:text-2xl xl:text-3xl capitalize"
              v-text="data.title"
              :class="hover ? 'text-secondaryColor' : 'text-primaryColor'"
            ></p>
          </NuxtLink>
        </v-hover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     dataPortfolio: [
  //       {
  //         image: "formValidation.png",
  //         title: "form validation",
  //         textColor: "text-primaryColor",
  //         link: "/portfolio/Formvalidation"
  //       },
  //       {
  //         image: "movieTicket.png",
  //         title: "movie ticket",
  //         textColor: "text-primaryColor",
  //         link: "/portfolio/Moviebooking"
  //       },
  //       {
  //         image: "clothing.png",
  //         title: "clothing store",
  //         textColor: "text-primaryColor",
  //         link: "/portfolio/Clothing"
  //       }
  //     ]
  //   };
  // },
  computed: {
    dataPortfolio() {
      return this.$store.getters["dataProduct/portfolio"];
    },
    mobileDisplay() {
      return this.$vuetify.breakpoint.mobile;
    },
    smDisplay() {
      return this.$vuetify.breakpoint.smAndUp == true;
    },
    arrowIcon() {
      return `<svg
              class="ml-2 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>`;
    }
  }
};
</script>

<style></style>
