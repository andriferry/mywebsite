<template>
  <div>
    <Hero />
    <Categories />
    <Sale />
    <Newarrivals />
    <Bestseller />
    <Signuppage />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Clothing Store",
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

<style>
.v-application a {
  color: #444;
}
</style>
