<template>
  <div>
    <v-img
      eager
      :height="heightBreakpoint"
      :src="require(`~/assets/image/clothingImage/${chooseProduct.img[0]}`)"
      :lazy-src="
        require(`~/assets/image/clothingImage/${chooseProduct.img[0]}`)
      "
      aspect-ratio="2"
    >
      <div class="w-full h-full flex items-center">
        <div class="flex flex-col">
          <h1
            class="flex font-bold uppercase w-full text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl justify-center tracking-widest sm:py-2"
            v-text="chooseProduct.text"
          ></h1>

          <span
            class="flex py-1 justify-center font-bold capitalize text-white text-opacity-75 text-sm sm:text-lg lg:text-xl tracking-widest"
            v-text="chooseProduct.category"
          ></span>
          <div class="w-full flex justify-center">
            <ol
              class="list-reset flex justify-center p-1 rounded bg-grey-light text-grey"
            >
              <li
                class=""
                v-for="(data, index) in breadCumbsItems"
                :key="index"
              >
                <NuxtLink
                  :to="data.to"
                  class="no-underline capitalize white--text font-weight-bold text-body-2"
                  v-text="data.text"
                ></NuxtLink>
                <span
                  v-if="index === breadCumbsItems.length - 1 ? false : true"
                  class="text-white px-1"
                  >/</span
                >
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
      breadCumbsItems: [{ text: "Home", to: "/" }]
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
  },
  created() {
    let newobjetc = [
      { text: this.chooseProduct.category, to: "/" },
      { text: this.chooseProduct.text, to: "/" }
    ];

    newobjetc.forEach(element => {
      this.breadCumbsItems.push(element);
    });
  }
};
</script>

<style></style>
