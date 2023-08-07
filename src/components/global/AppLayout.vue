<template>
  <v-layout style="position: relative">
    <CartDrawer />
    <AppNav />
    <v-main style="padding-top: 137px">
      <slot></slot>
    </v-main>
    <FixedNav />
    <AppFooter />
  </v-layout>
</template>

<script setup>
import AppFooter from "./AppFooter.vue";
import FixedNav from "./FixedNav.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
</script>
