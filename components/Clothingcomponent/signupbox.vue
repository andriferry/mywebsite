<template>
  <div>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="500px"
    >
      <div class="bg-white w-full h-screen">
        <div class="container">
          <div class="p-5 flex flex-col justify-center">
            <h1 class="capitalize font-bold text-primaryColor text-3xl">
              sign up now
            </h1>
            <h2 class="py-2 text-black text-opacity-50 mb-5">
              Already have an Account ?
              <NuxtLink to="/" class="secondaryColor--text font-semibold"
                >Log In</NuxtLink
              >
            </h2>

            <v-divider></v-divider>

            <div class="grid mt-5 grid-rows-1">
              <div class="grid grid-cols-12 gap-5">
                <div
                  class="col-span-4"
                  v-for="(data, index) in acountButton"
                  :key="index"
                >
                  <v-btn :color="data.buttonColor" depressed>
                    <v-icon
                      color="white"
                      class="px-2"
                      v-text="data.iconName"
                    ></v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      acountButton: [
        {
          buttonColor: "red",
          iconName: "mdi-google"
        },
        {
          buttonColor: "black",
          iconName: "mdi-apple"
        },
        {
          buttonColor: "blue",
          iconName: "mdi-facebook"
        }
      ]
    };
  }
};
</script>

<style></style>
