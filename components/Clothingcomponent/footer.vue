<template>
  <div>
    <div class="w-full p-5 h-auto bg-gray-900 text-white">
      <div class="container">
        <div class="grid grid-rows-1 gap-3">
          <div class="grid grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-x-20">
            <div
              class="col-span-1 lg:col-span-3 flex flex-col px-3 px-md-0 px-sm-10"
              v-for="(data, index) in footerElement"
              :key="index"
            >
              <h1
                class="text-white capitalize font-bold text-md sm:text-lg pb-3"
                v-text="data.title"
              ></h1>
              <div class="w-16 h-0.5 bg-primaryColor"></div>

              <div class="address capitalize py-3 flex flex-col">
                <template v-if="index === 2">
                  <NuxtLink
                    to="/"
                    v-for="(element, index) in data.text2"
                    :key="index"
                    class="text-sm nuxt-link-active grey--text darken-3"
                  >
                    {{ element }}
                  </NuxtLink>
                </template>

                <template v-else-if="index === 3">
                  <a
                    href="#"
                    v-for="(element, index) in data.text2"
                    :key="index"
                    class="capitalize grey--text darken-3 text-sm"
                  >
                    {{ element }}
                  </a>
                </template>

                <template v-else>
                  <h1
                    class="font-bold text-opacity-60 text-white"
                    v-text="data.text2"
                  ></h1>
                </template>

                <template v-if="data.hasOwnProperty('text3') === true">
                  <p class="text-opacity-60 text-white text-sm">
                    {{ data.text3 }}
                  </p>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-gray-800">
      <div class="container text-white font-bold flex justify-center">
        Copyright &copy {{ year }}
        <span class="text-secondaryColor"> Cloting Store.inc</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerElement: [
        {
          title: "Store address",
          text2: "jakarta store",
          text3: "Sudirman Tower Floor 13 , Jakarta Indonesia 153671"
        },
        {
          title: "Free returns",
          text2: "Within 30 days Guarantee",
          text3:
            "You have complete easy control on each & every element that  provides endless customization possibilities."
        },
        {
          title: "Help",
          text2: ["Terms & Conditional", "FAQ"]
        },
        {
          title: "Find Us On",
          text2: ["facebook", "instagram", "twitter"]
        }
      ]
    };
  },
  computed: {
    year() {
      let year = new Date();

      return year.getFullYear();
    }
  }
};
</script>

<style></style>
