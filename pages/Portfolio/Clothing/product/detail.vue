<template>
  <div class="w-full min-h-screen">
    <!-- <v-img
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

          <span
            class="flex justify-center font-bold capitalize text-white text-opacity-75 text-sm sm:text-lg lg:text-xl tracking-widest"
            >t-shirt</span
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
    </v-img> -->
    <ProductdetailHeroimage />
    <div class="p-1 sm:p-2 lg:p-4">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" align-self="start">
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
          </v-col>

          <v-col md="6" cols="12" align-self="end">
            <div
              class="sku py-3 flex justify-between items-center"
              v-for="(data, index) in productInformation"
              :key="index"
            >
              <template v-if="index === 0">
                <span
                  class="text-primaryColor text-3xl font-bold"
                  v-text="data.properties"
                ></span>
              </template>

              <template v-else>
                <span
                  class="text-primaryColor text-lg capitalize font-bold"
                  v-text="data.properties"
                ></span>
              </template>

              <div class="flex justify-end">
                <template v-if="index === 0">
                  <span class="text-secondaryColor text-lg font-bold"
                    >Free delivery</span
                  >
                  <v-icon class="" color="secondaryColor"
                    >mdi-truck-fast</v-icon
                  >
                </template>

                <template v-else>
                  <template v-if="Array.isArray(data.element) !== true">
                    <span
                      class="text-primaryColor font-bold p-2 uppercase"
                      v-text="data.element"
                    ></span>
                  </template>

                  <template v-else>
                    <template v-if="data.properties === 'category'">
                      <NuxtLink
                        to="/"
                        class="text-black secondaryColor--text font-bold capitalize"
                        v-for="(category, index) in data.element"
                        :key="index"
                        v-text="category"
                      ></NuxtLink>
                      <span class="text-primaryColor px-1">,</span>
                    </template>

                    <template v-else-if="data.properties === 'size'">
                      <button
                        v-for="(size, index) in data.element"
                        :key="index"
                        v-text="size"
                        :class="
                          `${index === 3 ? 'ml-1' : 'mx-1'} ${
                            index === soldoutSize
                              ? 'bg-gray-300 text-white border-white'
                              : 'bg-white border-black text-primaryColor'
                          } rounded-lg font-bold border-solid border-2 border-opacity-50 px-2 text-xs uppercase py-1`
                        "
                      ></button>
                    </template>

                    <template v-else-if="data.properties === 'color'">
                      <button
                        class="rounded-lg p-2"
                        v-for="(colorClass, index) in data.element"
                        :key="index"
                        :class="colorClass"
                      ></button>
                    </template>
                  </template>
                </template>
              </div>
            </div>

            <div class="amount py-3 flex justify-between items-center">
              <div class="flex justify-start text-black items-center">
                <div class="minus">
                  <v-btn
                    :color="
                      dataCheckout > 1 ? 'secondaryColor' : 'grey lighten-2'
                    "
                    elevation="0"
                    @[countMinus]="dataCheckout--"
                    fab
                    x-small
                  >
                    <v-icon class="white--text text-h4">mdi-minus</v-icon>
                  </v-btn>
                </div>

                <input
                  v-model="dataCheckout"
                  class="w-16 text-center mx-1 border-gray-200 capitalize placeholder-gray-600 border-solid p-1 border-b-4 focus:outline-none focus:border-gray-500"
                />
                <div class="plus">
                  <v-btn
                    color="secondaryColor"
                    elevation="0"
                    fab
                    x-small
                    @click="dataCheckout++"
                  >
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
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h1 class="text-black font-bold py-2 capitalize text-xl">
              detail product
            </h1>
            <p class="p-0 m-0 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              nihil atque cum laboriosam minima odit earum nam, beatae
              voluptatem vitae voluptatum ipsum ducimus tempora pariatur
              deserunt eligendi dolorum tenetur necessitatibus. Quos nemo
              dolorem commodi eveniet exercitationem reprehenderit porro rem
              distinctio nobis aperiam earum, ad aut, ipsum molestiae, eos
              veniam incidunt consequuntur eligendi beatae corporis quis.
              Accusantium, quo amet. Sit, magni.
            </p>
          </v-col>
        </v-row>
      </v-container>
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
      soldoutSize: 0,
      dataCheckout: 1,
      countMinus: "",
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
      productInformation: [
        { properties: "$ 20.00", element: "Free delivery" },
        { properties: "SKU", element: "st-12526" },
        {
          properties: "category",
          element: ["t-shirt", "new arival"]
        },
        { properties: "size", element: ["xs", "s", "l", "xl"] },
        { properties: "color", element: ["bg-secondaryColor"] }
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
  watch: {
    dataCheckout(value) {
      value > 1 ? (this.countMinus = "click") : (this.countMinus = null);
    }
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
  },
  methods: {
    sizeChoose() {
      console.log("hello");
    }
  }
};
</script>

<style></style>
