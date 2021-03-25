<template>
  <div class="w-full h-screen p-5">
    <div class="grid container grid-rows-1">
      <div class="grid grid-cols-12">
        <div class="col-span-12 p-3 md:col-span-6">
          <div class="flex flex-col items-center">
            <h1 class="text-xl font-medium p-2 text-gray-500 capitalize">
              new Arrivals
            </h1>

            <p class="text-3xl font-bold mb-0 capitalize p-3">
              green collection
            </p>

            <p class="p-3 sm:px-8 font-light mb-0 text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              odit laboriosam accusantium voluptatum sapiente! Doloremque est
              doloribus, possimus non recusandae
            </p>

            <div class="grid grid-row-1 w-full">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-red-500 h-40 sm:h-60 xl:h-80 image1"></div>
                <div class="bg-red-500 h-40 sm:h-60 xl:h-80 image2"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 p-3 md:col-span-6 md:h-auto">
          <div class="w-full h-80 bg-black image3 md:h-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.image1 {
  background: url("https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
    no-repeat center center;
  background-size: cover;
  background-position: center;
}
.image2 {
  background: url("https://images.unsplash.com/photo-1523380677598-64d85d015339?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
    no-repeat center center;
  background-size: cover;
  background-position: center;
}

.image3 {
  background: url("https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
    no-repeat center center;
  background-size: cover;
  background-position: center;
}
</style>
