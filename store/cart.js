export default {
  state: () => ({
    cart: []
  }),
  mutations: {
    addCart(state, text) {
      state.cart.push(text); // Cara menambahkan secara push array
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
