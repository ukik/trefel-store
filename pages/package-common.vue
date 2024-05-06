<template>
  <!-- <main> -->
  <InnerBanner :_title="content?.title"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
      class="row justify-center col-xl-8 col-lg-9 col-md-12 col-sm-12 col-11"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg q-px-md' : 'q-gutter-y-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div v-for="(item, index) in content?.cards" class="col-12">
        <q-card flat class="rounded-borders-2">
          <q-card-section :horizontal="$q.screen.width > 425" class="row q-pa-none">
            <q-img
              loading="lazy"
              :ratio="16 / 9"
              class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"
              :src="item?.image"
            >
              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-negative text-white">
                  Cannot load image
                </div>
              </template>
            </q-img>

            <q-card-section class="bg-grey-2 row flex items-start">
              <div class="text-box q-mt-lg full-width q-px-sm col-12">
                <h3>{{ item?.title }}</h3>
                <q-item-label lines="4">{{ item?.subtitle }}</q-item-label>
              </div>

              <div class="col-12 q-mt-md">
                <q-chip outline color="orange" icon="schedule"> 7D/6N</q-chip>
                <q-chip outline color="pink" icon="group">pax: 10</q-chip>
                <q-chip outline color="green" icon="location_on">Malaysia</q-chip>
              </div>
            </q-card-section>

            <q-card-section
              class="bg-light-blue-8 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 row flex flex-center text-white q-pt-lg"
            >
              <q-rating
                readonly
                v-model="item.rating"
                size="xs"
                :max="5"
                color="white"
              ></q-rating>
              <div class="text-caption text-center q-mx-sm">review (34)</div>
              <div class="package-price col-12 text-center row">
                <h6 class="col-12">$750</h6>
                <small class="col-12 text-center">/ per person</small>
              </div>
              <q-btn
                unelevated
                outline
                rounded
                dense
                class="q-px-lg q-py-sm q-mb-sm q-mt-md rounded-borders-3 text-weight-light"
                color="white"
                label="Book Now"
              />
            </q-card-section>
          </q-card-section>

          <!-- <q-card-action>
              <q-item-label class="text-black text-center" lines="3">{{ item?.subtitle }}</q-item-label>
            </q-card-action> -->
        </q-card>
      </div>
    </div>
  </div>
  <!-- Call To Action -->
  <CallActionOffer></CallActionOffer>
  <div class="call-action-box bg-color-callback bg-light-grey row justify-center">
    <div class="col-lg-8 text-center q-px-md">
      <h5>CALL TO ACTION</h5>
      <h2 class="q-py-lg">READY FOR UNFORGATABLE TRAVEL. REMEMBER US!</h2>
      <p>
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
        Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>
      <div class="q-mt-xl">
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
      </div>
    </div>
  </div>

  <!-- </main> -->
</template>

<script setup>
const content = {
  title: "Service",
  cards: [
    {
      id: "1",
      rating: 4,
      icon: "hotel",
      title: "BEST HOTELS",
      image: "assets/images/img4.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      rating: 4,
      icon: "flight_takeoff",
      title: "TRAVEL INSURANCE",
      image: "assets/images/img28.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      rating: 4,
      icon: "store_mall_directory",
      title: "ACCESSIBILITY",
      image: "assets/images/img12.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      rating: 4,
      icon: "sticky_note_2",
      title: "ONLINE BOOKING",
      image: "assets/images/img13.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      rating: 4,
      icon: "directions_bus",
      title: "BEST TOUR",
      image: "assets/images/img17.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      rating: 4,
      icon: "support_agent",
      title: "FAST SUPPORT",
      image: "assets/images/img10.jpg",
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

.package-price {
  h6 {
    color: white;
    font-size: 40px;
    font-weight: 800;
    display: block;
  }
  small {
    margin-top: -15px;
  }
}

.text-box h3 {
  font-size: 22px;
  font-weight: 700;
}

.call-action-box p {
  font-size: medium;
}

h2 {
  font-size: 40px;
  font-weight: 800;
}

.q-item__label {
  /* margin-bottom: 25px; */
  /* color: white; */
  line-height: 1.6 !important;
}

.bg-color-callback {
  padding-top: 85px;
  padding-bottom: 85px;
}
.bg-light-grey {
  background-color: #f8f8f8;
}
</style>
