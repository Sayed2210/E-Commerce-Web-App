<template>
  <v-layout>
    <CartDrawer />
    <AppNav />
    <v-main>
      <slot></slot>
    </v-main>
    <AppFooter />
  </v-layout>
</template>

<script setup>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
</script>
