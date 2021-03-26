<template>
  <div
    class="w-full h-screen p-5"
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
          <v-sheet color="transparent" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <!-- Maintenance -->
              <!-- <div class="flex flex-col items-center">
                <div class="display-3 uppercase">slide</div>
                <div class="display-3 uppercase">slide</div>

                <button class="bg-red-500 p-5 uppercase font-bold rounded-lg">
                  shop now
                </button>
              </div> -->
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
      imagePosition: 0,
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
  },
  methods: {
    nextImage() {
      this.imagePosition === this.items.length - 1
        ? (this.imagePosition = 0)
        : (this.imagePosition = this.imagePosition + 1);
    },
    prevImage() {
      this.imagePosition === 0
        ? (this.imagePosition = this.items.length - 1)
        : (this.imagePosition = this.imagePosition - 1);
    }
  }
};
</script>

<style></style>
