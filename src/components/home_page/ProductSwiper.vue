<template>
  <div class="flash-deals py-16 px-6">
    <div class="title d-flex align-center justify-space-between mb-8">
      <h1 :class="[`text-${titleColor}`]">
        {{ title }}
      </h1>
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
      <v-row>
        <v-col cols="12" v-if="!products.length">
          <v-row
            ><v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article , button"
              ></v-skeleton-loader> </v-col
          ></v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      navigation
      :loop="true"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :breakpoints="breakPionts"
      class="pb-14"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent position-relative">
              <img
                :src="
                  showItem[item.title] ? showItem[item.title] : item.thumbnail
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
                    .slice(0, 8 - item.title.split(" ").length)
                    .join(" ")
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
          <v-btn-toggle v-model="showItem[item.title]" mandatory>
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
              class="py-1 px-12 rounded-pill"
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
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation, Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
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
    VSkeletonLoader,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
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
img {
  max-width: 100%;
}
.flash-deals {
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
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid black;
    border-radius: 50%;
    top: 38%;
    &::after {
      font-size: 13px;
      font-weight: 900;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(53, 53, 53);
    }
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
  }
}
@media (max-width: 580px) {
  .img-parent {
    height: 330px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 50% !important;
  }
}
</style>
