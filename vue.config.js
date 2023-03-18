const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pwa: {
    name: "Currency Converter",
    display: "standalone",
    themeColor: "#f7931a",
    msTileColor: "#f7931a",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#f7931a",
    manifestOptions: {
      start_url: ".",
      short_name: "Currency",
      description: "Currency Converter.",
      background_color: "#ffdb19",
    },
  },
});
