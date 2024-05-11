<template>
  <!-- Call To Action -->
  <div class="call-action-box bg-color-callback row justify-center">
    <div class="col-xl-6 col-lg-8 col-md-11 col-sm-12 col-12 text-center q-px-md">
      <h6 class="text-blue">UNCOVER PLACE</h6>
      <h2>POPULAR DESTINATION</h2>
      <p>
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
        Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>
    </div>
  </div>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
      class="row justify-start col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
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

            <div class="absolute-full bg-transparent flex justify-center items-end">
              <q-card
                flat
                class="text-box text-left text-dark q-mt-lg full-width rounded-borders-2"
              >
                <q-card-section>
                  <DestinationRating :rating="4"></DestinationRating>

                  <q-btn
                    dense
                    size="md"
                    color="primary"
                    class="text-weight-light"
                    flat
                    label="Travel Agent"
                  ></q-btn>
                  <h3 class="q-pb-md q-pt-xs">{{ item?.title }}</h3>
                  <q-item-label lines="2">{{ item?.subtitle }}</q-item-label>
                </q-card-section>
              </q-card>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </div>

  <div class="q-mb-xl q-pb-xl text-center full-width">
    <q-btn
      icon="location_on"
      size="18px"
      style="height:50px;"
      unelevated
      rounded
      class="rounded-borders-4"
      color="primary"
      label="MORE DESTINATION"
    />
  </div>
  <!-- </main> -->
</template>

<script setup>
const content = {
  title: "DESTINATION",
  cards: [
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
    // {
    //   id: "1",
    //   title: "Mr. Bean",
    //   image: "assets/images/img13.jpg",
    //   subtitle:
    //     "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    // },
    // {
    //   id: "1",
    //   title: "Mr. Bean",
    //   image: "assets/images/img17.jpg",
    //   subtitle:
    //     "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    // },
    // {
    //   id: "1",
    //   title: "Mr. Bean",
    //   image: "assets/images/img10.jpg",
    //   subtitle:
    //     "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
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
  min-height: 500px;
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
</style>
