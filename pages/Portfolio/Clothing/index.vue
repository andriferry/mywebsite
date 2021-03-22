<template>
  <v-app>
    <!-- navbar -->
    <ClothingcomponentNavbar />
    <!-- navbar -->
  </v-app>
</template>

<script>
export default {
  layout(context) {
    return "secondLayout";
  },
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
.v-application a {
  color: #444;
}
</style>
