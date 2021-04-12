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
                  <v-card-title
                    class="text-h6 text-sm-h3 text-md-h2 text-lg-h1 capitalize font-weight-bold"
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
                        width="150"
                        height="45"
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
            "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          text: "vinta travel bags",
          category: "bags collection"
        },
        {
          src:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          text: "nike red edition",
          category: "sneaker collection"
        },
        {
          src:
            "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          text: "green collection",
          category: "t-shirt collection"
        }
      ]
    };
  }
};
</script>

<style></style>
