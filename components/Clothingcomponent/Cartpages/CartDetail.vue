<template>
  <div
    class="col-span-2 xl:col-span-1 md:p-4 lg:col-span-1 md:col-span-1 flex justify-center"
  >
    <div class="container rounded-lg">
      <div class="w-full h-auto bg-white container">
        <p class="capitalize primaryColor--text font-bold text-lg">
          cart detail
        </p>
        <div
          class="grid px-2 divide-y divide-gray-300 divide-opacity-50 auto-rows-auto"
        >
          <div
            class="capitalize grid py-2 grid-cols-2 primaryColor--text font-bold text-base"
          >
            <span class="m-0">cart subtotal</span>
            <span class="flex justify-end">{{ totalPrice | toUsd }}</span>
          </div>
          <div
            class="capitalize grid py-2 grid-cols-2 text-primaryColor font-bold text-base"
          >
            <span class="m-0">shipping</span>
            <span class="flex justify-end">free delivery</span>
          </div>
          <div
            class="capitalize grid py-2 grid-cols-2 text-primaryColor font-bold text-base"
          >
            <span class="m-0">total</span>
            <span class="flex justify-end">{{ totalPrice | toUsd }}</span>
          </div>
          <div
            class="capitalize grid py-5 grid-cols-1  text-primaryColor font-bold text-base"
          >
            <v-btn color="secondaryColor" class="white--text">checkout</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.getters["cart/totalPrice"];
    }
  }
};
</script>

<style></style>
