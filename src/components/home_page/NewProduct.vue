<template>
  <div class="new-product py-8">
    <div class="title d-flex align-center justify-space-between mb-4">
      <h1 class="text-black font-weight-bold">New Products</h1>
      <router-link
        class="text-black"
        :to="{
          name: 'products-category',
          query: {
            title: categories[index].title,
            category: categories[index].route,
          },
        }"
        >Shop All</router-link
      >
    </div>
    <v-container fluid>
      <v-row class="align-start">
        <v-col cols="12" sm="8" md="7" class="pt-12">
          <Swiper
            :pagination="{ clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="15"
            autoplay
            :breakpoints="breakPionts"
            class="pb-14"
          >
            <swiper-slide v-for="item in products" :key="item.id">
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
                    <v-btn
                      class="quick-view bg-white position-absoulte px-2 py-1"
                      variant="outlined"
                      density="compact"
                      @click="openQuickView(item)"
                      >Qiuck view</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-text class="pl-0 pb-1">
                  {{ item.title }} -
                  {{
                    item.description + " " + item.title.split(" ").length <= 5
                      ? item.description
                      : item.description
                          .split(" ")
                          .slice(0, 5 - item.title.split(" ").length)
                          .join(" ") + " ..."
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
                        item.price -
                          item.price * (item.discountPercentage / 100)
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
                <v-card-action class="d-flex justify-center justify-sm-start">
                  <v-btn
                    class="py-1 px-9 rounded-pill"
                    variant="outlined"
                    density="compact"
                    @click="
                      $router.push({
                        name: 'products-page',
                        params: { productId: item.id },
                      })
                    "
                  >
                    Choose Product
                  </v-btn>
                </v-card-action>
              </v-card>
            </swiper-slide>
          </Swiper>
        </v-col>
        <v-col cols="12" sm="4" md="5">
          <img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { productModule } from "@/store/products";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productModule, ["categories"]),
  },
  components: {
    SwiperSlide,
    Swiper,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  props: {
    products: {
      type: Array,
    },
    index: {
      type: Number,
    },
  },
  data: () => ({
    showItem: {},
    breakPionts: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      990: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  }),
};
</script>

<style lang="scss">
.img-parent {
  &:hover {
    .quick-view {
      opacity: 1;
    }
  }
  height: 200px;
  overflow: hidden;
  position: relative;
  .quick-view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    transition: 0.3s;
    opacity: 0;
  }
}
@media (max-width: 768px) {
  .swiper {
    .img-parent {
      width: 100%;
      height: 280px !important;
      img {
        width: 100%;
      }
    }
  }
}
</style>
