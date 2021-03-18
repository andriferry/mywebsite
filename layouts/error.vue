<template>
  <div
    class="w-full sm:h-smVh md:h-bigVh xl:h-bigVh lg:h-bigVh flex justify-center"
  >
    <div
      class="container p-5 h-mobileSize sm:h-smVh md:h-bigVh xl:h-bigVh lg:h-bigVh w-full flex justify-center"
    >
      <div class="container my-auto items-center">
        <div class="flex flex-col p-4 items-center">
          <h1 class="text-9xl font-black capitalize p-4 text-primaryColor">
            404
          </h1>
          <p
            class="p-0 m-0 font-semibold text-primaryColor text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center"
          >
            Sorry, the page you are looking for could not be found.
          </p>

          <div class="my-5">
            <NuxtLink
              to="/"
              class="uppercase white--text font-bold p-4 rounded-full bg-green-400 flex items-center"
            >
              back to home
            </NuxtLink>
          </div>
        </div>

        <!-- <div class="flex justify-center p-4"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>
