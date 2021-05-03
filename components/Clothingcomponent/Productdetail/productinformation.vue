<template>
  <v-col md="6" cols="12" align-self="end">
    <div
      class="sku py-3 flex justify-between items-center"
      v-for="(data, index) in chooseProduct.productInformation"
      :key="index"
    >
      <template v-if="index === 0">
        <template v-if="chooseProduct.hasOwnProperty('discount') === true">
          <template v-if="chooseProduct.discount == 'out of stock'">
            <del
              class="text-primaryColor text-3xl font-bold"
              v-text="'$ ' + data.properties"
            >
            </del>

            <span class="text-red-500 mx-2 text-3xl capitalize font-bold">
              Out Of Stock
            </span>
          </template>

          <template v-else>
            <del
              class="text-primaryColor text-3xl font-bold"
              v-text="'$ ' + data.properties"
            >
            </del>
            <span class="text-secondaryColor mx-2 text-3xl font-bold">
              {{ data.properties | discount(chooseProduct.discount) | toUsd }}
            </span>
          </template>
        </template>

        <template v-else>
          <span
            class="text-primaryColor text-3xl font-bold"
            v-text="'$ ' + data.properties"
          >
          </span>
        </template>
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
          <v-icon class="" color="secondaryColor">mdi-truck-fast</v-icon>
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
                  <template v-if="index === soldoutSize">
                    <input
                      type="radio"
                      :id="data"
                      :value="data"
                      v-model="pickedSize"
                      class="w-0 absolute opacity-0"
                    />
                    <label
                      :for="data"
                      class="bg-gray-300 text-white border-white rounded-lg font-bold border-solid border-2 border-opacity-50 px-2 text-xs uppercase py-1"
                      >{{ data }}</label
                    >
                  </template>

                  <template v-else>
                    <input
                      type="radio"
                      :id="data"
                      :value="data"
                      v-model="pickedSize"
                      class="w-0 absolute opacity-0"
                    />
                    <label
                      :for="data"
                      class="rounded-lg cursor-pointer font-bold flex justify-center border-solid border-2 border-opacity-50 px-2 text-xs uppercase py-1"
                      :class="
                        index === indexSize
                          ? 'bg-secondaryColor border-white text-white'
                          : 'bg-white border-black text-primaryColor'
                      "
                      >{{ data }}</label
                    >
                  </template>
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
            :color="paymentAmount > 1 ? 'secondaryColor' : 'grey lighten-2'"
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
            error ? 'border-red-500' : 'focus:border-gray-500 border-gray-200'
          "
        />
        <div class="plus">
          <v-btn
            :color="
              paymentAmount >= productStock
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
          @[addToCart]="addCart(chooseProduct.id)"
          class="text-white rounded-lg font-bold px-4 py-2 text-sm capitalize"
          :class="
            addToCart == null
              ? 'bg-gray-300 cursor-default'
              : 'bg-secondaryColor'
          "
        >
          {{ addToCart == null ? "sold out" : "add to cart" }}
        </button>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      pickedSize: null,
      soldoutSize: 0,
      paymentAmount: 1,
      indexSize: null,
      countMinus: "",
      error: false,
      countPlus: "click",
      addToCart: "click"
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
    },
    pickedSize(value) {
      this.chooseProduct.productInformation.forEach(element => {
        if (element.properties === "size") {
          //for get index size
          this.indexSize = element.element.indexOf(value);
        }
      });
    }
  },
  computed: {
    productStock() {
      let stock;
      this.chooseProduct.productInformation.forEach(element => {
        if (element.properties === "stock") {
          stock = element.element;
          this.updateClickCart(stock);
        }
      });

      return stock;
    }
  },
  methods: {
    activButtonMinus(value) {
      value > 1 ? (this.countMinus = "click") : (this.countMinus = null);
    },
    nonActiveButtonAdd(value) {
      value >= this.productStock
        ? (this.countPlus = null)
        : (this.countPlus = "click");
    },
    addCart(value) {
      let cartProduct = {
        idProduct: this.chooseProduct.id,
        quantity: this.paymentAmount,
        size: this.pickedSize,
        img: this.chooseProduct.img[0],
        text: this.chooseProduct.text,
        discount: this.chooseProduct.discount,
        price: this.chooseProduct.price,
        category: this.chooseProduct.category
      };
      this.updateStock(this.paymentAmount, this.chooseProduct.id);
      this.$store.dispatch("cart/pushCart", cartProduct);
    },
    updateStock(quantity, id) {
      this.$store.dispatch("dataProduct/reloadStock", {
        idProduct: id,
        quantity: quantity
      });
    },
    updateClickCart(stock) {
      stock == 0 ? (this.addToCart = null) : (this.addToCart = "click");
    }
  },
  mounted() {
    this.chooseProduct.discount == "out of stock"
      ? this.updateClickCart(0)
      : false;
  }
};
</script>

<style></style>
