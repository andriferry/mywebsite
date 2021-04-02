<template>
  <div
    class="w-full h-auto md:h-auto md:mb-10 xl:h-screen p-5"
    style="background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(0,0,0) 20%) repeat scroll 0% 0%"
  >
    <v-container>
      <v-carousel hide-delimiters cycle>
        <v-carousel-item
          eager
          v-for="(image, index) in items"
          :key="index"
          :src="image.src"
        >
          <v-sheet color="transparent" height="103%">
            <v-row class="fill-height" align="center" justify="center">
              <v-col
                class="d-flex flex-column items-center"
                align-self="center"
                cols="12"
              >
                <v-card color="transparent" class="pa-10" flat>
                  <v-card-title class="text-h5 text-sm-h3 text-md-h2 text-lg-h1 capitalize font-weight-bold">
                    green collection
                  </v-card-title>

                  <v-card-subtitle class="d-flex pa-2 justify-center capitalize">
                    t-shirt new collection
                  </v-card-subtitle>

                  <v-card-actions class="d-flex justify-center">
                    <v-hover v-slot="{ hover }">
                      <v-btn
                        nuxt
                        to="/"
                        width="150"
                        :color="hover ? 'black' : 'white'"
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
    return {
      items: [
        {
          src:
            "https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        },
        {
          src:
            "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNsb3RoaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        },
        {
          src:
            "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        },
        {
          src:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        }
      ]
    };
  }
};
</script>

<style></style>
