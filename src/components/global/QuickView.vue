<template>
  <div class="quick-view bg-white">
    <v-dialog v-model="dialog">
      <v-icon
        icon="mdi-close"
        class="close-icon"
        style="
          position: absolute;
          top: -11px;
          right: -11px;
          background-color: black;
          color: white;
          z-index: 100;
        "
        @click="dialog = false"
      ></v-icon>
      <v-card
        ><v-container fluid class="bg-white pa-10">
          <v-row>
            <v-col cols="7">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                alt=""
                height="500"
                v-if="!loading"
              />
              <v-skeleton-loader
                type="image , image, image"
                v-if="loading"
              ></v-skeleton-loader>
              <v-tabs center-active v-model="tab" height="150" v-if="!loading">
                <v-tab v-for="(img, i) in product.images" :key="i" :value="img"
                  ><img :src="img" width="100" alt=""
                /></v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5">
              <v-skeleton-loader
                type="article , image, button"
                v-if="loading"
              ></v-skeleton-loader>
              <v-card flat v-if="!loading">
                <v-card-title class="pl-0 font-weight-black"
                  >{{ product.title }} Sample - {{ product.category }} For
                  Sale</v-card-title
                >
                <v-card-text class="d-flex align-center pl-0 mb-0 pb-0">
                  <v-rating
                    v-model="product.rating"
                    color="yellow-darken-3"
                    readonly
                    size="x-small"
                    density="compact"
                    half-increments
                    class="pt-0"
                  ></v-rating>
                  <span class="mt-2 px-2">In Stock : {{ product.stock }}</span>
                </v-card-text>
                <v-card-text class="mt-0 font-weight-bold pl-0">
                  Barnd: {{ product.brand }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  {{ product.description }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  Availabilty:
                  {{ product.stock ? "In Stock" : "Out Of Stock" }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span class="text-red font-weight-bold">
                    ${{
                      Math.floor(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span>
                </v-card-text>
                <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
                <div class="counter px-1 py-3">
                  <v-icon
                    icon="mdi-minus"
                    size="22"
                    @click="quantity--"
                  ></v-icon>
                  <input
                    type="number"
                    class="text-center"
                    min="1"
                    v-model="quantity"
                  />
                  <v-icon
                    icon="mdi-plus"
                    size="22"
                    @click="quantity++"
                  ></v-icon>
                </div>
                <v-card-text>
                  Subtotal: ${{
                    Math.floor(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions class="pl-0 mt-5">
                  <v-btn
                    color="dark"
                    style="
                      background-color: black;
                      border-radius: 30px;
                      color: white;
                    "
                    class="w-75 px-5 py-1"
                    :loading="btnLoading"
                    @click="addToCart(product)"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container></v-card
      ></v-dialog
    >
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { addCartItems } from "@/store/cart";
import { mapActions } from "pinia";
export default {
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 400);
    });
  },
  methods: {
    ...mapActions(addCartItems, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  inject: ["Emitter"],
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
    dialog: false,
    product: "",
    btnLoading: false,
  }),
};
</script>

<style lang="scss">
.counter {
  width: fit-content;
  border-radius: 19px;
  border: 1px solid grey;
  input[type="number"] {
    border: none;
    outline: none;
    width: 60px;
  }
}
</style>
