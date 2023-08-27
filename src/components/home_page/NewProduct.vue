<template>
  <div class="new-product py-8">
    <div class="title d-flex align-center justify-space-between mb-4">
      <h1 class="text-black font-weight-bold">Flash Deals</h1>
      <a href="#" class="text-black">Shop All</a>
    </div>
    <v-container fluid>
      <v-row class="align-start">
        <v-col cols="7" class="pt-12">
          <Swiper
            :pagination="{ clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="15"
            autoplay
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
                <v-card-action>
                  <v-btn
                    class="py-1 px-9 rounded-pill"
                    variant="outlined"
                    density="compact"
                  >
                    Choose Product
                  </v-btn>
                </v-card-action>
              </v-card>
            </swiper-slide>
          </Swiper>
        </v-col>
        <v-col cols="5">
          <img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
export default {
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
  },
  data: () => ({
    showItem: {},
  }),
};
</script>
