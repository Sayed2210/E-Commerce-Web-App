<template>
  <h2>test</h2>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },
  mounted() {
    console.log(this.products);
  },
};
</script>
