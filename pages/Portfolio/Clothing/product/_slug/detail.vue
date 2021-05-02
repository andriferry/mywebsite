<template>
  <div class="w-full min-h-screen">
    <ClothingcomponentProductdetailHeroimage />
    <div class="p-1 sm:p-2 lg:p-4">
      <v-container>
        <v-row>
          <ClothingcomponentProductdetailCarousel />

          <ClothingcomponentProductdetailProductinformation />
        </v-row>

        <v-row>
          <v-col>
            <h1 class="text-black font-bold py-2 capitalize text-xl">
              detail product
            </h1>
            <p class="p-0 m-0 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              nihil atque cum laboriosam minima odit earum nam, beatae
              voluptatem vitae voluptatum ipsum ducimus tempora pariatur
              deserunt eligendi dolorum tenetur necessitatibus. Quos nemo
              dolorem commodi eveniet exercitationem reprehenderit porro rem
              distinctio nobis aperiam earum, ad aut, ipsum molestiae, eos
              veniam incidunt consequuntur eligendi beatae corporis quis.
              Accusantium, quo amet. Sit, magni.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <ClothingcomponentProductdetailSimilarProduct />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Detail Product",
      meta: [
        {
          hid: "description hid",
          name: "description name",
          content: "Home page description"
        }
      ]
    };
  },
  layout(context) {
    return "clothinglayout";
  }
};
</script>

<style></style>
