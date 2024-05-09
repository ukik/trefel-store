<template>
  <!-- <main> -->
  <InnerBanner :_title="content?.title" style="padding-bottom: 0px"></InnerBanner>

  <!-- Call To Action -->
  <div class="call-action-box bg-color-callback bg-light-grey row justify-center">
    <div class="row justify-center col-xl-9 col-lg-9 col-md-8 col-sm-11 col-12 text-center q-px-md">
      <div class="col-12">
        <span class="extra-big">404</span>
        <h2 class="q-py-lg">SORRY ! THAT PAGE CAN'T BE FOUND</h2>
        <p>
          It looks like nothing was found at this location. Maybe try one of the links below
          or a search?
        </p>
      </div>
      <q-form class="q-mt-xl col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <q-input class="q-mb-lg"
          :loading="loading"
          outlined
          bottom-slots
          v-model="text"
          label="Enter your email"
          counter
          maxlength="50"
          clearable
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>

          <template v-slot:after>
            <q-btn
              :loading="loading"
              @click="onCoupon"
              class="full-height"
              icon-right="send"
              color="form"
              :label="$q.screen.width > 425 ? 'Kirim Email' : ''"
            ></q-btn>
          </template>

          <template v-slot:hint> Email wajib diisi </template>
        </q-input>

        <!-- <q-btn class="rounded-borders-4"
          style="height:56px;" 
          :loading="loading"
          @click="onCoupon"
          icon-right="send"
          color="form"
          label="Apply Coupon"
        ></q-btn> -->
        <q-btn
          icon="phone"
          dense
          unelevated
          rounded
          class="q-py-md q-px-lg q-ma-sm rounded-borders-4"
          color="primary"
          label="Contact Us!"
        />
        <q-btn
          icon-right="chevron_right"
          dense
          unelevated
          rounded
          outline
          class="q-py-md q-px-lg q-ma-sm rounded-borders-4"
          color="primary"
          label="Learn More"
        />
      </q-form>
    </div>
  </div>

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
  font-size: 40px;
  font-weight: 800;
}

.bg-color-callback {
  padding-top: 85px;
  padding-bottom: 85px;
}
.bg-light-grey {
  background-color: #f8f8f8;
}

span.extra-big {
  color: rgba(167, 167, 167, 0.37);
  font-size: 280px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  line-height: 1;
}

@media screen and (max-width: 767px) {
  span.extra-big {
    font-size: 224px;
  }
}
@media screen and (max-width: 575px) {
  span.extra-big {
    font-size: 120px;
  }
  h1 {
    font-size: 22px;
  }
  .no-content-form input {
    margin-bottom: 20px;
    margin-right: 0;
  }
  .no-content-form button {
    width: 100%;
    text-align: center;
  }
}
</style>
