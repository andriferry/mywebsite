<template>
  <div
    class="w-full h-auto md:h-auto md:mb-10 xl:h-screen p-5"
    style="background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(0,0,0) 20%) repeat scroll 0% 0%"
  >
    <v-container>
      <v-carousel hide-delimiters cycle>
        <v-carousel-item
          eager
          v-for="(image, index) in imageProduct"
          :key="index"
          :src="image.img[0]"
        >
          <v-sheet color="transparent" height="103%">
            <v-row class="fill-height" align="center" justify="center">
              <v-col
                class="d-flex flex-column items-center"
                align-self="center"
                cols="12"
              >
                <v-card color="transparent" class="pa-10" flat>
                  <v-card-title
                    class="text-h6 text-sm-h3 text-md-h2 text-lg-h1 capitalize font-weight-black"
                    v-text="image.text"
                  >
                  </v-card-title>

                  <v-card-subtitle
                    class="d-flex pa-2 text-h6 text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 justify-center capitalize"
                    v-text="image.category"
                  >
                  </v-card-subtitle>

                  <v-card-actions class="d-flex justify-center">
                    <v-hover v-slot="{ hover }">
                      <v-btn
                        nuxt
                        to="/"
                        class="pa-3 pa-sm-4 pa-md-5 pa-lg-6 text-lg-h6 font-weight-bold"
                        :class="{ 'black--text': hover }"
                        color="white"
                        :outlined="hover ? false : true"
                        >shop now</v-btn
                      >
                    </v-hover>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    imageProduct() {
      return this.$store.getters["dataProduct/product"].slice(0, 3);
    }
  }
};
</script>

<style></style>
