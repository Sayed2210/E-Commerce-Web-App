<template>
  <v-navigation-drawer location="right" temporary v-model="drawer">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos
      quaerat tempora, voluptatum accusantium illum similique odit tenetur ipsam
      expedita mollitia ut qui non libero aut. Placeat eos beatae doloremque.[]
    </p>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
// const Emitter = inject("Emitter");
// onMounted(() => {
//   Emitter.on("openCart", () => {
//     drawer.value = true;
//   });
// });
</script>
