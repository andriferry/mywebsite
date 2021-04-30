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
        category: "sneaker collection",
        slug: "nike-red-edition",
        productInformation: [
          { properties: "50.00", element: "Free delivery" },
          { properties: "SKU", element: "st-644783" },
          {
            properties: "category",
            element: ["sneaker"]
          },
          { properties: "color", element: ["bg-red-200"] },
          { properties: "stock", element: 10 }
        ]
      },
      {
        img: [
          "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        ],
        text: "vinta travel bags",
        price: "30.00",
        discount: 50,
        category: "bags collection",
        slug: "vinta-travel-bags",
        productInformation: [
          { properties: "30.00", element: "Free delivery" },
          { properties: "SKU", element: "st-47893" },
          {
            properties: "category",
            element: ["bags"]
          },
          { properties: "color", element: ["bg-green-500"] },
          { properties: "stock", element: 10 }
        ]
      },
      {
        img: [
          "https://images.unsplash.com/photo-1539963011628-c076c7870cad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60"
        ],
        text: "saturdays cap",
        price: "20.00",
        discount: "out of stock",
        category: "caps collection",
        slug: "saturdays-cap",
        productInformation: [
          { properties: "25.00", element: "Free delivery" },
          { properties: "SKU", element: "st-4744838" },
          {
            properties: "category",
            element: ["caps"]
          },
          { properties: "color", element: ["bg-blue-500"] },
          { properties: "stock", element: 10 }
        ]
      },
      {
        img: [
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
        ],
        text: "classic white",
        price: "10.00",
        discount: 20,
        category: "t-shirt collection",
        slug: "classic-white",
        productInformation: [
          { properties: "10.00", element: "Free delivery" },
          { properties: "SKU", element: "st-74783" },
          {
            properties: "category",
            element: ["t-shirt"]
          },
          { properties: "color", element: ["bg-white"] },
          { properties: "stock", element: 10 }
        ]
      },
      {
        img: [
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        ],
        text: "UV protector sunglass",
        price: "25.00",
        category: "eyewear",
        slug: "uv-protector-sunglass",
        productInformation: [
          { properties: "25.00", element: "Free delivery" },
          { properties: "SKU", element: "st-4744838" },
          {
            properties: "category",
            element: ["eyewear"]
          },
          { properties: "color", element: ["bg-black"] },
          { properties: "stock", element: 10 }
        ]
      },
      {
        img: [
          "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
        ],
        text: "minimalist watch",
        price: "50.00",
        discount: "out of stock",
        category: "watch",
        slug: "minimalist-watch",
        productInformation: [
          { properties: "50.00", element: "Free delivery" },
          { properties: "SKU", element: "st-2872864" },
          {
            properties: "category",
            element: ["watch"]
          },
          { properties: "color", element: ["bg-green-500"] },
          { properties: "stock", element: 10 }
        ]
      },
      {
        img: [
          "https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60"
        ],
        text: "black hoope totebag",
        price: "20.00",
        slug: "black-hoope-totebag",
        category: "bags collection",
        productInformation: [
          { properties: "20.00", element: "Free delivery" },
          { properties: "SKU", element: "st-599326" },
          {
            properties: "category",
            element: ["bags"]
          },
          { properties: "color", element: ["bg-black"] },
          { properties: "stock", element: 10 }
        ]
      },
      {
        id: 7,
        img: [
          "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          "https://images.unsplash.com/photo-1523380677598-64d85d015339?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        ],
        text: "classic green",
        price: "20.00",
        slug: "classic-green",
        discount: 15,
        category: "t-shirt collection",
        productInformation: [
          { properties: "20.00", element: "Free delivery" },
          { properties: "SKU", element: "st-12526" },
          {
            properties: "category",
            element: ["t-shirt", "new arrivals"]
          },
          { properties: "size", element: ["xs", "s", "l", "xl"] },
          { properties: "color", element: ["bg-secondaryColor"] },
          { properties: "stock", element: 10 }
        ]
      }
    ],
    cart: []
  }),
  mutations: {
    updateStock: (state, payload) => {
      state.products.forEach(element => {
        if (element.productInformation) {
          element.productInformation.forEach(element => {
            if (element.properties == "stock") {
              element.element = element.element - payload.quantity;
              console.log(element);
              console.log(payload.quantity, element.properties);
            }
          });
        }
      });
    }
  },
  actions: {
    addCart({ commit }, value) {
      commit("pushCart", value);
    },
    reloadStock({ commit }, value) {
      commit("updateStock", value);

      // { idProduct: 7, quantity: 1 }
    }
  },
  getters: {
    product: state => state.products
  }
};
