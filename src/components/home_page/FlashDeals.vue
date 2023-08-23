<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="item in products" :key="item.id">
        <v-card elevation="0">
          <img :src="item.thumbnail" alt="" />
          <v-card-text class="pl-0">
            {{
              item.description.split(" ").lenght <= 10
                ? item.description
                : item.description.split(" ").slice(0, 9).join(" ") + "..."
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            color="yellow-darken-3"
            readonly
            size="x-small"
            density="combact"
            half-increments
          ></v-rating>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: 150px;
}
</style>
