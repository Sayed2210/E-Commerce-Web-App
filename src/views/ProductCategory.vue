<template>
  <div class="product-category py-5">
    <h2 class="text-center font-weight-bold">{{ $route.params.title }}</h2>
    <v-container>
      <v-card flat :loading="loading" class="pt-5">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader
              type="image, article , button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="3"
            v-for="item in categoriesProducts.products"
            :key="item.id"
          >
            <v-card elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div class="img-parent" style="height: 150px">
                  <img
                    :src="
                      showItem[item.title]
                        ? showItem[item.title]
                        : item.thumbnail
                    "
                    alt=""
                    :style="`height: 100%;transition: 0.3s all ease-in-out; scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                    v-bind="props"
                  />
                </div>
              </v-hover>
              <v-card-text class="pl-0 pb-1">
                {{ item.title }} -
                {{
                  item.description + " " + item.title.split(" ").length <= 5
                    ? item.description
                    : item.description
                        .split(" ")
                        .slice(0, 6 - item.title.split(" ").length)
                        .join(" ") + "..."
                }}
              </v-card-text>
              <v-rating
                v-model="item.rating"
                color="yellow-darken-3"
                readonly
                size="x-small"
                density="compact"
                half-increments
                class="pt-0"
              ></v-rating>
              <v-card-text class="pl-0 pt-0">
                <del>${{ item.price }}</del> From
                <span class="text-red font-weight-bold">
                  ${{
                    Math.floor(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}
                </span>
              </v-card-text>
              <v-btn-toggle v-model="showItem[item.title]">
                <v-btn
                  class="pa-1"
                  height="fit-content"
                  v-for="(pic, i) in item.images"
                  :key="i"
                  size="x-small"
                  rounded="xl"
                  :value="pic"
                >
                  <img
                    :src="pic"
                    alt=""
                    width="30"
                    height="30"
                    class="rounded-circle"
                  />
                </v-btn>
              </v-btn-toggle>
              <v-card-action>
                <v-btn
                  class="py-1 px-12 rounded-pill"
                  variant="outlined"
                  density="compact"
                >
                  Choose Product
                </v-btn>
              </v-card-action>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    showItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productModule, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productModule, ["categoriesProducts"]),
  },
  watch: {
    async $route() {
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>