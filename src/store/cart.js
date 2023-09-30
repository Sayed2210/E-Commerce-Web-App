import { defineStore } from "pinia";

export const addCartItems = defineStore("addCartItems", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItem(item) {
      let exsits = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == item.id) {
          this.cartItems[i].quantity += item.quantity;
          exsits = true;
          break;
        }
      }
      if (!exsits) {
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
      console.log(this.cartItems);
    },
    getItems() {
      if (localStorage.getItem("cart-items")) {
        this.cartItems = JSON.parse(localStorage.getItem("cart-items"));
      }
      console.log(this.cartItems);
    },
    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == id) {
          this.cartItems.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    setToLocalStorage() {
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    resetItems() {
      this.cartItems = [];
      localStorage.removeItem("cart-items");
    },
  },
});
