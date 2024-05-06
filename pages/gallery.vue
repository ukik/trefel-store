<template>
    <InnerBanner _title="Gallery"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div class="row justify-center col-xl-8 col-lg-8 col-md-8 col-sm-11 col-12" :class="[
        $q.screen.width > 425 ? '' : 'q-px-md',
        $q.screen.width > 768 ? '' : '',
      ]">
      <q-card flat class="col-12 q-pa-none">
        <div class="container">
          <template v-for="item in [...cards, ...cards]">
            <div class="card">
              <q-img class="rounded-borders-2" :src="item?.image" />
            </div>
          </template>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
const cards = [
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
  {
    id: "1",
    title: "Mr. Bean",
    image: "assets/images/img32.jpg",
    subtitle:
      "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
  },
  {
    id: "1",
    title: "Mr. Bean",
    image: "assets/images/img13.jpg",
    subtitle:
      "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
  },
  {
    id: "1",
    title: "Mr. Bean",
    image: "assets/images/img17.jpg",
    subtitle:
      "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
  },
  {
    id: "1",
    title: "Mr. Bean",
    image: "assets/images/img10.jpg",
    subtitle:
      "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
  },
];
</script>

<style scoped>
.container {
  list-style: none;
  column-gap: 10px;
  padding: 0;
  column-count: 1;
}
.card {
  width: 100%;
  height: auto;
  padding: 0;
  padding-bottom: 10px;
  margin: 0;
  box-sizing: border-box;
  /* border: 10px solid #ffffff00; */
  break-inside: avoid;
}

@media (min-width: 320px) and (max-width: 759.5px) {
  .container {
    column-count: 1;
  }
  /* .card {
    border-left: 2px solid #ffffff00;
    border-right: 2px solid #ffffff00;
    border-top: 5px solid #ffffff00;
    border-bottom: 5px solid #ffffff00;
  } */
}
@media (min-width: 760px) and (max-width: 979.5px) {
  .container {
    column-count: 3;
  }
}
@media (min-width: 980px) and (max-width: 1023.5px) {
  .container {
    column-count: 3;
  }
}
@media (min-width: 1024px) {
  .container {
    column-count: 3;
  }
}

.content-page-section {
  padding-bottom: 80px;
}

.content-page-section p {
  margin-bottom: 25px;
}

</style>
