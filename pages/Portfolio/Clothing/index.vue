<template>
  <div>
    <ClothingcomponentHero />
    <ClothingcomponentCategories />
    <ClothingcomponentSale />
    <ClothingcomponentNewarrivals />
    <ClothingcomponentBestseller />
    <ClothingcomponentSignuppage />
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

<style></style>
