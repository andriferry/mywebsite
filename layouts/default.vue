<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
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
              <a
                href="/"
                class="px-2 text-primaryColor font-bold transition duration-200 ease-out hover:text-secondaryColor"
                v-for="(menu, index) of menuList"
                :key="index"
                v-text="menu"
              ></a>
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
    <v-navigation-drawer v-model="openMenu" :right="right" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuList: ["about me", "work", "features", "contact me"],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      openMenu: false,
      title: "Andri ferry"
    };
  }
};
</script>

<style>
.v-application a {
  color: #444;
}
</style>
