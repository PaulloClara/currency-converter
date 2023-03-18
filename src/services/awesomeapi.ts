import axios from "axios";

const SUPPORTED_COIN_CODES = ["USD-BRL", "EUR-BRL", "BTC-BRL"];

const axiosInstance = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/last",
  timeout: 20000,
});

type AwesomeCoinT = {
  ask: string;
  bid: string;
  code: string;
  codein: string;
  create_date: string;
  high: string;
  low: string;
  name: string;
  pctChange: string;
  timestamp: string;
  varBid: string;
};

export type CoinT = Omit<AwesomeCoinT, "low" | "high"> & {
  diff: number;
  medium: number;
  high: number;
  low: number;
};

export type CoinListT = { [code: string]: CoinT };

export default {
  async getAll() {
    const response = await axiosInstance.get<{ [code: string]: AwesomeCoinT }>(
      `/${SUPPORTED_COIN_CODES.join(",")}`
    );
    const coins: CoinListT = {};

    Object.keys(response.data).forEach((code) => {
      try {
        const awesomeCoin = response.data[code];
        const coin: CoinT = { ...awesomeCoin } as any;

        coin.low = parseFloat(awesomeCoin.low);
        coin.high = parseFloat(awesomeCoin.high);

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
      } catch (error) {
        if (process.env.NODE_ENV === "development") console.error(error);
      }
    });

    return { coins, response };
  },
};
