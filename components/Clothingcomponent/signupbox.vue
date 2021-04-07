<template>
  <div>
    <v-dialog
      v-model="openDialog"
      transition="dialog-bottom-transition"
      max-width="500px"
      @input="trial"
    >
      <div class="bg-white w-full h-auto">
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

            <div class="grid my-5 grid-rows-1">
              <div class="grid grid-cols-3 gap-5 sm:gap-5">
                <div
                  class="col-span-1"
                  v-for="(data, index) in acountButton"
                  :key="index"
                >
                  <v-btn :color="data.buttonColor" depressed>
                    <v-icon
                      color="white"
                      class="px-2 px-sm-10"
                      v-text="data.iconName"
                    ></v-icon>
                  </v-btn>
                </div>
              </div>
            </div>

            <form action="" class="">
              <div
                class="form-control pb-5"
                v-for="(item, index) in formData"
                :key="index"
              >
                <input
                  :id="item.inputId"
                  :type="item.type"
                  :placeholder="item.label"
                  class="w-full border-gray-200 capitalize placeholder-gray-600 border-solid rounded-md p-2 border-2 focus:outline-none focus:border-gray-500"
                />
              </div>
              <button
                class="w-full capitalize font-bold bg-secondaryColor p-2 rounded-md text-white active:bg-blue-500"
              >
                register
              </button>
            </form>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialog"],
  data() {
    return {
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
      ],
      formData: [
        { label: "full name", inputId: "name", type: "text" },
        { label: "email", inputId: "email", type: "email" },
        { label: "password", inputId: "password", type: "password" }
      ]
    };
  },
  computed: {
    openDialog: {
      get() {
        return this.dialog;
      },
      set(value) {
        return value;
      }
    }
  },
  methods: {
    trial(value) {
      this.openDialog = value;

      this.$emit("closeSignupBox", value);

    }
  }
};
</script>

<style></style>
