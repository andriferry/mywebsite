<template>
  <v-col cols="12" md="6" align-self="start">
    <v-carousel height="350" hide-delimiters>
      <v-carousel-item
        eager
        v-for="(item, i) in chooseProduct.img"
        :key="i"
        :src="item"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </v-col>
</template>

<script>
export default {
  computed: {
    chooseProduct() {
      return this.$store.getters["dataProduct/product"][7];
    }
  }
};
</script>

<style></style>
