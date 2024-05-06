<template>
  <div>
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
      <template v-for="i in 10">
        <q-tab :ripple="false" class="q-pa-none q-ma-none" style="height: 200px">
          <q-img
            :ratio="1"
            class="rounded-borders-2"
            :class="[i === 1 ? 'q-ml-none' : 'q-ml-md']"
            ripple
            src="https://picsum.photos/500/300"
            width="200px"
            height="200px"
          />
        </q-tab>
      </template>
    </q-tabs>

    <RelatedImageSlideCarousel v-else></RelatedImageSlideCarousel>
  </div>
</template>

<script setup>
const tab = ref(1);
</script>

<style scoped>
h2 {
  font-size: 40px;
  font-weight: 800;
}
</style>
