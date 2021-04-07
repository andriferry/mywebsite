<template>
  <div class="z-10">
    <v-app-bar height="70" fixed color="black" flat app>
      <v-container class="flex">
        <v-row>
          <v-col align-self="center">
            <NuxtLink
              to="/portfolio/clothing"
              v-text="'clothing Store'"
              class="capitalize text-xl white--text font-bold"
            ></NuxtLink>
          </v-col>

          <!-- menu -->
          <v-col
            :class="
              getBreakpointSmDown
                ? 'hidden-sm-and-down'
                : 'd-flex justify-center'
            "
          >
            <div
              class="flex justify-center capitalize font-medium text-lg items-center hidden-sm-and-down"
            >
              <v-hover
                v-slot="{ hover }"
                v-for="(menu, index) of menuList"
                :key="index"
              >
                <a
                  class="px-5 font-bold transition duration-200 ease-out"
                  v-text="menu.text"
                  :class="hover ? 'greenColor200--text' : 'white--text'"
                ></a>
              </v-hover>
            </div>
          </v-col>

          <v-col class="d-flex justify-end">
            <!-- cart icon -->
            <v-btn rounded icon>
              <v-badge color="grey darken-1" content="5" overlap>
                <v-icon v-text="'mdi-cart-outline'" color="white"></v-icon>
              </v-badge>
            </v-btn>

            <!-- cart icon -->

            <!-- button triger menu -->
            <v-btn class="hidden-md-and-up" icon @click.stop="menu = !menu">
              <v-icon color="white" v-text="'mdi-menu'"></v-icon>
            </v-btn>

            <!-- button triger menu -->
          </v-col>
        </v-row>

        <!-- menu -->
      </v-container>
    </v-app-bar>

    <!-- Navigation drawer -->
    <ClothingcomponentDrawermenu :openMenu="menu" />
    <!-- Navigation drawer -->

    <!-- cart drawer -->
    <ClothingcomponentCart />
    <!-- cart drawer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      group: null,
      open: true,
      menu: false,
      menuList: [
        { text: "shop" },
        { text: "blog" },
        { text: "contact", link: "portfolio", target: "#portfolio" },
        { text: "about", link: "aboutme", target: "#aboutme" }
      ]
    };
  },
  computed: {
    getBreakpointSmDown() {
      return this.$vuetify.breakpoint.smAndDown == true;
    }
  }
};
</script>

<style></style>
