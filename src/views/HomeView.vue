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
//get data from api
import { productModule } from "@/store/products";
import { onMounted } from "vue";
const store = productModule();
const flashDeals = store.flashDeals;
onMounted(async () => {
  await store.getProducts;
});
</script>

<!-- <script>
import { productModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  methods: {
    ...mapActions(productModule, ["getProducts"]),
  },
  computed: {
    ...mapState(productModule, ["flashDeals"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script> -->
