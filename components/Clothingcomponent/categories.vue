<template>
  <div class="w-full h-auto mb-5 p-5">
    <div class="container grid grid-rows-1">
      <div class="">
        <div class="container flex justify-center flex-col">
          <h1
            class="text-primaryColor sm:text-6xl flex justify-center py-5 py-sm-3 font-bold capitalize text-3xl"
          >
            popular categories
          </h1>
          <p
            class="text-center md:px-8 sm:px-6 xl:px-20 lg:text-xl lg:px-16 p-2 text-sm md:text-lg sm:text-sm font-light"
            v-text="textCategories"
          ></p>
        </div>
      </div>

      <div class="container">
        <div class="grid grid-rows-1 gap-4">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div
              v-for="(image, index) in blockImage"
              :key="index"
              class="card h-auto w-full"
              :class="image.colClass"
            >
              <div
                class="h-40 p-6 flex justify-center w-full flex-col sm:h-80"
                :class="image.class"
              >
                <h1
                  class="text-white font-bold sm:text-6xl md:text-5xl lg:text-6xl tracking-wider text-3xl capitalize"
                  v-text="image.textH1"
                ></h1>
                <a
                  href="#"
                  class="capitalize underline white--text sm:text-xl tracking-wider sm:p-2 italic"
                  >shop now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textCategories:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam temporibus doloremque sunt consequatur nemo commodi rerum  ab magni sequi unde non odit mollitia aliquid reprehenderit assumenda cumque, quia.",
      blockImage: [
        {
          class: "image1Sneaker",
          colClass: "md:col-span-7",
          textH1: "sneaker"
        },
        { class: "image2Caps", colClass: "md:col-span-5", textH1: "caps" },
        { class: "image3Bags", colClass: "md:col-span-4", textH1: "bags" },
        { class: "image4Watch", colClass: "md:col-span-4", textH1: "watch" },
        { class: "image5Tshirt", colClass: "md:col-span-4", textH1: "Tshirt" },
        {
          class: "image6Sunglasses",
          colClass: "md:col-span-5",
          textH1: "eyewear"
        },
        {
          class: "image7MoreCollection",
          colClass: "md:col-span-7",
          textH1: "and more"
        }
      ]
    };
  }
};
</script>

<style>
.image1Sneaker {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
      no-repeat center center;
  background-size: cover;
  background-position: center;
}
.image2Caps {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1613586020992-cd25c814d975?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80")
      no-repeat center center;
  background-size: cover;
  background-position: center;
}
.image3Bags {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1577733966973-d680bffd2e80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60")
      no-repeat center center;
  background-size: cover;
  background-position: center;
}
.image4Watch {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80")
      no-repeat center center;
  background-size: cover;
  background-position: center;
}
.image5Tshirt {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60")
      no-repeat center center;
  background-size: cover;
  background-position: center;
}
.image6Sunglasses { 
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1570993492880-e8b3bfd5e100?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60")
      no-repeat center center;
  background-size: cover;
  background-position: center;
}
.image7MoreCollection {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1313&q=80")
      no-repeat center center;
  background-size: cover;
  background-position: center;
}
</style>
