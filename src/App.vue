<template>
  <app-layout><router-view /> <QuickView /></app-layout>
</template>

<script setup>
import AppLayout from "./components/global/AppLayout.vue";
import QuickView from "./components/home_page/QuickView.vue";
</script>
<style lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
