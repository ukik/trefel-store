<template>
  <div>
    <q-no-ssr>
      <EasyLightbox :_gallery="gallery" ref="EasyLightboxRef"></EasyLightbox>
    </q-no-ssr>
    <div class="q-mt-xl q-mb-lg text-center">
      <h5 class="subtitle">YOU MUST KNOW</h5>
      <h2>RELATED IMAGES</h2>
      <span>
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
        Vestibulum cumque laudantm sit.
      </span>
    </div>
    <q-tabs
      v-if="$q.screen.width < 768"
      indicator-color="transparent"
      inline-label
      class="bg-white q-pa-none q-ma-none"
    >
      <template v-for="(item, i) in gallery">
        <q-tab
          @click="openLightBox(i)"
          :ripple="false"
          class="q-pa-none q-ma-none"
          style="height: 200px"
        >
          <q-img
            :ratio="1"
            class="rounded-borders-2"
            :class="[i == 0 ? 'q-ml-none' : 'q-ml-md']"
            ripple
            :src="item"
            width="200px"
            height="200px"
          />
        </q-tab>
      </template>
    </q-tabs>

    <RelatedImageSlideCarousel :_gallery="gallery" v-else></RelatedImageSlideCarousel>
  </div>
</template>

<script setup>
const tab = ref(1);
const EasyLightboxRef = ref(null);
const { _gallery } = defineProps({
  _gallery: {
    default: () => [
      "https://picsum.photos/500/300",
      "https://picsum.photos/500/400",
    ],
  },
});
const gallery = _gallery;

const openLightBox = (index = 0) => {
  EasyLightboxRef.value?.showImage(index)
  // EasyLightboxRef.value?.showMultiple(gallery, 0)
  // console.log(EasyLightboxRef)
}

// onMounted(() => {
//   console.log('onMounted',EasyLightbox)
// })
</script>

<style scoped>
h2 {
  font-size: 40px;
  font-weight: 800;
}
</style>
