<template>
  <div class="home">
    <UpperBanner />
    <TheFeature />
    <TopOffer />
    <ProductSwiper
      :products="flashDeals"
      title="Flash Deals"
      title-color="red"
      :index="0"
    />
    <TopCategory />
    <NewProduct :products="newProduct" :index="0" />
    <QualityFeatures />
    <ProductSwiper
      :products="mobilePhones"
      title="Top Mobiles Phones"
      title-color="black"
      :index="0"
    />
    <FeatureBand />
    <ProductSwiper
      :products="fragrances"
      title="Fragrances"
      title-color="black"
      :index="3"
    />
    <TvBanner />
    <ProductSwiper
      :products="groceries"
      title="Groceries"
      title-color="black"
      :index="5"
    />
    <WhyShopUs />
  </div>
</template>

<script setup>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeature from "@/components/home_page/TheFeature.vue";
import TopOffer from "@/components/home_page/TopOffer.vue";
import ProductSwiper from "@/components/home_page/ProductSwiper.vue";
import TopCategory from "@/components/home_page/TopCategory.vue";
import NewProduct from "@/components/home_page/NewProduct.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import FeatureBand from "@/components/home_page/FeatureBand.vue";
import TvBanner from "@/components/home_page/TvBanner.vue";
import WhyShopUs from "@/components/home_page/WhyShopUs.vue";
</script>

<script>
import { productModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  methods: {
    ...mapActions(productModule, ["getProducts"]),
  },
  computed: {
    ...mapState(productModule, [
      "flashDeals",
      "newProduct",
      "mobilePhones",
      "fragrances",
      "groceries",
    ]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
