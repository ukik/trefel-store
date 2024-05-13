<template>
  <q-no-ssr>
    <EasyLightbox :_gallery="gallery" ref="EasyLightboxRef"></EasyLightbox>
  </q-no-ssr>

  <div class="call-action-box bg-color-callback row justify-center">
    <div class="col-xl-6 col-lg-8 col-md-11 col-sm-12 col-12 text-center q-px-md">
      <h6 class="text-blue">PHOTO GALLERY</h6>
      <h2>TRUE JOY FROM TRAVELLERS</h2>
      <p>
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
        Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>
    </div>
  </div>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12 q-px-md" :class="[
        $q.screen.width > 425 ? '' : '',
        $q.screen.width > 768 ? '' : '',
      ]">
      <q-card flat class="col-12 q-pa-none">
        <div class="container">
          <template v-for="(item, index) in [...cards]">
            <div class="card">
              <q-img @click="openLightBox(index)" class="rounded-borders-2" :src="item?.image" />
            </div>
          </template>
        </div>
      </q-card>
    </div>
  </div>


  <div class="q-mb-xl q-pb-xl text-center full-width">
    <q-btn
      icon="panorama"
      size="18px"
      style="height:50px;"
      unelevated
      rounded
      class="rounded-borders-4"
      color="primary"
      label="MORE EXPERIENCES"
    />
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
];


const gallery = computed(() => {
  let img = [];
  for (let i = 0; i < cards.length; i++) {
    img.push(cards[i]['image'])
  }
  return img
})
const EasyLightboxRef = ref(null);
const openLightBox = (index = 0) => {
  EasyLightboxRef.value?.showImage(index);
  // EasyLightboxRef.value?.showMultiple(gallery, 0)
  // console.log(EasyLightboxRef)
};

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
    column-count: 2;
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

</style>
<style scoped>
.content-page-section {
  padding-bottom: 80px;
}

.content-page-section p {
  margin-bottom: 25px;
}

.card-box {
  min-height: 600px;
}

.text-box h3 {
  font-size: 22px;
  font-weight: 700;
  /* margin-bottom: 10px; */
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
  /* padding-top: 85px; */
  padding-bottom: 50px;
}
.bg-light-grey {
  background-color: #f8f8f8;
}
</style>
