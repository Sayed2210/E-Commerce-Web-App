<template>
  <div class="top-category">
    <div class="banner">
      <img src="@/assets/images/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <div class="title d-flex align-center justify-center px-6 py-5">
      <h2 class="text-center flex-grow-1">Top Catgories</h2>
      <a href="#" class="text-black">see all</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="2" v-for="cat in categories" :key="cat.title">
          <v-card flat class="text-center">
            <v-hover v-slot="{ isHovering, props }"
              ><div class="image-parent w-100 rounded-circle">
                <img
                  :src="cat.image"
                  class="w-100"
                  v-bind="props"
                  :style="`transition: 0.3s; scale: ${
                    isHovering ? 1.05 : 1
                  };height: 100%;`"
                  alt=""
                /></div
            ></v-hover>

            <v-card-text class="text-body-1">{{ cat.title }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
const categories = ref([
  {
    title: "mobile",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
  },
  {
    title: "laptop",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
  },
  {
    title: "tv",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
  },
  {
    title: "pc",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
  },
  {
    title: "audio & videon",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
  },
  {
    title: "gaming",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
  },
  {
    title: "home appliances",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
  },
  {
    title: "kitchen",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
  },
  {
    title: "cameras",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
  },
  {
    title: "consume",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
  },
  {
    title: "smart",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
  },
  {
    title: "accessories",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
  },
]);
</script>

<style lang="scss">
.top-category {
  h2 {
    font-weight: 900;
  }
  .image-parent {
    overflow: hidden;
    height: 180px;
  }
}
</style>
