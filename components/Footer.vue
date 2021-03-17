<template>
  <v-footer app absolute tile color="grey darken-4">
    <v-container class="pa-3 pa-sm-5 ">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          class="d-flex justify-center justify-sm-start align-center"
          order="1"
          order-sm="0"
        >
          <p class="grey--text ma-0">
            &copy; {{ new Date().getFullYear() }} All Right Reserved.
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="d-flex align-center justify-center justify-sm-end"
          order="0"
          order-sm="1"
        >
          <v-hover
            v-slot="{ hover }"
            v-for="(items, index) in socialMedia"
            :key="items[index]"
          >
            <v-btn
              fab
              small
              class="mx-1"
              icon
              tag="a"
              target="_blank"
              :href="items.href"
              :color="`${hover ? items.hoverColor : 'grey'}`"
            >
              <v-icon v-text="items.icon"></v-icon>
            </v-btn>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "foot",
  data: () => ({
    socialMedia: [
      {
        icon: "mdi-facebook",
        hoverColor: "blue",
        href: "https://web.facebook.com/andri.ferry13/"
      },
      { icon: "mdi-github", hoverColor: "white" },
      { icon: "mdi-instagram", hoverColor: "instagramColor" }
    ]
  })
};
</script>

<style></style>
