<template>
  <app-layout><router-view /></app-layout>
</template>

<script setup>
import AppLayout from "./components/global/AppLayout.vue";
</script>
<style lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
