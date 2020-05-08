import axios from "axios";

const https = axios.create({
  baseURL: "https://economia.awesomeapi.com.br",
  timeout: 20000
});

export default {
  async getAll() {
    const { data: responseData } = await https.get("/all");

    const coins = [];
    const masterCoins = {};

    Object.keys(responseData).forEach(code => {
      const coin = responseData[code];

      coin.low = parseFloat(coin.low);
      coin.high = parseFloat(coin.high);
      coin.medium = (coin.high + coin.low) / 2;

      coins.push(coin);
    });

    coins.forEach(coin => {
      if (["USD", "EUR"].includes(coin.code) && !masterCoins[coin.code])
        masterCoins[coin.code] = coin;
    });

    return { coins, masterCoins };
  }
};
