const { NODE_ENV } = process.env;

module.exports = {
  publicPath: NODE_ENV === "production" ? "/conversor-de-moedas/" : "/",
  lintOnSave: false
};
