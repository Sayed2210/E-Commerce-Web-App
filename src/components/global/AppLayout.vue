<template>
  <v-layout style="position: relative">
    <CartDrawer />
    <AppNav v-show="$route.name != 'checkout' && widowWidth > 990" />
    <MenuDrawer />
    <v-main
      :style="`padding-top: ${
        $route.name == 'checkout' ? '0px' : widowWidth <= 990 ? '60px' : '136'
      }`"
    >
      <slot></slot>
    </v-main>
    <ResponsiveNav v-show="$route.name != 'checkout' && widowWidth <= 990" />
    <FixedNav v-show="$route.name != 'checkout' && widowWidth > 990" />
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
    widowWidth: 0,
  }),
  mounted() {
    this.widowWidth = window.innerWidth;
    window.onresize = () => {
      this.widowWidth = window.innerWidth;
    };
  },
};
</script>
