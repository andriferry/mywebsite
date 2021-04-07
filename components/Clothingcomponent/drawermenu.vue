<template>
  <v-navigation-drawer
    v-model="openDrawer"
    right
    temporary
    fixed
    @input="closeDrawer"
  >
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
</template>

<script>
export default {
  props: ["openMenu"],
  data() {
    return {
      group: null,
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
    openDrawer: {
      get() {
        return this.openMenu;
      },
      set(value) {
        return value;
      }
    }
  },
  methods: {
    closeDrawer(value) {
      this.openDrawer = value;
      this.$emit("closeDrawer", value);
    }
  }
};
</script>

<style></style>
