import axios from "axios";

const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br",
  timeout: 20000,
});

export default {
  async all() {
    const coins = {};
    const { data: responseData } = await api.get("/all");

    Object.keys(responseData).forEach((code) => {
      const coin = responseData[code];

      coin.low = parseFloat(coin.low);
      coin.high = parseFloat(coin.high);

      coin.diff = coin.high - coin.low;
      coin.medium = (coin.high + coin.low) / 2;

      coin.create_date = globalThis.Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(coin.create_date));

      coins[code.toLowerCase()] = coin;
    });

    coins.ars.symbol = "$";
    coins.aud.symbol = "$";
    coins.btc.symbol = "₿";
    coins.cad.symbol = "$";
    coins.chf.symbol = "~";
    coins.cny.symbol = "¥";
    coins.eth.symbol = "~";
    coins.eur.symbol = "€";
    coins.gbp.symbol = "£";
    coins.ils.symbol = "₪";
    coins.jpy.symbol = "¥";
    coins.ltc.symbol = "~";
    coins.usd.symbol = "$";
    coins.usdt.symbol = "$";
    coins.xrp.symbol = "~";

    return coins;
  },
};
