<template>
  <v-layout style="position: relative">
    <CartDrawer />
    <AppNav v-if="$route.name != 'checkout'" />
    <v-main
      :style="`padding-top: ${$route.name == 'checkout' ? '0' : '136px'}`"
    >
      <slot></slot>
    </v-main>
    <FixedNav v-if="$route.name != 'checkout'" />
    <AppFooter v-if="$route.name != 'checkout'" />
  </v-layout>
</template>

<script setup>
import AppFooter from "./AppFooter.vue";
import FixedNav from "./FixedNav.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
</script>
