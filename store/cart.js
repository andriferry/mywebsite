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
    insert: (state, payload) => {
      state.cart.push({
        id: payload.id,
        title: payload.title,
        img: payload.img,
        price: payload.price,
        quantity: payload.quantity
      });
    },
    update: (state, payload) => {
      let idx = state.cart.indexOf(payload.cart);

      let getProduct = state.cart.find(item => item.id === payload.product.id);

      let product = getProduct;
      product.quantity = product.quantity + payload.product.quantity;

      state.cart.splice(idx, 1, {
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        quantity: product.quantity
      });
    },
    set: (state, payload) => {
      state.cart = payload;
    }
  },
  actions: {
    add: ({ state, commit }, payload) => {
      let cartItem = state.cart.find(item => item.id === payload.id);

      !cartItem
        ? commit("insert", payload)
        : commit("update", { cart: cartItem, product: payload });
    },
    remove: ({ state, commit }, payload) => {
      let cartItem = state.cart.find(item => item.id === payload.id);

      if (cartItem) {
        cartItem.quantity--;
        commit("update", cartItem);
      }
    },
    set: ({ commit, payload }) => {
      commit("set", payload);
    }
  },
  getters: {
    carts: state => state.cart,
    count: state => {
      return state.cart.length;
    },
    // Count total price
    totalPrice: state => {
      let total = 0;
      state.cart.forEach(cart => {
        total += cart.price * cart.quantity;
      });
      return total;
    },
    // Count Total quantity
    totalQuantity: state => {
      let total = 0;
      state.cart.forEach(cart => {
        total += cart.quantity;
      });
      return total;
    }
  }
};
