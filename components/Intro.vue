<template>
  <div class="w-full h-auto md:h-auto flex justify-center">
    <div
      class="container p-5 h-mobileSize  sm:h-smVh md:h-mobileSize xl:h-bigVh lg:h-lgVh w-full flex justify-center"
    >
      <div class="flex flex-col my-auto items-center">
        <h1
          class="text-lg xl:text-3xl sm:text-2xl font-bold uppercase p-4 text-primaryColor"
        >
          i'm a freelance
        </h1>
        <h1
          class="text-3xl sm:text-6xl md:text-mdHeader lg:text-header font-black text-secondaryColor uppercase"
        >
          web developer
        </h1>
        <p
          class="p-2 text-sm text-center text-gray-600 sm:w-4/5 md:w-mdWidth lg:w-3/4 mb-4"
        >
          Specialist in Vuejs, Nuxtjs, Tailwindcss, Javascript, Awesome website
          design responsive Building and more
        </p>

        <div class="flex p-4 flex-col sm:flex-row justify-center">
          <NuxtLink
            to="/"
            class="uppercase rounded-full p-4 bg-primaryColor white--text font-bold"
            >view our work</NuxtLink
          >
          <NuxtLink
            to="/"
            class="capitalize text-lg p-4 flex underline text-primaryColor justify-center"
            >contact me</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
