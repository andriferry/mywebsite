export default {
  state: () => ({
    cart: "hello233"
  }),
  mutations: {
    add(state, text) {
      state.cart = text;
    }
  },
  actions: {
    addData({ commit }, value) {
      commit("add", value);
    }
  },
  getters: {
    carts: state => state.cart
  }
};
