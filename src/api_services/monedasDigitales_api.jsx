import React from "react";
import axios from "axios";

export default function monedasDigitales_api() {
  return axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .catch((err) => console.log(`ah ocurrido un error:${err}`));
}
