<template>
  <div class="w-full h-screen bg-red-500 flex justify-center">
    <div class="container bg-white flex justify-center my-auto p-5">
      <div class="container grid md:grid-cols-2 xl:grid-cols-2">
        <div
          class="bg-blue-500 p-14 grid auto-rows-auto gap-5 divide-y divide-gray-300"
        >
          <div class="grid grid-cols-5 align-center">
            <img
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              class="rounded-full h-20 w-20"
              width="50"
              height="50"
              alt=""
            />

            <div class="col-span-2 flex flex-col capitalize px-1">
              <v-hover v-slot="{ hover }">
                <NuxtLink
                  to="/"
                  class="font-bold"
                  :class="hover ? 'secondaryColor--text' : 'primaryColor--text'"
                >
                  classic green
                </NuxtLink>
              </v-hover>

              <span class="text-black text-sm text-opacity-50">
                $ 10.00
              </span>
            </div>

            <div class="col-span-1">hello again</div>
            <div class="col-span-1">hello again</div>
          </div>
          <p>left</p>
          <p>left</p>
          <p>left</p>
        </div>
        <div>cart right</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "clothinglayout",
  head: {
    title: "Cart"
  }
};
</script>

<style></style>
