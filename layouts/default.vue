<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-container class="flex">
        <v-row>
          <v-col align-self="center"><v-toolbar-title v-text="title"/></v-col>
          <v-col class="d-flex justify-end">
            <v-btn icon @click.stop="openMenu = !openMenu">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <!-- <v-spacer /> -->
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Main area -->
      <v-container>
        <nuxt />
      </v-container>

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
