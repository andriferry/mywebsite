<template>
  <div
    id="aboutme"
    class="w-full my-3 p-5 sm:p-16 flex xl:p-32 bg-secondaryColor justify-center"
  >
    <div
      class="container lg:h-cardSizeXl md:h-cardSizeMd bg-white p-3 lg:p-10 flex flex-col md:flex-row  items-center rounded-xl"
    >
      <div class="p-4">
        <h1
          class="capitalize text-xl font-bold lg:text-xl text-primaryColor p-4 pb-3 lg:text-left text-center"
        >
          Freelance Web Developer Based In
          <span class="text-secondaryColor">Indonesia</span>
        </h1>
        <p
          class="text-xs sm:text-sm lg:text-lg text-gray-600 lg:text-left text-justify p-4 sm:p-5"
        >
          I am a specialist in vuejs developer and i prefer using nuxtjs, and
          API Development (Laravel), As a web developer I want to make sure that
          every project I build has a amazing user experience, starting from
          determining responsive design...
          <NuxtLink to="/Aboutme" class="secondaryColor--text underline italic"
            >Read More</NuxtLink
          >
        </p>
      </div>

      <div class="w-full p-4 md:order-first">
        <img
          width="200"
          height="200"
          class="rounded-full mx-auto"
          src="~/assets/image/portraitFoto.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
