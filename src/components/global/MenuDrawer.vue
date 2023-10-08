<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :width="windowWidth <= 768 ? windowWidth / 2 : 370"
      class="px-3"
      ><v-card-title
        class="font-weight-bold pl-0 pr-2 d-flex justify-space-between align-center w-100"
      >
        Shoppping Cart
        <v-icon icon="mdi-close" @click="drawer = false"></v-icon
      ></v-card-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item class="px-0" v-for="cat in categories" :key="cat.route">
          <v-list-item-title
            @click="
              $router.push({
                name: 'products-category',
                query: { title: cat.title, category: cat.route },
              })
            "
            >{{ cat.title }}</v-list-item-title
          ></v-list-item
        >
      </v-list>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" class="px-0">
            <v-list-item-title> Language </v-list-item-title></v-list-item
          >
        </template>

        <v-list-item>
          <v-list-item-title>
            <v-list-item-title>English</v-list-item-title>
          </v-list-item-title>
        </v-list-item>
      </v-list-group></v-navigation-drawer
    >
  </div>
</template>

<script>
import { productModule } from "@/store/products";
import { mapState } from "pinia";
export default {
  props: {
    windowWidth: {
      type: Number,
    },
  },
  data: () => ({
    drawer: false,
  }),
  inject: ["Emitter"],
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = true;
    });
  },
  computed: {
    ...mapState(productModule, ["categories"]),
  },
};
</script>
