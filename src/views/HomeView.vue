<template>
  <div class="home">
    <UpperBanner />
    <TheFeature />
    <TopOffer />
    <FlashDeals :products="products" />
  </div>
</template>

<script setup>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeature from "@/components/home_page/TheFeature.vue";
import TopOffer from "@/components/home_page/TopOffer.vue";
import FlashDeals from "@/components/home_page/FlashDeals.vue";
import { productModule } from "@/store/products";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const store = productModule();
const products = storeToRefs("flashDeal");
onMounted(() => {
  store.getProducts();
});
</script>
