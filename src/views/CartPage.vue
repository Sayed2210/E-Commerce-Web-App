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
          </v-col>
          <v-col cols="4">
            <h2>dhgsahfeds</h2>
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
  mounted() {
    this.getItems();
  },
};
</script>

<style lang="scss">
.v-table__wrapper {
  overflow: hidden;
}
</style>
