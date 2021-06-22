export default {
  namespaced: true,
  state: () => ({
    products: [
      {
        img: ["nikered.webp"],
        id: 28,
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
          { properties: "color", element: ["bg-red-500"] },
          { properties: "stock", element: 10 }
        ]
      },
      {
        img: ["vintatravelbag.webp"],
        id: 45,
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
        img: ["saturdaycap.webp"],
        id: 56,
        text: "saturdays cap",
        price: "25.00",
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
        img: ["classicwhite.webp"],
        id: 70,
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
        img: ["uvsunglass.webp"],
        id: 10,
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
        img: ["minimalistwatch.webp"],
        id: 8,
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
        img: ["blacktotebag.webp"],
        id: 2,
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
        img: ["classicgreen1.webp", "classicgreen2.webp", "classicgreen3.webp"],
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
    dataPortfolio: [
      {
        image: "formValidation.webp",
        title: "form validation",
        textColor: "text-primaryColor",
        link: "/portfolio/Formvalidation"
      },
      {
        image: "movieTicket.webp",
        title: "movie ticket",
        textColor: "text-primaryColor",
        link: "/portfolio/Moviebooking"
      },
      {
        image: "clothing.webp",
        title: "clothing store",
        textColor: "text-primaryColor",
        link: "/portfolio/Clothing"
      }
    ]
  }),
  mutations: {
    updateStock: (state, payload) => {
      state.products.forEach(element => {
        element.productInformation.forEach(properties => {
          properties.properties == "stock"
            ? (properties.element = properties.element - payload.quantity)
            : false;
        });
      });
    }
  },
  actions: {
    addCart({ commit }, value) {
      commit("pushCart", value);
    },
    reloadStock({ commit }, value) {
      commit("updateStock", value);
    }
  },
  getters: {
    product: state => state.products,
    portfolio: state => state.dataPortfolio
  }
};
