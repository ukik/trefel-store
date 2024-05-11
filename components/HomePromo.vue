<template>
  <!-- Call To Action -->
  <div class="call-action-box bg-color-callback row justify-center">
    <div class="col-xl-6 col-lg-8 col-md-11 col-sm-12 col-12 text-center q-px-md">
      <h6 class="text-blue">OFFER & DISCOUNT</h6>
      <h2>OUR SPECIAL PACKAGES</h2>
      <p>
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
        Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>
    </div>
  </div>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
    class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div
        v-for="(item, index) in content?.cards"
        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
      >
        <q-card flat class="rounded-borders-2">
          <q-img loading="lazy" :ratio="16 / 9" class="card-box" :src="item?.image">
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                Cannot load image
              </div>
            </template>

            <q-chip label="UPTO 25% off" color="primary" class="absolute-top-right q-ma-md"></q-chip>

            <div class="absolute-bottom bg-transparent row justify-start">
              <q-card
                flat
                class="text-box text-center text-dark q-mt-lg rounded-borders-2 col-xl-9 col-lg-9"
              >
                <q-card-section>
                  <!-- <q-btn-group spread flat rounded unelevated class="q-px-xl">
                    <q-btn color="primary" size="16px" dense class="q-pl-lg q-pr-md"
                      ><font-awesome :icon="['fab', 'instagram']"
                    /></q-btn>
                    <q-btn color="primary" size="16px" dense class="q-px-md"
                      ><font-awesome :icon="['fab', 'whatsapp']"
                    /></q-btn>
                    <q-btn color="primary" size="16px" dense class="q-px-md"
                      ><font-awesome :icon="['fab', 'facebook-f']"
                    /></q-btn>
                    <q-btn color="primary" size="16px" dense class="q-px-md"
                      ><font-awesome :icon="['fab', 'x-twitter']"
                    /></q-btn>
                    <q-btn color="primary" size="16px" dense class="q-pr-lg q-pl-md"
                      ><font-awesome :icon="['fab', 'tiktok']"
                    /></q-btn>
                  </q-btn-group> -->
                  <q-chip outline color="orange" icon="schedule"> 7D/6N</q-chip>
                  <q-chip outline color="pink" icon="group">pax: 10</q-chip>
                  <q-chip outline color="green" icon="location_on">Malaysia</q-chip>                  
                </q-card-section>
                <q-separator />
                <q-card-section class="text-left">
                  <h3>{{ item?.title }}</h3>
                  <q-item-label class="q-mb-sm" lines="2">{{ item?.subtitle }}</q-item-label>
                  <!-- <q-item dense> -->
                    <q-item-label lines="1">
                      <!-- <q-badge color="orange" align="top" class="absolute-top-right">22</q-badge> -->
                      <span class="text-h5 q-mr-sm text-grey text-strike">Rp. 500</span>
                      <span class="text-h5 text-positive text-bold">Rp. 500</span>
                    </q-item-label>
                  <!-- </q-item> -->

                  <q-btn
                    color="primary"
                    size="16px"
                    class="rounded-borders-4 q-mt-lg"
                    label="Book Now"
                  ></q-btn>                  
                </q-card-section>
              </q-card>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </div>

  <div class="q-mb-xl q-pb-xl text-center full-width">
    <q-btn
      icon="location_on"
      size="18px"
      style="height:50px;"
      unelevated
      rounded
      class="rounded-borders-4"
      color="primary"
      label="MORE DESTINATION"
    />
  </div>
</template>

<script setup>
const content = {
  title: "PACKAGE PROMO",
  cards: [
    {
      id: "1",
      title: "Mr. Bean",
      image: "assets/images/img30.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      title: "Mr. Bean",
      image: "assets/images/img31.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
  ],
};
</script>
<style scoped>
.content-page-section {
  padding-bottom: 80px;
}

.content-page-section p {
  margin-bottom: 25px;
}

.card-box {
  min-height: 600px;
}

.text-box h3 {
  font-size: 22px;
  font-weight: 700;
  /* margin-bottom: 10px; */
}

.call-action-box p {
  font-size: medium;
}

h2 {
  font-size: 40px;
  font-weight: 800;
}

.q-item__label {
  line-height: 1.6 !important;
}

.bg-color-callback {
  padding-top: 85px;
  padding-bottom: 50px;
}
.bg-light-grey {
  background-color: #f8f8f8;
}
</style>
