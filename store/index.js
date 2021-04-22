import Vue from "vue";
import Vuex from "vuex";
import dataProduct from "@/store/dataProduct";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dataProduct
  }
});
