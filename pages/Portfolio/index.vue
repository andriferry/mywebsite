<template>
  <div>
    <Hero>
      <template class="text-center" #textComponent>
        awesome work
      </template>
    </Hero>

    <div class="container">
      <div class="p-2 md:p-6">
        <h1
          class="font-bold sm:text-4xl text-3xl text-primaryColor capitalize md:p-4 flex justify-center my-5 lg:my-10 lg:text-5xl"
        >
          latest creative <span class="secondaryColor--text ml-1"> work</span>
        </h1>

        <div class="catalog">
          <div
            class="container grid grid-rows-2 sm:grid-cols-2 lg:gap-4 gap-3 xl:p-12"
          >
            <v-hover v-slot="{ hover }" v-for="index in 3" :key="index">
              <NuxtLink to="/">
                <div class="w-full card p-3 rounded-lg shadow-xl bg-white">
                  <img
                    height="200"
                    src="~/assets/image/formValidation.png"
                    alt=""
                  />
                </div>
                <p
                  class="flex justify-center p-4 font-bold text-xl lg:text-2xl xl:text-3xl capitalize"
                  :class="hover ? 'text-secondaryColor' : 'text-primaryColor'"
                >
                  form validation
                </p>
              </NuxtLink>
            </v-hover>
          </div>
        </div>
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
      title: "Portfolio"
    };
  }
};
</script>

<style></style>
