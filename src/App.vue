<template>
  <app-layout
    ><router-view /> <QuickView /><v-snackbar
      v-model="bar"
      location="left bottom"
      timeout="2000"
    >
      {{ itemTitle }} has been added to Your cart successful

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="bar = false"> Close </v-btn>
      </template>
    </v-snackbar></app-layout
  >
</template>

<script>
import AppLayout from "./components/global/AppLayout.vue";
import QuickView from "./components/global/QuickView.vue";
export default {
  inject: ["Emitter"],
  components: {
    AppLayout,
    QuickView,
  },
  data: () => ({
    bar: false,
    itemTitle: "",
  }),
  mounted() {
    this.Emitter.on("showMsg", (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
  },
};
</script>
<style lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
