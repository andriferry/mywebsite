<template>
  <div class="w-full h-auto p-5">
    <div class="container">
      <div
        class="flex mb-6 py-6 items-center capitalize font-semibold text-primaryColor"
      >
        <v-divider></v-divider>
        <span class="mx-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl">
          Sale up to 50%
        </span>

        <v-divider></v-divider>
      </div>
      <div class="grid grid-rows-1 gap-3">
        <div class="grid grid-cols-12 gap-5">
          <NuxtLink
            class="h-auto hover:shadow-2xl transition duration-200 ease-out col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 justify-start flex flex-col"
            v-for="(data, index) in saleProduct"
            :key="index"
            :to="{
              name: 'Portfolio-Clothing-product-slug-detail',
              params: { slug: data.slug }
            }"
          >
            <v-img
              eager
              :lazy-src="require(`~/assets/image/clothingImage/${data.img[0]}`)"
              :src="require(`~/assets/image/clothingImage/${data.img[0]}`)"
              height="300"
            >
              <div class="p-3">
                <span
                  v-if="data.discount !== 'out of stock'"
                  class="py-2 px-3 tracking-widest capitalize font-bold bg-red-500 text-white rounded-lg"
                  v-text="`- ${data.discount}%`"
                ></span>

                <span
                  v-if="data.discount === 'out of stock'"
                  class="py-2 px-3 tracking-widest capitalize font-bold bg-primaryColor text-white rounded-lg"
                  v-text="`${data.discount}!`"
                ></span>
              </div>
            </v-img>
            <div class="p-4">
              <div
                class="font-bold text-xl md:text-lg lg:text-base xl:text-xl capitalize text-primaryColor hover:text-secondaryColor product"
                v-text="data.text"
              ></div>

              <template v-if="data.discount !== 'out of stock'">
                <del
                  class="text-gray-500 text-lg price"
                  v-text="'$ ' + data.price"
                >
                </del>
                <span class="text-secondaryColor text-lg font-bold price">
                  {{ data.price | discount(data.discount) | toUsd }}
                </span>
              </template>

              <template v-else>
                <span
                  class="text-secondaryColor font-bold price"
                  v-text="'$ ' + data.price"
                ></span>
              </template>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    saleProduct() {
      return this.$store.getters["dataProduct/product"].slice(0, 4);
    }
  }
};
</script>

<style></style>
