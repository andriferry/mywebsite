<template>
  <v-app>
    <v-app-bar fixed color="white" flat app>
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
              <v-hover
                v-slot="{ hover }"
                v-for="(menu, index) of menuList"
                :key="index"
              >
                <a
                  class="px-2 font-bold transition duration-200 ease-out"
                  :class="hover ? 'secondaryColor--text' : 'primaryColor--text'"
                  @click="
                    getIndexRoute
                      ? clickScroll(menu.target)
                      : pushRoute(menu.link)
                  "
                  v-text="menu.text"
                ></a>
              </v-hover>
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
        <v-list-item-group color="primary" v-model="group">
          <v-list-item
            v-for="(menu, i) in menuList"
            :key="i"
            @click="
              getIndexRoute ? clickScroll(menu.target) : pushRoute(menu.link)
            "
          >
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

    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      group: null,
      menuList: [
        { text: "about me", link: "aboutme", target: "#aboutme" },
        { text: "portfolio", link: "portfolio", target: "#portfolio" }
      ],
      fixed: false,
      right: true,
      openMenu: false,
      title: "Andri ferry"
    };
  },
  computed: {
    getIndexRoute() {
      return this.$route.name === "index";
    },
    changeEvent() {
      return this.$route.name === "index" ? "addData()" : "pushRoute()";
    }
  },
  methods: {
    pushRoute(link) {
      this.$router.push(link);
    }
  },
  watch: {
    group() {
      this.openMenu = false;
    }
  }
};
</script>

<style>
/* .v-application a {
  color: #444;
} */
</style>
