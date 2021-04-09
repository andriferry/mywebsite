<template>
  <v-menu v-model="show" :position-x="1200" @input="closeCart" offset-y>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ["open"],
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ]
    };
  },
  computed: {
    show: {
      get() {
        return this.open;
      },
      set(value) {
        this.open = value;
      }
    }
  },
  methods: {
    closeCart(value) {
      console.log(value);
      this.show = value;
      this.$emit("closeCartList", value);
    }
  }
};
</script>

<style></style>
