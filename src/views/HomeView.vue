<template>
  <div class="home">
    <UpperBanner />
    <TheFeature />
    <TopOffer />
    <FlashDeals :products="flashDeals" />
  </div>
</template>

<script setup>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeature from "@/components/home_page/TheFeature.vue";
import TopOffer from "@/components/home_page/TopOffer.vue";
import FlashDeals from "@/components/home_page/FlashDeals.vue";

//get product from api
import { productModule } from "@/store/products";
import { ref, onMounted } from "vue";

const store = productModule();
const flashDeals = ref(store.flashDeals);
onMounted(() => {
  store.getProducts();
});
</script>
