<template>
  <div
    class="w-full h-screen p-5"
    style="background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(0,0,0) 20%) repeat scroll 0% 0%"
  >
    <div
      class="container flex items-center w-full h-3/5 bg-black"
      :style="
        `background-image: url('${items[imagePosition].src}'); background-size: cover; background-position:center`
      "
    >
      <div class="arrow flex justify-between">
        <v-btn x-large icon @click="prevImage">
          <v-icon color="black" x-large v-text="'mdi-arrow-left'"></v-icon>
        </v-btn>
        <v-btn x-large icon @click="nextImage">
          <v-icon x-large color="black" v-text="'mdi-arrow-right'"></v-icon>
        </v-btn>
      </div>
    </div>
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
