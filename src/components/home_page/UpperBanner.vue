<template>
  <div class="banner">
    <div class="parent pb-sm-5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="cont text-start">
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
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: -90px top;
  }
  .cont {
    padding-top: 50px;
    max-width: 570px;
    color: white;
    h1 {
      font-size: 3rem;
      font-weight: bold;
      span {
        color: #00e5ff;
      }
    }
    p {
      margin: 50px 0;
    }
  }
}
@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        h1 {
          font-size: 2.5rem;
        }
        p {
          margin: 30px 0;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .banner {
    .parent {
      background-position: -180px top;
    }
  }
}
@media (max-width: 425px) {
  .banner {
    .parent {
      background-position: -300px top;
    }
  }
}
</style>
