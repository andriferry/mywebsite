<template>
  <div
    class="w-full h-auto flex flex-col justify-center signUpImage bg-red-500 p-5"
  >
    <div class="container text-white">
      <div class="grid grid-rows-1 p-5">
        <div class="grid grid-cols-2 gap-10 md:px-10">
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
    <ClothingcomponentSignupbox :dialog="dialog" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    signUpOpen() {
      console.log((this.dialog = !this.dialog));
    }
  }
};
</script>

<style>
.signUpImage {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
      no-repeat center center;
  background-size: cover;
  background-position: center;
}
</style>
