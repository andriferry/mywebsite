<template>
  <div>
    <v-app-bar fixed color="white" flat app>
      <v-container class="flex">
        <v-row>
          <v-col align-self="center">
            <NuxtLink
              to="/portfolio/clothing"
              v-text="'Clothing Store'"
              class="capitalize text-xl primaryColor--text font-bold"
            ></NuxtLink>
          </v-col>

          <!-- menu -->
          <v-col class="d-flex justify-end">
            <div
              class="flex justify-end capitalize font-medium text-lg items-center hidden-sm-and-down"
            >
              <a
                class="px-2 text-primaryColor font-bold transition duration-200 ease-out hover:text-secondaryColor"
                v-for="(menu, index) of menuList"
                :key="index"
                v-text="menu.text"
              ></a>
            </div>
          </v-col>

          <v-col class="d-flex justify-end">
            <v-btn rounded icon>
              <v-badge color="black" content="5" overlap>
                <v-icon v-text="'mdi-cart-outline'" color="black"></v-icon>
              </v-badge>
            </v-btn>

            <!-- button triger menu -->
            <v-btn
              class="hidden-md-and-up"
              icon
              @click.stop="openMenu = !openMenu"
            >
              <v-icon v-text="'mdi-menu'"></v-icon>
            </v-btn>

            <!-- button triger menu -->
          </v-col>
        </v-row>

        <!-- menu -->

        <!-- <v-spacer /> -->
      </v-container>
    </v-app-bar>

    <!-- Navigation drawer -->
    <v-navigation-drawer v-model="openMenu" right temporary fixed>
      <v-list dense>
        <v-list-item-group color="primary" v-model="group">
          <v-list-item v-for="(menu, i) in menuList" :key="i">
            <v-list-item-content>
              <v-list-item-title
                class="capitalize"
                v-text="menu.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation drawer -->

    <!-- cart drawer -->
    <v-navigation-drawer v-model="open" right temporary fixed>
      <v-list dense>
        <v-list-item-content>
          <v-list-item-title class="px-4 font-bold text-xl uppercase"
            >Shopping cart</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-group color="primary" v-model="group">
          <!-- <v-list-item v-for="(menu, i) in menuList" :key="i">
            <v-list-item-content>
              <v-list-item-title
                class="capitalize"
                v-text="menu.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

          <v-list-item class="d-flex flex-row" three-line>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <v-list-item-content class="mx-auto">
              <v-list-item-title>T-shirt</v-list-item-title>
              <v-list-item-subtitle>
                3 items x $ 5
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                $ 15
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- cart drawer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      group: null,
      open: true,
      openMenu: false,
      menuList: [
        { text: "about", link: "aboutme", target: "#aboutme" },
        { text: "contact", link: "portfolio", target: "#portfolio" },
        { text: "blog" },
        { text: "shop" }
      ]
    };
  },
  watch: {
    group() {
      this.openMenu = false;
    }
  }
};
</script>

<style></style>
