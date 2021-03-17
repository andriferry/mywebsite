<template>
  <div class="w-full h-auto p-4 mb-10">
    <div class="cardAction w-full sm:p-16">
      <div class="container p-4 flex flex-col sm:flex-row">
        <div class="action flex flex-col font-bold mb-2 mb-sm-0 text-2xl sm:text-3xl">
          <span class="text-primaryColor">Got a project ?</span>

          <div class="w-auto">
            <v-hover v-slot="{ hover }">
              <NuxtLink
                to="/"
                class="secondaryColor--text hover:bg-primaryColor underline"
                :class="{ 'white--text': hover }"
                >Let's Talk !</NuxtLink
              >
            </v-hover>
          </div>
        </div>

        <div
          class="email text-primaryColor text-xl sm:text-2xl font-medium flex items-center sm:justify-end"
        >
          <h1>contact@andriferry.com</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    actionId: "contactme"
  }),
  created() {
    this.$emit("action", this.actionId);
  }
};
</script>

<style></style>
