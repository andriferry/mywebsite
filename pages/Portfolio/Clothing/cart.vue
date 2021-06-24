<template>
  <div class="w-full bg-gray-50 h-screen flex justify-center">
    <div
      class="container bg-white shadow-xl flex flex-col justify-center my-auto p-5"
      :class="cartList.length === 0 ? 'h-3/6' : false"
    >
      <div v-if="cartList.length === 0" class="w-full">
        <span
          class="flex justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-widest"
          >Your cart is empty</span
        >
      </div>
      <div v-else class="md:container grid  md:grid-cols-1 lg:grid-cols-3">
        <div
          class="xl:p-14 p-2 sm:p-4 grid col-span-2 md:col-span-1 lg:col-span-2 auto-rows-auto gap-1"
          :class="
            cartList.length > 1
              ? 'devide-y divide-gray-300 divide-opacity-50'
              : false
          "
        >
          <div
            v-for="(data, index) in cartList"
            :key="index"
            class="grid grid-cols-6 gap-1 align-center py-3 pa-sm-5"
          >
            <img
              :src="require(`~/assets/image/clothingImage/${data.img[0]}`)"
              class="rounded-full h-12 w-12 sm:h-20 sm:w-20 lg:h-20 lg:w-20 xl:h-20 xl:w-20"
              width="50"
              height="50"
              alt=""
            />

            <div class="col-span-2 flex flex-col capitalize px-1">
              <v-hover v-slot="{ hover }">
                <NuxtLink
                  to="/"
                  class="font-bold text-sm sm:text-base md:text-lg"
                  :class="hover ? 'secondaryColor--text' : 'primaryColor--text'"
                  v-text="data.title"
                >
                </NuxtLink>
              </v-hover>

              <span class="text-black text-sm sm:text-base text-opacity-50">
                {{ data.price | toUsd }}
              </span>
            </div>

            <div class="col-span-2 justify-center flex">
              <div class="minus">
                <v-btn color="secondaryColor" icon elevation="0" fab x-small>
                  <v-icon class="text-h6">mdi-minus</v-icon>
                </v-btn>
              </div>

              <input
                v-model="data.quantity"
                ref="input"
                class="w-10 text-center mx-1  capitalize placeholder-gray-600 border-solid p-1 border-b-4 focus:outline-none"
              />
              <div class="plus">
                <v-btn
                  color="secondaryColor"
                  icon
                  elevation="0"
                  @click="data.quantity++"
                  fab
                  x-small
                >
                  <v-icon class="text-h6">mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="col-span-1 flex justify-end">
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>

          <div class="total p-1 sm:p-4 flex justify-end">
            <span class="text-base sm:text-lg font-bold capitalize px-2"
              >total :</span
            >
            <span class="text-base sm:text-lg font-bold">
              {{ totalPrice | toUsd }}
            </span>
          </div>
        </div>
        <ClothingcomponentCartpagesCartDetail />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "clothinglayout",
  head: {
    title: "Cart"
  },
  data() {
    return {
      paymentAmount: 1
    };
  },
  watch: {
    paymentAmount(quantity) {
      this.addQuantity(quantity);
      //console.log(quantity);
    }
  },
  computed: {
    cartList() {
      return this.$store.getters["cart/carts"];
    },
    totalPrice() {
      return this.$store.getters["cart/totalPrice"];
    }
  },
  methods: {
    addQuantity(product) {
      //this.$store.dispacth("cart/add");
      console.log(product);
    }
  }
};
</script>

<style></style>
