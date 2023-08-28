<template>
  <div class="home">
    <UpperBanner />
    <TheFeature />
    <TopOffer />
    <FlashDeals :products="flashDeals" />
    <TopCategory />
    <NewProduct :products="newProduct" />
    <QualityFeatures />
  </div>
</template>

<script setup>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeature from "@/components/home_page/TheFeature.vue";
import TopOffer from "@/components/home_page/TopOffer.vue";
import FlashDeals from "@/components/home_page/FlashDeals.vue";
import TopCategory from "@/components/home_page/TopCategory.vue";
import NewProduct from "@/components/home_page/NewProduct.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
// //get data from api
// import { productModule } from "@/store/products";
// import { onMounted } from "vue";
// const store = productModule();
// const flashDeals = store.flashDeals;
// onMounted(async () => {
//   await store.getProducts;
// });
</script>

<script>
import { productModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  methods: {
    ...mapActions(productModule, ["getProducts"]),
  },
  computed: {
    ...mapState(productModule, ["flashDeals", "newProduct"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
