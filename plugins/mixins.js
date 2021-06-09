import Vue from "vue";
import Vuetify from "vuetify";
import * as easings from "vuetify/es5/services/goto/easing-patterns";

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.

const option = {
  duration: 1000,
  offset: -15,
  easing: easings.easeInOutCubic
};

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true;
  Vue.mixin({
    methods: {
      clickScroll(value) {
        this.$vuetify.goTo(value, option);
      }
    },
    filters: {
      discount(price, discount) {
        let getDiscountPrice = price * (discount / 100);

        return price - getDiscountPrice;
      },
      toUsd(value) {
        let numberObject = new Number(value);
        let myObj = {
          style: "currency",
          currency: "USD"
        };

        return numberObject.toLocaleString("en-US", myObj);
      }
    },
    computed: {
      chooseProduct() {
        let product = this.$store.getters["dataProduct/product"];

        let getProduct = element => element.slug == this.$route.params.slug; // Source : https://nuxtjs.org/docs/2.x/directory-structure/pages

        return this.$store.getters["dataProduct/product"][
          product.findIndex(getProduct)
        ];
      }
    }
  }); // Set up your mixin then
}
