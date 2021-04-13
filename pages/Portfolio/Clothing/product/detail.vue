<template>
  <div class="w-full h-screen">
    <v-img
      eager
      height="150"
      src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      lazy-src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      aspect-ratio="2"
    >
      <div class="w-full h-full flex items-center">
        <div class="flex flex-col">
          <h1
            class="flex font-bold uppercase w-full text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl justify-center tracking-widest sm:py-2"
          >
            vinta travel bags
          </h1>

          <span
            class="flex justify-center font-bold capitalize text-white text-opacity-75 text-sm sm:text-lg lg:text-xl tracking-widest"
            >t-shirt</span
          >
          <div class="w-full flex justify-center">
            <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
          </div>
        </div>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  layout(context) {
    return "clothinglayout";
  },
  data() {
    return {
      items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Link 1",
          disabled: false,
          href: "breadcrumbs_link_1"
        },
        {
          text: "Link 2",
          disabled: true,
          href: "breadcrumbs_link_2"
        }
      ]
    };
  }
};
</script>

<style></style>
