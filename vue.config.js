const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "/currency-converter/" : "/",
  pwa: {
    name: "Conversor de Moedas",
    display: "standalone",
    themeColor: "#ffb302",
    msTileColor: "#ffb302",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#ffb302",
    manifestOptions: {
      start_url: ".",
      short_name: "Conversor de Moedas",
      description:
        "Conversor de moedas capaz de converter várias moedas simultaneamente",
      background_color: "#ffb302",
    },
  },
});
