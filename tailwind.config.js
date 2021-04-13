module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      // TypeScript
      "plugins/**/*.ts",
      "nuxt.config.ts"
    ]
  },
  theme: {
    extend: {
      borderWidth: ["hover", "focus"],
      colors: {
        primaryColor: "#444444",
        secondaryColor: "#00bfa5"
      },
      fontSize: {
        header: "6rem",
        mdHeader: "5rem"
      },
      spacing: {
        bigVh: "90vh",
        smVh: "95vh",
        lgVh: "50vh",
        mobileSize: "65vh",
        mdWidth: "70%",
        cardSizeXl: "24rem",
        cardSizeMd: "20rem"
      },
      backgroundImage: theme => ({
        aboutImage: "url('/assets/image/portraitFoto.jpg')"
      })
    }
  },
  variants: {},
  plugins: []
};
