<template>
  <div>
    <ClothingcomponentNavbar />

    <ClothingcomponentFooter />
  </div>
</template>

<script>
export default {
  layout(context) {
    return "secondLayout";
  },
  head() {
    return {
      title: "Clothing"
    };
  }
};
</script>

<style></style>
