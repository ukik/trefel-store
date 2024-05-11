<template>
  <q-card flat bordered class="rounded-borders-2 q-mt-xl">
    <Carousel
      v-bind="settings"
      :breakpoints="breakpoints"
      :autoplay="3500"
      :wrapAround="true"
    >
      <Slide v-for="slide in 20" :key="slide">
        <!-- <div class="carousel__item">{{ slide }}</div> -->
        <q-img :ratio="1" src="assets/images/img4.jpg" alt="" class="rounded-borders-2" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </q-card>
</template>

<script>
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Breakpoints",
  components: {},
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      768: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      1440: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      1440: {
        itemsToShow: 4,
        snapAlign: "start",
      },
      2560: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
};
</script>
<style scoped>
.carousel__slide {
  padding: 10px;
}
</style>
