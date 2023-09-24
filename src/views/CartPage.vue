<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="px-0 py-0 mb-0" size="small">
          <v-breadcrumbs :items="['Home', 'Your Cart']" style="font-size: 14px">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right" class="px-0"></v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" class="mt-0 py-0">
          <v-card-title class="font-weight-bold py-0"> Your Cart </v-card-title>
        </v-col>
        <v-col cols="12" class="mt-0 py-0">
          <div
            class="progress-bar px-4 mt-6 position-relative py-0"
            v-if="cartItems.length"
          >
            <svg
              class="icon-shipping-truck"
              viewBox="0 0 40.55 24"
              width="30"
              :style="`position: absolute;
          bottom: 50%;
          z-index: 1;
          left: calc(${
            parseInt((calcTotal / 10000) * 100) <= 100
              ? parseInt((calcTotal / 10000) * 100)
              : 100
          }% - 30px);
          transition: 0.2s all ease-in-out`"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="truck-body"
                    fill="red"
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                  ></path>
                  <path
                    class="truck-body"
                    fill="red"
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                  ></path>
                </g>
              </g>
            </svg>
            <v-progress-linear
              color="red"
              height="8"
              striped
              :model-value="parseInt((calcTotal / 10000) * 100)"
            ></v-progress-linear>
          </div>
          <v-card-text
            v-if="cartItems.length && 10000 - calcTotal > 0"
            class="font-weight-thin text-medium-emphasis text-center"
            >Only ${{ 10000 - calcTotal }} away from Free Shipping</v-card-text
          >
          <v-card-text
            v-if="cartItems.length && 10000 - calcTotal <= 0"
            class="font-weight-thin text-medium-emphasis text-center"
            >Your order is included Free Shipping</v-card-text
          >
        </v-col>
        <v-row class="align-start">
          <v-col cols="8">
            <v-table class="w-100">
              <thead>
                <tr style="background-color: #e9e9e9">
                  <th class="font-weight-bold text-start">PRODUCT</th>
                  <th class="font-weight-bold text-center">PRICE</th>
                  <th class="font-weight-bold text-center">QUANTITY</th>
                  <th class="font-weight-bold text-center">TOTAl</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.id" class="py-4">
                  <td style="width: 55%" class="text-start py-6">
                    <v-row>
                      <v-col cols="5">
                        <img :src="item.thumbnail" class="w-100" alt="" />
                      </v-col>
                      <v-col cols="7">
                        <v-card-text
                          class="pl-0 pt-0"
                          style="
                            white-space: pre-wrap;
                            font-size: 14px;
                            line-height: 1.2;
                          "
                        >
                          {{ item.title }} Sample - {{ item.category }}
                        </v-card-text>
                        <v-card-text class="pl-0 pt-0 text-medium-emphasis"
                          >Catogery: {{ item.category }}</v-card-text
                        ></v-col
                      >
                    </v-row>
                  </td>
                  <td style="width: 15%" class="text-center py-6">
                    ${{
                      Math.floor(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}
                  </td>
                  <td style="width: 15%" class="text-center py-6">
                    <div
                      class="item-counter d-flex justify-space-between align-center"
                    >
                      <div class="counter text-center w-75">
                        <v-icon
                          icon="mdi-plus"
                          size="16"
                          @click="item.quantity++"
                        ></v-icon>
                        <input
                          type="number"
                          class="text-center"
                          min="1"
                          v-model="item.quantity"
                        />
                        <v-icon
                          icon="mdi-minus"
                          size="16"
                          @click="item.quantity--"
                        ></v-icon>
                      </div>
                    </div>
                  </td>
                  <td style="width: 15%" class="text-center py-6">
                    ${{
                      item.quantity *
                      Math.floor(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}
                  </td>
                  <td style="width: 15%" class="text-center py-6">
                    <v-icon
                      icon="mdi-close"
                      @click="deleteItem(item.id)"
                    ></v-icon>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <v-row>
              <v-col cols="12" class="d-flex align-center">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 179.94 179.96"
                  class="icon icon-shield-check"
                  width="30"
                >
                  <path
                    d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
                  ></path>
                  <polygon
                    fill="white"
                    class="cls-1"
                    points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
                  ></polygon>
                </svg>
                <p class="ml-2 text-medium-emphasis">
                  Secure Shopping Guarantee
                </p>
              </v-col>
              <v-col cols="12">
                <img
                  src="@/assets/images/cart-page-cards.webp"
                  class="w-50"
                  alt=""
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <h3 class="font-weight-bold mb-2">Order summary</h3>
            <v-divider class="border-opacity-100" color="dark"></v-divider>
            <v-divider class="border-opacity-100" color="dark"></v-divider>
            <v-divider class="border-opacity-100" color="dark"></v-divider>
            <v-divider class="border-opacity-100" color="dark"></v-divider>
            <div
              class="subtotal d-flex align-center py-5 justify-space-between"
            >
              <h5>Subtotal</h5>
              <h3>${{ calcTotal }}</h3>
            </div>
            <v-divider></v-divider>
            <h4 class="font-weight-bold mb-2 mt-3 text-medium-emphasis">
              Get Shipping Estimate:
            </h4>
            <div class="shipping py-5">
              <div class="select">
                <select
                  class="w-100 pa-2 mb-4"
                  style="border: 1px solid #ccc; border-radius: 18px"
                >
                  <option v-for="city in cities" :key="city" :value="city">
                    {{ city }}
                  </option>
                </select>
                <v-icon icon="mdi-chevron-down select-icon"></v-icon>
              </div>
              <v-row>
                <v-col cols="8">
                  <div class="select">
                    <select
                      class="pa-2 w-100"
                      style="border: 1px solid #ccc; border-radius: 18px"
                    >
                      <option
                        v-for="state in states"
                        :key="state"
                        :value="state"
                      >
                        {{ state }}
                      </option>
                    </select>
                    <v-icon icon="mdi-chevron-down select-icon"></v-icon>
                  </div>
                </v-col>
                <v-col cols="4"
                  ><input
                    type="text"
                    placeholder="Postal Code"
                    class="pa-2 w-100"
                    style="border: 1px solid #ccc; border-radius: 18px"
                /></v-col>
              </v-row>
              <v-btn
                v-if="cartItems.length"
                height="50"
                density="compact"
                style="border-radius: 30px"
                class="mt-5 w-100"
                variant="elevated"
                color="blue"
                >Calculate Shipping</v-btn
              >
            </div>
            <v-divider></v-divider>
            <h4 class="font-weight-bold mb-2 mt-3">Coupon Code :</h4>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Coupon"
              class="w-100 py-3 px-3 my-2"
              style="border-radius: 18px; border: 1px solid #ccc; outline: none"
            />
            <p class="text-medium-emphasis my-2">
              Coupon Will Be Applied on the checkout page
            </p>
            <v-divider></v-divider>
            <div class="total d-flex align-center justify-space-between py-5">
              <h4>Total</h4>
              <h4>${{ calcTotal }}</h4>
            </div>
            <v-divider></v-divider>
            <p class="text-medium-emphasis mt-4">
              Tax Included and Shipping calculte at checkout
            </p>
            <div class="my-2">
              <input type="checkbox" name="" id="tax" class="mr-2" />
              <label for="tax">I Agree With Terms & conditions</label>
            </div>
            <v-btn
              v-if="cartItems.length"
              height="50"
              density="compact"
              class="mt-2 w-100"
              variant="elevated"
              color="blue"
              >Proceed to Checkout</v-btn
            >
            <v-btn
              v-if="cartItems.length"
              height="50"
              density="compact"
              class="mt-2 w-100"
              variant="outlined"
              @click="$router.push({ name: 'home' })"
              >Continue Shipping</v-btn
            >
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { addCartItems } from "@/store/cart";
import { mapActions, mapState } from "pinia";
export default {
  methods: {
    ...mapActions(addCartItems, ["getItems", "deleteItem"]),
  },
  computed: {
    ...mapState(addCartItems, ["cartItems"]),
    calcTotal() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          product.quantity *
          Math.floor(
            product.price - product.price * (product.discountPercentage / 100)
          );
      });
      return total;
    },
  },
  data: () => ({
    cities: ["Cario", "Alex", "Mansoura", "Aswan", "Tanta"],
    states: ["Maadi", "Zed", "Badr City", "Nasr City"],
  }),
  mounted() {
    this.getItems();
  },
};
</script>

<style lang="scss">
.v-table__wrapper {
  overflow: hidden;
}
.select {
  position: relative;
  .select-icon {
    position: absolute;
    right: 10px;
    top: 18%;
  }
}
</style>
