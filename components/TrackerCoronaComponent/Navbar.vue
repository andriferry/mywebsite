<template>
  <div>
    <v-app-bar color="white" app flat fixed height="100px" class="flex justify-center">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="capitalize primaryColor--text font-bold flex align-center"
        >Corona Tracker Indonesia
        <v-icon size="60" color="red">mdi-virus-outline</v-icon>
      </v-toolbar-title>

      Dark Mode side
    </v-app-bar>

    <TrackerCoronaComponentDrawer />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
