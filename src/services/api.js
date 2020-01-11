import axios from "axios";

const https = axios.create({
  baseURL: "https://economia.awesomeapi.com.br",
  timeout: 20000
});

export default {
  getAll() {
    return https.get("/all");
  }
};
