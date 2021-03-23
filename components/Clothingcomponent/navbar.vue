<template>
  <div>
    <v-app-bar fixed color="black" flat app>
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
            <v-btn
              class="hidden-md-and-up"
              icon
              @click.stop="openMenu = !openMenu"
            >
              <v-icon color="white" v-text="'mdi-menu'"></v-icon>
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
          <v-hover v-slot="{ hover }" v-for="menu in 3" :key="menu">
            <v-list-item three-line>
              <v-list-item-avatar tile width="50" height="50">
                <v-img
                  class=""
                  lazy-src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content class="mx-2">
                <v-list-item-title :class="{ 'text-cyan': hover }"
                  >T-shirt Green hanger
                </v-list-item-title>
                <v-list-item-subtitle>
                  3 items x $ 5
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  $ 15
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-hover>
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
  },
  computed: {
    getBreakpointSmDown() {
      return this.$vuetify.breakpoint.smAndDown == true;
    }
  }
};
</script>

<style></style>
