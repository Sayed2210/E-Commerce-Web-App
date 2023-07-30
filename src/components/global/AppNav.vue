<template>
  <v-app-bar :elevation="2">
    <v-app-bar-nav-icon @click="fireemit"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { inject } from "vue";
const Emitter = inject("Emitter");

const fireemit = () => {
  Emitter.emit("openCart");
};
</script>
