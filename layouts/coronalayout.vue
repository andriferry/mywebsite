<template>
  <v-app>
    <!-- navbar -->
    <TrackerCoronaComponentNavbar />
    <!-- navbar -->

    <v-main>
      <!-- Main area -->
      <nuxt />
      <!-- Main area -->
    </v-main>

    <!-- <TrackerCoronaComponentFooter />  -->
  </v-app>
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
