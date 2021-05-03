<template>
  <v-col cols="12" md="6" align-self="start">
    <v-carousel
      height="350"
      hide-delimiters
      v-if="chooseProduct.img.length > 1"
    >
      <v-carousel-item
        eager
        v-for="(item, i) in chooseProduct.img"
        :key="i"
        :src="item"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-img
      v-else
      eager
      v-for="(item, i) in chooseProduct.img"
      :key="i"
      :src="item"
      :lazy-src="item"
      height="400"
    ></v-img>
  </v-col>
</template>

<script>
export default {};
</script>

<style></style>
