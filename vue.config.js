const { NODE_ENV } = process.env;

module.exports = {
  publicPath: NODE_ENV === "production" ? "/currency-converter/" : "/",
  outputDir: "production/dist",
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
      short_name: "CConverter",
      description: "Currency Converter.",
      background_color: "#ffdb19",
    },
  },
};
