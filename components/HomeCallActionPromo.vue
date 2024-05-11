<template>
  <q-dialog v-model="modal" full-height full-width>
    <q-card flat class="row justify-center bg-transparent">
        <q-video
            class="col"
            src="https://www.youtube.com/embed/2OYar8OHEOU?si=AgoLISOxBUCDtTnk&autoplay=1"
          />
      <div class="q-pt-md full-width text-center" :class="[$q.screen.width > 425 ? 'absolute' : 'absolute-bottom q-mb-xl q-pb-lg']">
        <q-btn v-close-popup color="red" class="rounded-borders-2" rounded icon="close" label="Close"  ></q-btn>
      </div>
    </q-card>
  </q-dialog>

  <!-- <q-carousel animated v-model="slide2" arrows navigation infinite>
    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
  </q-carousel> -->

  <q-carousel
    class="bg-dark"
    infinite
    swipeable
    animated
    transition-prev="slide-right"
    transition-next="slide-left"
    navigation
    arrows
    v-model="slide"
    :height="$q.screen.width > 425 ? '650px' : '750px'"
  >
    <template v-for="(item, index) in options">
      <q-carousel-slide :name="item?.value" img-src="/assets/images/img16.jpg">
        <div class="absolute-full dimmed"></div>
        <div class="absolute-full dimmed"></div>
        <div class="absolute-full flex flex-center">
          <div class="text-center row flex justify-center">
            <q-btn @click="modal = true"
              class="q-mb-lg"
              icon="play_circle"
              color="white"
              outline
              round
              dense
              size="50px"
            ></q-btn>

            <h5 class="text-white text-h6 text-white col-12">ENJOY YOUR LIFE</h5>
            <h2 class="text-white text-white col-xl-11 col-lg-11 col-11">
              ARE YOU READY TO TRAVEL? <br />
              REMEMBER US !!
            </h2>

            <q-item-label lines="2" class="text-white col-xl-11 col-lg-11 col-11">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
              rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
            </q-item-label>

            <div class="q-mt-xl col-12">
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
                color="white"
                label="Learn More"
              />
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </template>
  </q-carousel>
</template>

<script setup>
const slide = ref("style");
const modal = ref(false);
const options = [
  { label: 1, value: "style" },
  { label: 2, value: "tv" },
  { label: 3, value: "layers" },
  { label: 4, value: "map" },
];
</script>

<script>
export default {
  data() {
    return {
      slide2: 1,
    };
  },
};
</script>

<style scoped>
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
  line-height: 1.6 !important;
}

.bg-color-callback {
  padding-top: 85px;
  padding-bottom: 85px;
}
.bg-light-grey {
  background-color: #f8f8f8;
}

/* IMAGE */
.client-section .client-logo ul {
  margin: 0;
  padding: 0;
  font-size: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
}
/* ul {
    list-style: disc;
} */
.client-section .client-logo ul li {
  display: inline-block;
  list-style: none;
  padding: 15px;
  width: 33.33%;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}
.client-section {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
.client-section {
  /* padding: 115px 0; */
  position: relative;
  z-index: 1;
}
</style>
