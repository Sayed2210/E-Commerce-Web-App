<template>
  <div class="why-shop-us py-10">
    <div class="title text-center text-white mb-5">
      <h2><span>Why Shop</span> with us?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-card class="text-center text-white" color="transparent" flat>
            <img src="@/assets/images/free-shipping.png" alt="" />
            <v-card-text
              class="font-weight-bold pb-0"
              style="font-size: 19px; white-space: pre-wrap; line-height: 1.4"
              >Free Shippin On First Order</v-card-text
            >
            <v-card-text class="pb-0 text-caption"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <v-card-text
              ><a href="#" class="text-white font-weight-bold text-capitalize"
                >learn more</a
              ></v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="text-center text-white" color="transparent" flat>
            <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            <v-card-text
              class="font-weight-bold pb-0"
              style="font-size: 19px; white-space: pre-wrap; line-height: 1.4"
              >Weekly Flash Sale</v-card-text
            >
            <v-card-text class="pb-0 text-caption"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <v-card-text
              ><a href="#" class="text-white font-weight-bold text-capitalize"
                >learn more</a
              ></v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="text-center text-white" color="transparent" flat>
            <img src="@/assets/images/discount.png" alt="" />
            <v-card-text
              class="font-weight-bold pb-0"
              style="font-size: 19px; white-space: pre-wrap; line-height: 1.4"
              >Annual Payment Discount</v-card-text
            >
            <v-card-text class="pb-0 text-caption"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <v-card-text
              ><a href="#" class="text-white font-weight-bold text-capitalize"
                >learn more</a
              ></v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="text-center text-white" color="transparent" flat>
            <img src="@/assets/images/cash-back.png" alt="" />
            <v-card-text
              class="font-weight-bold pb-0"
              style="font-size: 19px; white-space: pre-wrap; line-height: 1.4"
              >Cashback Reward Program</v-card-text
            >
            <v-card-text class="pb-0 text-caption"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <v-card-text
              ><a href="#" class="text-white font-weight-bold text-capitalize"
                >learn more</a
              ></v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.why-shop-us {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-size: cover;
  background-repeat: repeat-x;
  .title {
    font-weight: 900;
    font-size: 1.4rem;
    span {
      color: aqua;
    }
  }
}
</style>
