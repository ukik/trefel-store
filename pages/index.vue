<template>
  <HomeTron></HomeTron>
  <HomeDestination></HomeDestination>
  <HomePackage></HomePackage>
  <!-- <div v-intersection.once="onIntersection"> -->
  <HomeCallActionPromo></HomeCallActionPromo>
  <!-- </div> -->
  <!-- <q-intersection key="1" @visibility="onVisibility"> -->
  <!-- tidak semua q-intersection bisa, di component jadi ya paham aja -->
  <HomePromo></HomePromo>
  <!-- </q-intersection> -->
  <div v-if="wait" class="full-width text-center q-mb-xl q-py-xl">
    <q-spinner color="primary" size="4em" />
  </div>

  <q-intersection @visibility="onVisibility" once>
    <HomeCounter></HomeCounter>
    <HomeGallery></HomeGallery>
    <HomeCallActionOffer></HomeCallActionOffer>
  </q-intersection>
  <q-intersection once>
    <HomeBlog></HomeBlog>
    <HomeTestimonial></HomeTestimonial>
    <HomeCallAction></HomeCallAction>
  </q-intersection>
</template>

<script setup>
const wait = ref(true);
function onIntersection(val) {
  console.log("onIntersection", val);
}

function onVisibility(val) {
  console.log("onVisibility", val);
  wait.value = false
}
</script>
