<template>
  <div
    class="w-full h-auto flex flex-col justify-center signUpImage bg-red-500 p-5 sm:p-16 lg:p-20 xl:p-24"
  >
    <div class="container text-white">
      <div class="grid grid-rows-1 p-5">
        <div class="grid grid-cols-2 gap-10 sm:gap-16 md:px-10 lg:gap-20">
          <div
            class="col-span-2 text-center text-xl sm:text-4xl lg:text-4xl xl:text-5xl lg:tracking-widest capitalize font-bold"
          >
            Sign up to get the most out of shopping.
          </div>
          <div class="col-span-2 flex justify-center  md:items-center">
            <button
              @click="signUpOpen"
              class="bg-secondaryColor font-bold p-2 md:px-5 md:py-2 rounded-lg"
            >
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
    <ClothingcomponentSignupbox
      :dialog="openDialog"
      @closeSignupBox="closeSignup"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    openDialog: {
      get() {
        return this.dialog;
      },
      set(value) {
        this.dialog = value;
      }
    }
  },
  methods: {
    signUpOpen() {
      this.openDialog = true;
    },
    closeSignup(value) {
      this.openDialog = value;
    }
  }
};
</script>

<style>
.signUpImage {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("assets/image/clothingImage/store.webp") no-repeat center center;
  background-size: cover;
  background-position: center;
}
</style>
