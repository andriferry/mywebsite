export default {
  namespaced: true,
  state: () => ({
    products: "hello"
  }),
  mutations: {
    set: (state, payload) => {}
  },
  actions: {
    trial({ commit }, value) {
      commit("trialVuex", value);
    }
  },
  getters: {
    dataProduct: state => state.products
  }
};

//this.$store.state.cart.carts;

// Jika menggunakan module (dataProduct) maka untuk mengakses data statenya adalah this.$store.state.dataProduct.products

// ...mapActions({
//       addCart  : 'cart/add',
//   }),
// Penggunaan mapActions / Atau cara melakukan push data ke state
// Cara akses getter bisa menggunakan Property-Style Access -> https://vuex.vuejs.org/guide/getters.html#property-style-access
//
// this.$store.dispatch('cart/add', this.book)
//
//
