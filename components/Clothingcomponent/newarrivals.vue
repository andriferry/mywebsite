<template>
  <div class="w-full bg-gray-50 h-auto p-5">
    <div class="grid container grid-rows-1">
      <div class="grid grid-cols-12">
        <div class="col-span-12 p-3 md:col-span-6">
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-center sm:p-6">
              <h1
                class="text-xl font-medium p-2 text-gray-600 capitalize xl:tracking-wider xl:text-2xl"
              >
                new Arrivals
              </h1>

              <p
                class="text-3xl lg:text-4xl xl:text-5xl text-primaryColor tracking-wide sm:tracking-widest md:tracking-wider lg:tracking-widest font-bold mb-0 capitalize"
              >
                green collection
              </p>

              <p
                class="p-3 md:p-3 sm:px-8 text-sm md:text-lg sm:text-lg font-light mb-0 text-gray-600 text-center"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                odit laboriosam accusantium voluptatum sapiente! Doloremque est
                doloribus, possimus non recusandae
              </p>

              <NuxtLink
                :to="{
                  name: 'Portfolio-Clothing-product-slug-detail',
                  params: { slug: newArivals.slug }
                }"
                class="bg-black white--text font-bold uppercase p-2 my-4 px-4 rounded-lg"
                >shop now</NuxtLink
              >
            </div>

            <div class="grid grid-row-1 w-full">
              <div class="grid grid-cols-2 gap-4">
                <div class="h-40 sm:h-60 xl:h-80 image1"></div>
                <div class="h-40 sm:h-60 xl:h-80 image2"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 p-3 md:col-span-6 md:h-auto">
          <div class="w-full h-80 bg-black image3 md:h-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newArivals() {
      let product = this.$store.getters["dataProduct/product"];
      let getProduct = product.find(item => item.text == "classic green");

      return getProduct;
    }
  }
};
</script>

<style>
.image1 {
  background: url("assets/image/clothingImage/classicgreen1.webp") no-repeat
    center center;
  background-size: cover;
  background-position: center;
}
.image2 {
  background: url("assets/image/clothingImage/classicgreen2.webp") no-repeat
    center center;
  background-size: cover;
  background-position: center;
}

.image3 {
  background: url("assets/image/clothingImage/classicgreen3.webp") no-repeat
    center center;
  background-size: cover;
  background-position: center;
}
</style>
