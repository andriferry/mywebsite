<template>
  <div>
    <Hero :target="'#portfolioPages'">
      <template #textComponent>
        awesome work
      </template>
    </Hero>

    <div class="container" id="portfolioPages">
      <div class="p-2 md:p-6">
        <h1
          class="font-bold sm:text-4xl text-3xl text-primaryColor capitalize md:p-4 flex justify-center my-5 lg:my-10 lg:text-5xl"
        >
          latest creative <span class="secondaryColor--text ml-1"> work</span>
        </h1>

        <div
          class="container grid grid-rows-auto sm:grid-cols-2 gap-3 lg:gap-4 sm:flex-row xl:p-12"
        >
          <v-hover
            v-slot="{ hover }"
            v-for="(data, index) in dataPortfolio"
            :key="index"
          >
            <NuxtLink :to="data.link" class="mx-2 md:mx-1">
              <div class="w-full card p-3 rounded-lg shadow-xl bg-white">
                <img
                  height="200"
                  :src="require(`~/assets/image/${data.image}`)"
                  alt=""
                />
              </div>
              <p
                class="flex justify-center p-4 font-bold text-xl lg:text-2xl xl:text-3xl capitalize"
                v-text="data.title"
                :class="hover ? 'text-secondaryColor' : 'text-primaryColor'"
              ></p>
            </NuxtLink>
          </v-hover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Portfolio",
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
      dataPortfolio: [
        {
          image: "formValidation.png",
          title: "form validation",
          textColor: "text-primaryColor",
          link: "/portfolio/Formvalidation"
        },
        {
          image: "movieTicket.png",
          title: "movie ticket",
          textColor: "text-primaryColor",
          link: "/portfolio/Moviebooking"
        }
      ]
    };
  }
};
</script>

<style></style>
