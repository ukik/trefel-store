<template>
  <!-- <main> -->
  <InnerBanner :_title="content?.title"></InnerBanner>

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
        class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
      >
        <q-card flat class="rounded-borders-2">
          <q-img loading="lazy" :ratio="16 / 9" class="card-box" :src="item?.image">
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                Cannot load image
              </div>
            </template>
            <div class="absolute-full flex justify-center flex-center">
              <div class="full-width text-center q-mt-sm">
                <q-avatar
                  size="100px"
                  font-size="45px"
                  color="blue"
                  text-color="white"
                  :icon="item?.icon"
                />
              </div>
              <div class="text-box text-center q-mt-lg full-width q-px-sm">
                <h3>{{ item?.title }}</h3>
                <q-item-label lines="4">{{ item?.subtitle }}</q-item-label>
              </div>
              <q-btn
                unelevated
                rounded
                dense
                class="q-px-lg q-py-sm q-mb-sm rounded-borders-3 text-weight-light"
                color="primary"
                label="Learn More"
              />
            </div>
          </q-img>
          <!-- <q-card-action>
            <q-item-label class="text-black text-center" lines="3">{{ item?.subtitle }}</q-item-label>
          </q-card-action> -->
        </q-card>
      </div>
    </div>
  </div>
  <!-- Call To Action -->
  <div class="call-action-box bg-color-callback bg-light-grey row justify-center">
    <div class="col-xl-6 col-lg-8 col-md-11 col-sm-12 col-12 text-center q-px-md">
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
      icon: "hotel",
      title: "BEST AKOMODASI",
      image: "assets/images/img4.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "flight_takeoff",
      title: "TRAVEL INSURANCE",
      image: "assets/images/img28.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "store_mall_directory",
      title: "ACCESSIBILITY",
      image: "assets/images/img12.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "sticky_note_2",
      title: "ONLINE BOOKING",
      image: "assets/images/img13.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "directions_bus",
      title: "BEST MANAGEMENT",
      image: "assets/images/img17.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "support_agent",
      title: "FAST SUPPORT",
      image: "assets/images/img10.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },

    {
      id: "1",
      icon: "directions_bike",
      image: "assets/images/img4.jpg",
      title: "AFFORDABLE TOURS",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "sailing",
      title: "BEST TOUR GUIDES",
      image: "assets/images/img13.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "volunteer_activism",
      title: "PERSONAL TOUCH",
      image: "assets/images/img17.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "face",
      title: "FRIENDLY SERVICE",
      image: "assets/images/img28.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },

    {
      id: "1",
      icon: "verified",
      title: "REAL EXPERIENCED",
      image: "assets/images/img17.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      icon: "event",
      title: "FLEXIBLE SCHEDULE",
      image: "assets/images/img28.jpg",
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
  min-height: 400px;
}

.text-box h3 {
  font-size: 22px;
  font-weight: 700;
}

.text-box {
  h3,
  p {
    color: white;
  }
}

.call-action-box p {
  font-size: medium;
}

h2 {
  font-size: 40px;
  font-weight: 800;
}

.q-item__label {
  margin-bottom: 25px;
  color: white;
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
