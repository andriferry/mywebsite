<template>
  <v-navigation-drawer
    class="elevation-24"
    v-model="drawer"
    color="grey lighten-5"
    mini-variant-width="80px"
    mini-variant
    stateless
    app
  >
    <v-card height="100px" tile flat>
      <v-card-text class="flex justify-center">
        <v-icon size="60" color="red">mdi-virus-outline</v-icon>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ]
    };
  }
};
</script>

<style></style>
