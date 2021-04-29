export default {
  state: () => ({
    cart: [
      {
        idProduct: 7,
        quantity: 1,
        size: "xl",
        img:
          "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        text: "green collection",
        discount: 15,
        price: "20.00",
        category: "t-shirt collection",
        paymount: 1
      }
    ]
  }),
  mutations: {
    addCart(state, text) {
      state.cart.push(text); // Cara menambahkan secara push array
      console.log(text);
    }
  },
  actions: {
    pushCart({ commit }, value) {
      commit("addCart", value);
    }
  },
  getters: {
    carts: state => state.cart
  }
};
