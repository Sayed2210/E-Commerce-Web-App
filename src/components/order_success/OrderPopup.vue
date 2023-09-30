<template>
  <v-dialog v-model="dialog" width="50%" persist>
    <v-card class="text-center pa-5">
      <div class="text-center mb-5">
        <v-icon
          icon="mdi-check"
          class="text-center"
          color="green"
          style="
            font-size: 45px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 1px solid green;
          "
        ></v-icon>
      </div>
      <v-card-title class="font-weight-bold"
        >Order Placed Successfully</v-card-title
      >
      <v-card-title
        style="
          white-space: pre-wrap;
          line-height: 1.2;
          font-size: 13px;
          color: #777;
        "
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
        reiciendis, et tempore quas repellendus accusantium eaque corrupti, a
        laboriosam ratione est neque maxime beatae provident illum sapiente
        inventore vero dignissimos?</v-card-title
      >
      <v-card-actions class="justify-center">
        <v-btn color="blue" variant="elevated" @click="resetData">Got It</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { addCartItems } from "@/store/cart";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        this.$emit("close-popup");
      }
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
  methods: {
    ...mapActions(addCartItems, ["resetItems"]),
    resetData() {
      this.resetItems;
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
};
</script>
