<template>
  <v-layout style="position: relative">
    <CartDrawer :windowWidth="windowWidth" />
    <AppNav v-show="$route.name != 'checkout' && windowWidth > 990" />
    <MenuDrawer :windowWidth="windowWidth" />
    <v-main
      :style="`padding-top: ${
        $route.name == 'checkout' ? '0px' : windowWidth <= 990 ? '90px' : '136'
      }`"
    >
      <slot></slot>
    </v-main>
    <ResponsiveNav v-show="$route.name != 'checkout' && windowWidth <= 990" />
    <FixedNav v-show="$route.name != 'checkout' && windowWidth > 990" />
    <AppFooter v-show="$route.name != 'checkout'" />
  </v-layout>
</template>

<script setup>
import AppFooter from "./AppFooter.vue";
import FixedNav from "./FixedNav.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
</script>

<script>
import ResponsiveNav from "@/components/global/ResponsiveNav.vue";
import MenuDrawer from "@/components/global/MenuDrawer.vue";
export default {
  components: {
    ResponsiveNav,
    MenuDrawer,
  },
  data: () => ({
    windowWidth: 0,
  }),
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>
