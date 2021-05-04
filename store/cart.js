export default {
  state: () => ({
    cart: [
      // {
      //   idProduct: 7,
      //   quantity: 2,
      //   size: "xl",
      //   img:
      //     "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      //   text: "green collection",
      //   discount: 15,
      //   price: "20.00",
      //   category: "t-shirt collection"
      // }
    ]
  }),
  mutations: {
    addCart(state, text) {
      if (state.cart.length > 0) {
        state.cart.forEach(element => {
          if (text.idProduct == element.idProduct) {
            element.quantity = element.quantity + text.quantity;
          } else {
            state.cart.push(text);
          }
        });
      } else {
        state.cart.push(text);
      }
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
