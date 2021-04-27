<template>
  <div class="w-full min-h-screen">
    <ClothingcomponentProductdetailHeroimage />
    <div class="p-1 sm:p-2 lg:p-4">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" align-self="start">
            <v-carousel height="350" hide-delimiters>
              <v-carousel-item
                eager
                v-for="(item, i) in chooseProduct.img"
                :key="i"
                :src="item"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-col>

          <v-col md="6" cols="12" align-self="end">
            <div
              class="sku py-3 flex justify-between items-center"
              v-for="(data, index) in chooseProduct.productInformation"
              :key="index"
            >
              <template v-if="index === 0">
                <span
                  class="text-primaryColor text-3xl font-bold"
                  v-text="'$ ' + data.properties"
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
                      >
                        {{ category }}
                        <span
                          v-if="index == data.element.length - 1 ? false : true"
                          class="text-primaryColor"
                          >,</span
                        >
                      </NuxtLink>
                    </template>

                    <template v-else-if="data.properties === 'size'">
                      <ul class="">
                        <li
                          v-for="(data, index) in data.element"
                          :key="index"
                          class="inline-block bg-white border-black text-primaryColor"
                          :class="index === 3 ? 'ml-1' : 'mx-1'"
                        >
                          <button
                            v-if="index === soldoutSize"
                            @[null]="sizeChoose"
                            class="bg-gray-300 text-white border-white rounded-lg font-bold border-solid border-2 border-opacity-50 px-2 text-xs uppercase py-1"
                            v-text="data"
                          ></button>

                          <button
                            v-else
                            @click="sizeChoose(index)"
                            ref="size"
                            :data-size="data"
                            class="rounded-lg font-bold border-solid border-2 border-opacity-50 px-2 text-xs uppercase py-1"
                            :class="
                              index === addSize
                                ? 'bg-secondaryColor border-white text-white'
                                : 'bg-white border-black text-primaryColor'
                            "
                            v-text="data"
                          ></button>
                        </li>
                      </ul>
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
                      paymentAmount > 1 ? 'secondaryColor' : 'grey lighten-2'
                    "
                    elevation="0"
                    @[countMinus]="paymentAmount--"
                    fab
                    x-small
                  >
                    <v-icon class="white--text text-h4">mdi-minus</v-icon>
                  </v-btn>
                </div>

                <input
                  v-model="paymentAmount"
                  ref="input"
                  class="w-16 text-center mx-1  capitalize placeholder-gray-600 border-solid p-1 border-b-4 focus:outline-none"
                  :class="
                    error
                      ? 'border-red-500'
                      : 'focus:border-gray-500 border-gray-200'
                  "
                />
                <div class="plus">
                  <v-btn
                    :color="
                      paymentAmount >= stock
                        ? 'grey lighten-2'
                        : 'secondaryColor'
                    "
                    elevation="0"
                    fab
                    x-small
                    @[countPlus]="paymentAmount++"
                  >
                    <v-icon class="white--text text-h4">mdi-plus</v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="flex justify-end">
                <button
                  @click="addCart('hello')"
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

    <ClothingcomponentProductdetailSimilarProduct />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Detail Product",
      meta: [
        {
          hid: "description hid",
          name: "description name",
          content: "Home page description"
        }
      ]
    };
  },
  layout(context) {
    return "clothinglayout";
  },
  data() {
    return {
      soldoutSize: 0,
      paymentAmount: 1,
      addSize: null,
      countMinus: "",
      error: false,
      stock: 10,
      countPlus: "click"
    };
  },
  watch: {
    paymentAmount(value) {
      let number = /^\d+$/;

      if (number.test(value)) {
        this.activButtonMinus(value);
        this.nonActiveButtonAdd(value);
        this.error = true ? (this.error = false) : false;
      } else {
        this.error = true;
      }
    }
  },
  computed: {
    chooseProduct() {
      return this.$store.getters["dataProduct/product"][7];
    }
  },
  methods: {
    sizeChoose(value) {
      if (this.addSize == null) {
        this.addSize = value;
      } else {
        if ((this.addSize = value)) {
          this.addSize = null;
          this.addSize = value;
        }
      }
    },
    activButtonMinus(value) {
      value > 1 ? (this.countMinus = "click") : (this.countMinus = null);
    },
    nonActiveButtonAdd(value) {
      value >= this.getStock()
        ? (this.countPlus = null)
        : (this.countPlus = "click");
    },
    addCart(value) {
      let cartProduct = {
        img: this.chooseProduct.img[0],
        text: this.chooseProduct.text,
        discount: this.chooseProduct.discount,
        price: this.chooseProduct.price,
        category: this.chooseProduct.category,
        paymount: this.paymentAmount
      };
      this.$store.dispatch("cart/pushCart", cartProduct);
    },
    getStock() {
      let productInfo = this.chooseProduct.productInformation;
      let stock;
      productInfo.forEach(element => {
        if (element.properties === "stock") {
          stock = element.element;

          this.stock = element.element;
        }
      });
      return stock;
    }
  }
};
</script>

<style></style>
