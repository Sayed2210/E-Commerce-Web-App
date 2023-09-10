import { defineStore } from "pinia";
import axios from "axios";

export const productModule = defineStore("productModule", {
  state: () => ({
    flashDeals: [],
    newProduct: [],
    mobilePhones: [],
    fragrances: [],
    groceries: [],
    categoriesProducts: [],
    categories: [
      {
        title: "Smartphones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Womens Dresses",
        route: "womens-dresses",
      },
      {
        title: "Womens Shoes",
        route: "womens-shoes",
      },
      {
        title: "Mens Shirts",
        route: "mens-shirts",
      },
      {
        title: "Mens Shoes",
        route: "mens-shoes",
      },
      {
        title: "Sunglasses",
        route: "sunglasses",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProduct = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.flashDeals = res.data.products.slice(0, 8);
          this.mobilePhones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.groceries = res.data.products.filter(
            (el) => el.category === "groceries"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoriesProducts = res.data));
    },
  },
});
