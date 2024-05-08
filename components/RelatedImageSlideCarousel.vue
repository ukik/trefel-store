<template>
  <q-carousel
    :autoplay="autoplay"
    class="rounded-borders-2"
    swipeable
    animated
    navigation
    arrows
    v-model="slide"
    v-model:fullscreen="fullscreen"
    infinite
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = 4500"
  > 

    <template v-for="(item, i) in _gallery">
      <q-carousel-slide :name="i" :img-src="item" />
    </template>
    <!-- <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->

    <template v-slot:control>
      <q-carousel-control position="top-right" :offset="[18, 18]">
        <q-btn
          size="lg"
          round
          dense
          color="white"
          text-color="primary"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="fullscreen = !fullscreen"
        />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      fullscreen: ref(false),
      autoplay: ref(4500),
    };
  },
  props: ['_gallery']
};
</script>
