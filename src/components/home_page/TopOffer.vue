<template>
  <div class="top-offer bg-grey-lighten-4 py-12">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props">
              <img
                src="../../assets/images/playstations.webp"
                :style="`scale: ${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props">
              <img
                src="../../assets/images/headset.webp"
                :style="`scale: ${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props">
              <img
                src="../../assets/images/chairs.webp"
                :style="`scale: ${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props">
              <img
                src="../../assets/images/iphones.webp"
                :style="`scale: ${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props">
              <img
                src="../../assets/images/laptops.webp"
                :style="`scale: ${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  overflow: hidden;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }
}
</style>
