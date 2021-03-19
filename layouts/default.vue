<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed color="white" flat app>
      <v-container class="flex">
        <v-row>
          <v-col align-self="center">
            <NuxtLink
              to="/"
              v-text="'andri ferry'"
              class="capitalize text-2xl primaryColor--text font-bold"
            ></NuxtLink>
          </v-col>

          <v-col class="d-flex justify-end">
            <div
              class="flex justify-end capitalize font-medium text-lg items-center hidden-sm-and-down"
            >
              <NuxtLink
                class="px-2 text-primaryColor font-bold transition duration-200 ease-out hover:text-secondaryColor"
                v-for="(menu, index) of menuList"
                :to="getIndexRoute ? '#' : menu.link"
                :key="index"
                v-text="menu.text"
              ></NuxtLink>
            </div>
            <v-btn
              class="hidden-md-and-up"
              icon
              @click.stop="openMenu = !openMenu"
            >
              <v-icon v-text="'mdi-menu'"></v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <!-- <v-spacer /> -->
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Main area -->

      <nuxt />

      <!-- Main area -->
    </v-main>

    <!-- Navigation drawer -->
    <v-navigation-drawer v-model="openMenu" :right="right" temporary fixed>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in menuList"
            :key="i"
            :to="getIndexRoute ? '#' : item.link"
          >
            <v-list-item-content>
              <v-list-item-title
                class="capitalize"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation drawer -->

    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      itemsmenu: ["about me", "portfolio", "contact me"],
      menuList: [
        { text: "about me", link: "aboutme" },
        { text: "portfolio", link: "portfolio" }
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      openMenu: false,
      title: "Andri ferry"
    };
  },
  computed: {
    getIndexRoute() {
      return this.$route.name === "index";
    }
  }
};
</script>

<style>
.v-application a {
  color: #444;
}
</style>
