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
        <h1
          class="flex font-bold uppercase text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center justify-center tracking-widest"
        >
          vinta travel bags
        </h1>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  layout(context) {
    return "clothinglayout";
  }
};
</script>

<style></style>
