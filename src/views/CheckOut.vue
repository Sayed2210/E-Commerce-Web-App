<template>
  <div class="check-out pa-0">
    <v-container fluid class="pa-0">
      <v-row class="align-stretch">
        <v-col cols="7">
          <v-card flat class="pl-15 py-10">
            <v-card-title class="font-weight-bold">New Ella Shop</v-card-title>
            <v-breadcrumbs
              :items="['Home', 'Checkout']"
              style="font-size: 14px"
            >
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right" class="px-0"></v-icon>
              </template>
            </v-breadcrumbs>
            <v-card-text class="text-center">Express checkout</v-card-text>
            <div
              class="express-checkout d-flex align-center justify-space-between mb-5"
              style="gap: 15px"
            >
              <v-btn color="#5A31F4" height="45" class="w-50"
                ><svg
                  class="icon icon--full-color"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                  aria-labelledby="pi-shopify_pay"
                >
                  <title id="pi-shopify_pay">Shop Pay</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                    fill="#000"
                  ></path>
                  <path
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                    fill="#5A31F4"
                  ></path>
                  <path
                    d="M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.12.08.127.127 0 00-.01.049v2.192a.129.129 0 01-.13.129h-1.084a.13.13 0 01-.13-.13V6.986a.127.127 0 01.08-.12.129.129 0 01.05-.01h2.9c1.637 0 2.814 1.19 2.814 2.858v-.001zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.127.127 0 00.038.092.129.129 0 00.092.038h1.468c.892.005 1.55-.695 1.55-1.652zm1.674 3.791a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.125.125 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.1.1 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zm2.316 4.6v-.919a.13.13 0 01.049-.1.132.132 0 01.108-.027c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.06-.165.13.13 0 01.062-.015h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.134.134 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.959 1.959 0 01-.561-.066.132.132 0 01-.1-.14h.001zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.362.028 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034 3.43 3.43 0 00-.942 1.183 3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z"
                    fill="#fff"
                  ></path></svg
              ></v-btn>
              <v-btn color="black" height="45" class="w-50"
                ><svg width="41" height="17" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zm7.668 2.287c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568m11.853.262l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"
                      fill="#FFF"
                    />
                    <path
                      d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"
                      fill="#4285F4"
                    />
                    <path
                      d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703"
                      fill="#34A853"
                    />
                    <path
                      d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z"
                      fill="#FABB05"
                    />
                    <path
                      d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"
                      fill="#E94235"
                    />
                  </g></svg
              ></v-btn>
            </div>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <div class="ship-address mt-5 px-0">
              <v-card-title class="font-weight-bold px-0"
                >Shipping Address</v-card-title
              >
              <div class="select">
                <select
                  class="pa-3 w-100"
                  style="border: 1px solid #ccc; border-radius: 7px"
                >
                  <option v-for="city in cities" :key="city" :value="city">
                    {{ state }}
                  </option>
                </select>
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                class="w-50 py-3 px-3 my-2 mr-3"
                style="
                  border-radius: 7px;
                  border: 1px solid #ccc;
                  outline: none;
                  width: 48%;
                "
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                class="py-3 px-3 my-2"
                style="
                  border-radius: 7px;
                  border: 1px solid #ccc;
                  outline: none;
                  width: 48%;
                "
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Address"
                class="py-3 px-3 my-2 w-100"
                style="
                  border-radius: 7px;
                  border: 1px solid #ccc;
                  outline: none;
                "
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Apartment, suite , etc"
                class="py-3 px-3 my-2 w-100"
                style="
                  border-radius: 7px;
                  border: 1px solid #ccc;
                  outline: none;
                "
              />
              <div class="d-flex align-center" style="gap: 10px">
                <div class="select" style="flex-basis: 33%">
                  <select
                    class="pa-3 w-100"
                    style="border: 1px solid #ccc; border-radius: 7px"
                  >
                    <option v-for="state in states" :key="state" :value="state">
                      {{ state }}
                    </option>
                  </select>
                </div>
                <div class="select" style="flex-basis: 33%">
                  <select
                    class="pa-3 w-100"
                    style="border: 1px solid #ccc; border-radius: 7px"
                  >
                    <option v-for="city in cities" :key="city" :value="city">
                      {{ city }}
                    </option>
                  </select>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Postal Code"
                  class="py-3 px-3 my-2 w-100"
                  style="
                    border-radius: 7px;
                    border: 1px solid #ccc;
                    outline: none;
                    flex-basis: 33%;
                  "
                />
              </div>
              <v-card-actions class="justify-end mt-7">
                <v-btn
                  color="#1677b0"
                  height="45"
                  variant="elevated"
                  style="color: white"
                  width="250"
                  @click="dialog = true"
                  >Submit Your Order</v-btn
                >
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card
            flat
            color="grey-lighten-3"
            class="pa-5 pr-15 py-15"
            width="100%"
            height="100%"
          >
            <v-card
              flat
              v-for="item in cartItems"
              :key="item.id"
              color="transparent"
              class="d-flex align-center justify-space-between mb-3 py-0"
            >
              <v-badge :content="item.quantity" color="grey-darken-1">
                <img :src="item.thumbnail" alt="" width="50" height="50" />
              </v-badge>
              <div class="card-title flex-grow-1">
                <v-card-title
                  style="
                    font-size: 14px;
                    white-space: pre-wrap;
                    line-height: 1.2;
                  "
                  class="font-weight-bold"
                  >{{ item.title }} - Sample {{ item.category }}</v-card-title
                >
                <v-card-text style="color: #777">{{
                  item.category
                }}</v-card-text>
              </div>
              <v-card-text
                class="flex-grow-0 ml-auto pa-0"
                style="font-size: 16px; color: #777"
                >${{
                  item.quantity *
                  Math.floor(
                    item.price - item.price * (item.discountPercentage / 100)
                  )
                }}</v-card-text
              >
            </v-card>
            <v-divider color="black"></v-divider>
            <v-divider color="black"></v-divider>
            <div
              class="subtotal d-flex align-center justify-space-between py-3"
            >
              <span style="color: #777">Subtotal</span>
              <span class="font-weight-bold">${{ calcTotal }}</span>
            </div>
            <div
              class="shipping d-flex align-center justify-space-between mb-3"
            >
              <span style="color: #777">Shipping</span>
              <span class="font-weight-bold">$20</span>
            </div>
            <div class="total d-flex align-center justify-space-between">
              <span style="color: #777">Total</span>
              <span class="font-weight-bold">${{ calcTotal + 20 }}</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <OrderPopup :popup="dialog" v-if="dialog" @close_popup="dialog = false" />
  </div>
</template>

<script>
import { addCartItems } from "@/store/cart";
import { mapState } from "pinia";
import OrderPopup from "@/components/order_success/OrderPopup";
export default {
  components: { OrderPopup },
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
    dialog: false,
  }),
};
</script>
