import axios from "axios";

const https = axios.create({
  baseURL: "https://economia.awesomeapi.com.br",
  timeout: 20000
});

export default {
  async getAll() {
    const coins = {};
    const { data: responseData } = await https.get("/all");

    Object.keys(responseData).forEach(code => {
      const coin = responseData[code];

      coin.low = parseFloat(coin.low);
      coin.high = parseFloat(coin.high);

      coin.diff = coin.high - coin.low;
      coin.medium = (coin.high + coin.low) / 2;

      coin.create_date = new Date(coin.create_date);

      coins[code.toLowerCase()] = coin;
    });

    return coins;
  }
};
