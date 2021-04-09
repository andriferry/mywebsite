<template>
  <v-menu
    fixed
    activator="#cartList"
    nudge-bottom="210"
    nudge-left="70"
    nudge-top="200"
    z-index="20"
    v-model="open1"
    offset-y
  >
    <div class="container text-white bg-white">
      <div class="grid grid-rows-3 gap-2 divide-y divide-yellow-500">
        <div class="text-primaryColor font-bold capitalize  text-lg">
          shopping cart
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="text-black for image">
            <img src="" alt="">
          </div>
          <div class="text-black">
            for image
          </div>
          <div class="text-black">
            for image
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">Hello 3</div>
      </div>
    </div>
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
      open1: true,
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
        return true;
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
