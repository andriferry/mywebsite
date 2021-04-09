<template>
  <v-menu
    fixed
    activator="#cartList"
    nudge-bottom="210"
    nudge-left="220"
    min-width="20rem"
    nudge-top="200"
    z-index="20"
    v-model="open1"
    offset-y
  >
    <div class="container text-white bg-white">
      <div class="grid grid-rows-3 divide-y divide-yellow-500">
        <div class="text-primaryColor font-bold capitalize text-lg">
          shopping cart
        </div>
        <div class="flex justify-between py-3 px-2">
          <div class="text-black for image">
            <v-img
              src="https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60"
              lazy-src="https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60"
              width="44"
              height="44"
            ></v-img>
          </div>
          <div class="forText px-3 flex flex-col">
            <v-hover v-slot="{ hover }">
              <NuxtLink
                to="/"
                class="font-bold text-sm capitalize"
                :class="hover ? 'secondaryColor--text' : 'primaryColor--text'"
                >Hoope blackfjfjfj totebag</NuxtLink
              >
            </v-hover>

            <span class="text-black text-sm text-opacity-50">$ 20.00</span>
          </div>
          <div class="text-black capitalize">
            <span class="text-xs font-medium text-opacity-50 text-black"
              >x 1</span
            >
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">Hello 3</div>
      </div>
    </div>
  
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
