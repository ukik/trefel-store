<template>
  <div class="call-action-box bg-color-callback row justify-center">
    <div class="col-xl-6 col-lg-8 col-md-11 col-sm-12 col-12 text-center q-px-md">
      <h6 class="text-blue">CLIENT'S REVIEWS</h6>
      <h2>TRAVELLER'S TESTIMONIAL</h2>
      <p>
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
        Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>
    </div>
  </div>


  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
      <!-- <div class="col"> -->
        <Carousel
          v-bind="settings"
          :breakpoints="breakpoints"
          :autoplay="3500"
          :wrap-around="true"
        >
          <Slide v-for="slide in 6" :key="slide">
            <!-- <q-img :ratio="1" src="assets/images/img4.jpg" alt="" class="rounded-borders-2" /> -->
            <div v-for="(item, index) in content?.cards">
              <q-card flat bordered class="text-left rounded-borders-2 q-pa-md">
                <q-card-actions>
                  <q-rating
                    flat
                    readonly
                    v-model="rating"
                    size="sm"
                    :max="5"
                    color="primary"
                  ></q-rating>
                </q-card-actions>
                <q-card-actions>
                  <q-item-label
                    :style="$q.screen.width > 768 ? 'height:72px;' : 'height:auto;'"
                    :lines="$q.screen.width > 768 ? 3 : 100"
                    >{{ item?.subtitle }}</q-item-label
                  >
                </q-card-actions>
                <q-item>
                  <q-item-section avatar>
                    <q-avatar size="70px">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label lines="1">WILLIAM WRIGHT</q-item-label>
                    <q-item-label caption class="text-primary" lines="1"
                      >TRAVELLERS</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-card>
            </div>
          </Slide>

          <template #addons>
            <Navigation /> <Pagination />
          </template>
        </Carousel>
      <!-- </div> -->
    </div>
  </div>

  <div class="q-mb-xl q-pb-xl text-center full-width">
    <q-btn
      icon="face"
      size="18px"
      style="height:50px;"
      unelevated
      rounded
      class="rounded-borders-4"
      color="primary"
      label="VIEW ALL REVIEWS"
    />
  </div>  

</template>
<script>
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Breakpoints",
  components: {},
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "start",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      375: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      425: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      768: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      1440: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      1440: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      2560: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
  }),
};
</script>
<script setup>
const rating = 4;
const content = {
  title: "Service",
  cards: [
    {
      id: "1",
      title: "Mr. Bean",
      image: "assets/images/img30.jpg",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    // {
    //   id: "1",
    //   title: "Mr. Bean",
    //   image: "assets/images/img31.jpg",
    //   subtitle:
    //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //         incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //         incididunt ut labore et dolore magna aliqua.`,
    // },
    // {
    //   id: "1",
    //   title: "Mr. Bean",
    //   image: "assets/images/img32.jpg",
    //   subtitle:
    //     "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    // },
    // {
    //   id: "1",
    //   title: "Mr. Bean",
    //   image: "assets/images/img13.jpg",
    //   subtitle:
    //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //         incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //         incididunt ut labore et dolore magna aliqua.`,
    // },
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
  min-height: 450px;
}

.text-box h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0px;
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



<style scoped>
.carousel__slide {
  padding: 10px;
}
</style>
