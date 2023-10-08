<template>
  <div class="singleProduct-page py-6">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            alt=""
            height="500"
            v-if="!loading"
          />
          <v-skeleton-loader
            type="image , image, image"
            v-if="loading"
          ></v-skeleton-loader>
          <v-tabs center-active v-model="tab" height="150">
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              :value="img"
              ><img :src="img" width="100" alt=""
            /></v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5">
          <v-skeleton-loader
            type="article , image, button"
            v-if="loading"
          ></v-skeleton-loader>
          <v-card flat v-if="!loading">
            <v-card-title class="pl-0 font-weight-black"
              >{{ singleProduct.title }} Sample -
              {{ singleProduct.category }} For Sale</v-card-title
            >
            <v-card-text class="d-flex align-center pl-0 mb-0 pb-0">
              <v-rating
                v-model="singleProduct.rating"
                color="yellow-darken-3"
                readonly
                size="x-small"
                density="compact"
                half-increments
                class="pt-0"
              ></v-rating>
              <span class="mt-2 px-2"
                >In Stock : {{ singleProduct.stock }}</span
              >
            </v-card-text>
            <v-card-text class="mt-0 font-weight-bold pl-0">
              Barnd: {{ singleProduct.brand }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              {{ singleProduct.description }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              Availabilty:
              {{ singleProduct.stock ? "In Stock" : "Out Of Stock" }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <del>${{ singleProduct.price }}</del> From
              <span class="text-red font-weight-bold">
                ${{
                  Math.floor(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  )
                }}
              </span>
            </v-card-text>
            <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
            <div class="counter px-1 py-3">
              <v-icon icon="mdi-minus" size="22" @click="quantity--"></v-icon>
              <input
                type="number"
                class="text-center"
                min="1"
                v-model="quantity"
              />
              <v-icon icon="mdi-plus" size="22" @click="quantity++"></v-icon>
            </div>
            <v-card-text>
              Subtotal: ${{
                Math.floor(
                  singleProduct.price -
                    singleProduct.price *
                      (singleProduct.discountPercentage / 100)
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
                @click="addToCart(singleProduct)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { addCartItems } from "@/store/cart";
export default {
  inject: ["Emitter"],
  async mounted() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
  },
  methods: {
    ...mapActions(productModule, ["getSingleProduct"]),
    ...mapActions(addCartItems, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
      }, 1000);
    },
  },
  computed: {
    ...mapState(productModule, ["singleProduct"]),
  },
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
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
