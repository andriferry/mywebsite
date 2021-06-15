<template>
  <div class="z-10">
    <v-app-bar height="70" fixed color="black" flat app>
      <v-container>
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
          <!-- menu -->

          <v-col class="d-flex justify-end">
            <!-- cart icon -->

            <v-btn rounded icon id="cartList">
              <v-badge
                v-if="totalQuantity > 0"
                color="grey darken-1"
                :content="totalQuantity"
                overlap
              >
                <v-icon v-text="'mdi-cart-outline'" color="white"></v-icon>
              </v-badge>
              <v-icon v-else v-text="'mdi-cart-outline'" color="white"></v-icon>
            </v-btn>

            <!-- cart icon -->

            <!-- button triger menu -->
            <v-btn class="hidden-md-and-up" icon @click.stop="openMenu">
              <v-icon color="white" v-text="'mdi-menu'"></v-icon>
            </v-btn>
            <!-- button triger menu -->
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Navigation drawer -->
    <ClothingcomponentDrawermenu
      :openMenu="openDrawer"
      @closeDrawer="closeMenu"
    />
    <!-- Navigation drawer -->

    <ClothingcomponentCartlist />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    },
    openDrawer: {
      get() {
        return this.menu;
      },
      set(value) {
        this.menu = value;
      }
    },
    cartList() {
      return this.$store.getters["cart/carts"];
    },
    totalQuantity() {
      return this.$store.getters["cart/totalQuantity"];
    }
  },
  methods: {
    closeMenu(value) {
      this.openDrawer = value;
    },
    openMenu() {
      this.menu = true;
    }
  }
};
</script>

<style></style>
