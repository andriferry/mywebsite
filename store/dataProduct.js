export default {
  namespaced: true,
  state: () => ({
    products: [
      {
        img: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        ],
        text: "nike red edition",
        price: "50.00",
        discount: 10,
        category: "sneaker collection"
      },
      {
        img: [
          "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        ],
        text: "vinta travel bags",
        price: "30.00",
        discount: 50,
        category: "bags collection"
      },
      {
        img: [
          "https://images.unsplash.com/photo-1539963011628-c076c7870cad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60"
        ],
        text: "saturdays cap",
        price: "20.00",
        discount: "out of stock",
        category: "caps collection"
      },
      {
        img: [
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
        ],
        text: "classic white",
        price: "10.00",
        discount: 20,
        category: "t-shirt collection"
      },
      {
        img: [
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        ],
        text: "UV protector sunglass",
        price: "25.00",
        category: "eyewear"
      },
      {
        img: [
          "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
        ],
        text: "minimalist watch",
        price: "50.00",
        discount: "out of stock",
        category: "watch"
      },
      {
        img: [
          "https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60"
        ],
        text: "black hoope totebag",
        price: "20.00"
      },
      {
        img: [
          "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          "https://images.unsplash.com/photo-1523380677598-64d85d015339?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        ],

        text: "classic green",
        price: "20.00",
        discount: 15,
        category: "t-shirt collection"
      }
    ],
    cart: []
  }),
  mutations: {
    set: (state, payload) => {},
    pushCart: (state, payload) => {}
  },
  actions: {
    trial({ commit }, value) {
      commit("trialVuex", value);
    },
    addCart({ commit }, value) {
      commit("pushCart", value);
    }
  },
  getters: {
    product: state => state.products,
    carts: state => state.cart
  }
};

//this.$store.state.cart.carts;
// this.$store.getters.dataProduct.products
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
