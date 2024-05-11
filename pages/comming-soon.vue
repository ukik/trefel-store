<template>
  <!-- Call To Action -->
  <q-img style="height: calc(100vh - 50px)" src="assets/images/banner-img1.jpg">
    <div class="absolute-full row flex-center">
      <div class="row flex flex-center text-center col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12">
        <q-img class="col-3" src="assets/images/site-logo.png"></q-img>

        <div class="comming-soon-content col-12 q-mt-xl">
          <div class="text-h5 ">WE ARE COMING SOON !</div>
        <h2 class="q-my-lg text-white">GET NOTIFIED WHEN SITE GOES LIVE.</h2>
        </div>

        <q-form class="row justify-center col-12 full-height q-mt-md">

          <q-input rounded
            bg-color="white"
            class="q-mb-lg col-xl-10 col-lg-10 col-md-12 col-sm-11 col-12"
            :loading="loading"
            outlined
            bottom-slots
            v-model="text"
            placeholder="Enter your email"
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>

            <template v-slot:after>
              <q-btn
                :loading="loading"
                @click=""
                class="full-height rounded-borders-3"
                icon-right="send"
                color="form"
                :label="$q.screen.width > 425 ? 'Kirim Email' : ''"
              ></q-btn>
            </template>

            <!-- <template v-slot:hint> Email wajib diisi </template> -->
          </q-input>

          <!-- <q-btn class="rounded-borders-4"
          style="height:56px;" 
          :loading="loading"
          @click="onCoupon"
          icon-right="send"
          color="form"
          label="Apply Coupon"
        ></q-btn> -->
        </q-form>

        <div class="row col-12 justify-center q-col-gutter-x-md">
          <div class="col-auto">
            <q-btn round color="primary" size="16px" dense
              ><font-awesome :icon="['fab', 'instagram']"
            /></q-btn>
          </div>
          <div class="col-auto">
            <q-btn round color="primary" size="16px" dense
              ><font-awesome :icon="['fab', 'whatsapp']"
            /></q-btn>
          </div>
          <div class="col-auto">
            <q-btn round color="primary" size="16px" dense
              ><font-awesome :icon="['fab', 'facebook-f']"
            /></q-btn>
          </div>
          <div class="col-auto">
            <q-btn round color="primary" size="16px" dense
              ><font-awesome :icon="['fab', 'x-twitter']"
            /></q-btn>
          </div>
          <div class="col-auto">
            <q-btn round color="primary" size="16px" dense
              ><font-awesome :icon="['fab', 'tiktok']"
            /></q-btn>
          </div>
        </div>

        <div class="col-8 text-center q-mt-xl">
          <q-separator class="col-12 q-mb-lg" color="white" />
          Copyright © 2022 Traveler. All rights reserved.
        </div>
      </div>
    </div>
  </q-img>

  <!-- </main> -->
</template>

<script setup>
const content = {
  title: "Service",
};

const loading = false;
const text = ref(null);
</script>

<style scoped>
.call-action-box p {
  font-size: medium;
}

h2 {
  /* font-size: 40px; */
  font-weight: 800;
}

.bg-color-callback {
  padding-top: 85px;
  padding-bottom: 85px;
}
.bg-light-grey {
  background-color: #f8f8f8;
}

.comming-soon-content {
  /* margin-top: 80px; */
  /* margin-bottom: 50px; */
  text-align: center;
}
.comming-soon-content h2 {
  font-size: 60px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 30px;
}

@media screen and (max-width: 575px) {
  .comming-soon-content h2 {
    font-size: 30px;
  }
}
</style>
