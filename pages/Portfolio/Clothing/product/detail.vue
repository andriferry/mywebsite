<template>
  <div class="w-full min-h-screen">
    <v-img
      eager
      :height="heightBreakpoint"
      src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      lazy-src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      aspect-ratio="2"
    >
      <div class="w-full h-full flex items-center">
        <div class="flex flex-col">
          <h1
            class="flex font-bold uppercase w-full text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl justify-center tracking-widest sm:py-2"
          >
            vinta travel bags
          </h1>

          <spand
            class="flex justify-center font-bold capitalize text-white text-opacity-75 text-sm sm:text-lg lg:text-xl tracking-widest"
            >t-shirt</spand
          >
          <div class="w-full flex justify-center">
            <v-breadcrumbs :items="items">
              <template v-slot:item="{ item }">
                <v-breadcrumbs-item nuxt to="/" :disabled="item.disabled">
                  {{ item.text.toUpperCase() }}
                </v-breadcrumbs-item>
              </template>
            </v-breadcrumbs>
          </div>
        </div>
      </div>
    </v-img>

    <div class="p-1 sm:p-2 lg:p-4">
      <div class="grid grid-rows-1 lg:grid-cols-2 gap-2">
        <v-carousel height="350" hide-delimiters>
          <v-carousel-item
            eager
            v-for="(item, i) in product"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>

        <div class="text-white lg:col-span-1 p-4">
          <div class="price flex justify-between items-center">
            <span class="text-primaryColor text-3xl font-bold">$ 20.00</span>
            <div class="">
              <span class="text-secondaryColor text-lg font-bold"
                >Free delivery</span
              >
              <v-icon class="" color="secondaryColor">mdi-truck-fast</v-icon>
            </div>
          </div>

          <div class="sku py-3 flex justify-between items-center">
            <span class="text-primaryColor text-lg capitalize font-bold"
              >SKU</span
            >
            <div class="flex justify-end">
              <span
                class="text-black text-primaryColor  font-bold p-2 uppercase"
                >st-12526</span
              >
            </div>
          </div>

          <div class="sku py-3 flex justify-between items-center">
            <span class="text-primaryColor text-lg capitalize font-bold"
              >category</span
            >
            <div class="flex justify-end">
              <NuxtLink
                to="/"
                class="text-black secondaryColor--text font-bold capitalize"
                >t-shirt</NuxtLink
              >
              <span class="text-primaryColor px-1">,</span>
              <NuxtLink
                to="/"
                class="text-black secondaryColor--text  font-bold capitalize"
                >new arival</NuxtLink
              >
            </div>
          </div>

          <div class="size py-3 flex justify-between items-center">
            <span class="text-primaryColor text-lg font-bold">Size</span>
            <div>
              <button
                class="rounded-lg font-bold bg-gray-300 px-2 text-xs uppercase py-1 border-solid border-2 border-primaryColor border-opacity-25 text-primaryColor text-opacity-50"
              >
                xs
              </button>
              <button
                class="rounded-lg font-bold text-primaryColor border-solid border-2 border-black border-opacity-50 px-2 text-xs uppercase py-1"
              >
                s
              </button>
              <button
                class="rounded-lg font-bold text-primaryColor border-solid border-2 border-black border-opacity-50 px-2 text-xs uppercase py-1"
              >
                l
              </button>
              <button
                class="rounded-lg font-bold text-primaryColor border-solid border-2 border-black border-opacity-50 px-2 text-xs uppercase py-1"
              >
                xl
              </button>
            </div>
          </div>

          <div class="color py-3 flex justify-between items-center">
            <span class="text-primaryColor text-lg capitalize font-bold"
              >color</span
            >
            <div class="flex justify-end">
              <button
                class="text-black bg-secondaryColor rounded-lg font-bold text-primaryColor border-solid p-2 uppercase"
              ></button>
            </div>
          </div>

          <div class="amount py-3 flex justify-between items-center">
            <div class="flex justify-start text-black items-center">
              <div class="minus">
                <v-btn color="grey lighten-2" elevation="0" fab x-small>
                  <v-icon class="white--text text-h4">mdi-minus</v-icon>
                </v-btn>
              </div>

              <input
                value="1"
                class="w-16 text-center mx-1 border-gray-200 capitalize placeholder-gray-600 border-solid p-1 border-b-4 focus:outline-none focus:border-gray-500"
              />
              <div class="plus">
                <v-btn color="secondaryColor" elevation="0" fab x-small>
                  <v-icon class="white--text text-h4">mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="flex justify-end">
              <button
                class="text-white bg-secondaryColor rounded-lg font-bold px-4 py-2 text-sm capitalize"
                v-text="'add to cart'"
              ></button>
            </div>
          </div>
        </div>

        <div class="text-black p-4 lg:col-span-1">
          <h1 class="text-black font-bold py-2 capitalize">detail product</h1>
          <p class="p-0 m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nihil
            atque cum laboriosam minima odit earum nam, beatae voluptatem vitae
            voluptatum ipsum ducimus tempora pariatur deserunt eligendi dolorum
            tenetur necessitatibus. Quos nemo dolorem commodi eveniet
            exercitationem reprehenderit porro rem distinctio nobis aperiam
            earum, ad aut, ipsum molestiae, eos veniam incidunt consequuntur
            eligendi beatae corporis quis. Accusantium, quo amet. Sit, magni.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return "clothinglayout";
  },
  data() {
    return {
      items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Link 1",
          disabled: false,
          href: "breadcrumbs_link_1"
        },
        {
          text: "Link 2",
          disabled: true,
          href: "breadcrumbs_link_2"
        }
      ],
      product: [
        {
          src:
            "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        },
        {
          src:
            "https://images.unsplash.com/photo-1523380677598-64d85d015339?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        },
        {
          src:
            "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }
      ]
    };
  },
  computed: {
    heightBreakpoint() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "150";
        case "sm":
          return "200";
        case "md":
          return "230";
        case "lg":
          return "280";
      }
    }
  }
};
</script>

<style></style>
