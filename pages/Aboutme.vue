<template>
  <div>
    <Hero>
      <template #textComponent>
        about me
      </template>
    </Hero>

    <div class="intro flex justify-center p-10">
      <h1 class="font-bold text-3xl text-primaryColor capitalize">
        hello everybody
      </h1>
    </div>

    <div class="flex flex-col lg:flex-row  container">
      <div class="w-full my-3 image p-4 lg:order-last">
        <img
          width="200"
          height="200"
          class="rounded-full mx-auto"
          src="~/assets/image/portraitFoto.jpg"
          alt=""
        />
      </div>

      <div class="text container p-4">
        <p
          class="font-semibold sm:text-justify text-justify capitalize text-primaryColor text-lg"
        >
          My name is <span class="secondaryColor--text">andri ferry</span>,
          Freelance web developer from Jakarta, Indonesia. Currently I am a
          freelance at
          <a
            href="https://www.upwork.com/fl/andriferry"
            target="_blank"
            class="secondaryColor--text hover:underline"
            >Upwork</a
          >
        </p>

        <p class="text-base sm:text-justify font-normal text-gray-500">
          I am a specialist in vuejs developer and i prefer using nuxtjs, and
          API Development (Laravel), As a web developer I want to make sure that
          every project I build has a amazing user experience, starting from
          determining responsive design (Mobile, Tablet, and large screens),
          Using design Modern UI I preferably work with Vuetifyjs (Vuejs
          Component), sometime use Tailwindcss , and clean code . You can check
          it my prortfolio in this
          <NuxtLink to="/" class="secondaryColor--text hover:underline">
            here</NuxtLink
          >
        </p>

        <p class="text-base font-normal text-gray-500">
          And I've created a several projects that I share on GitHub and view
          them
          <a
            href="https://github.com/andriferry"
            target="_blank"
            class="secondaryColor--text hover:underline"
            >here</a
          >
        </p>

        <p class="text-base capitalize font-normal text-gray-500">
          interested ?
        </p>

        <p class="text-base font-normal text-gray-500">
          If you need help creating a new design for your website, or modifying
          an existing design or there may be a bug on the website you created
          using laravel. You can
          <a href="" class="secondaryColor--text hover:underline">tell me</a>
          and I will be very happy to discuss with you
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description hid",
          name: "description name",
          content: "Home page description"
        }
      ]
    };
  },
  data() {
    return {
      title: "About Me"
    };
  }
};
</script>

<style></style>
