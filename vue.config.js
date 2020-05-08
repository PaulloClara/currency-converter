const { NODE_ENV } = process.env;

module.exports = {
  publicPath: NODE_ENV === "production" ? "/conversor-de-moedas/" : "/",
  outputDir: "production/dist",
  lintOnSave: false,
  pwa: {
    name: "Conversor De Moedas",
    display: "standalone",
    themeColor: "#f7931a",
    msTileColor: "#f7931a",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#f7931a",
    manifestOptions: {
      start_url: ".",
      short_name: "ConversorM",
      description: "Conversor de Moedas.",
      background_color: "#ffdb19"
    }
  }
};
