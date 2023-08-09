import { defineStore } from "pinia";
import axios from "axios";

export const productModule = defineStore("productModule", {
  state: () => ({
    flashDeal: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/docs/products")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
  },
});
