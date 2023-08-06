<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="5">
            <div class="cont">
              <h1>
                <span>Huge Saving</span>
                On UHD Television
              </h1>
              <p>Sale Up To 70% Off on Selected items*</p>
              <v-btn
                variant="outlined"
                style="border-radius: 22px"
                class="px-10"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style lang="scss">
.banner {
  .parent {
    height: 420px;
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-postion: -90px top;
  }
  .cont {
    padding-top: 50px;
    max-width: 370px;
    color: white;
    h1 {
      font-size: 3rem;
      font-wight: bold;
      span {
        color: #00e5ff;
      }
    }
    p {
      margin: 50px 0;
    }
  }
}
</style>
