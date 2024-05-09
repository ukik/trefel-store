<template>
  <!-- <main> -->
  <InnerBanner :_title="content?.title"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
      class="row justify-center col-xl-8 col-lg-10 col-md-9 col-sm-12 col-11"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg q-px-md' : 'q-gutter-y-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div
        v-for="(item, index) in content?.cards"
        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
      >
        <q-card flat bordered class="rounded-borders-2 q-pa-md">
          <q-card-actions>
            <q-rating flat
              readonly
              v-model="rating"
              size="sm"
              :max="5"
              color="primary"
            ></q-rating>
          </q-card-actions>
          <q-card-actions>
            <q-item-label :style="$q.screen.width > 768 ? 'height:72px;' : 'height:auto;'" :lines="$q.screen.width > 768 ? 3 : 100">{{ item?.subtitle }}</q-item-label>
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
          <!-- <q-img loading="lazy" :ratio="16 / 9" class="card-box" :src="item?.image">
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                Cannot load image
              </div>
            </template>

            <div class="absolute-full bg-transparent flex justify-center items-end">
              <q-card
                flat
                class="text-box text-center text-dark q-mt-lg full-width rounded-borders-2"
              >
                <q-card-section>
                  <q-btn-group spread flat rounded unelevated class="q-px-xl">
                    <q-btn color="primary" size="16px" dense class="q-pl-lg q-pr-md"
                      ><font-awesome :icon="['fab', 'instagram']"
                    /></q-btn>
                    <q-btn color="primary" size="16px" dense class="q-px-md"
                      ><font-awesome :icon="['fab', 'whatsapp']"
                    /></q-btn>
                    <q-btn color="primary" size="16px" dense class="q-px-md"
                      ><font-awesome :icon="['fab', 'facebook-f']"
                    /></q-btn>
                    <q-btn color="primary" size="16px" dense class="q-px-md"
                      ><font-awesome :icon="['fab', 'x-twitter']"
                    /></q-btn>
                    <q-btn color="primary" size="16px" dense class="q-pr-lg q-pl-md"
                      ><font-awesome :icon="['fab', 'tiktok']"
                    /></q-btn>
                  </q-btn-group>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <h3>{{ item?.title }}</h3>
                  <q-btn
                    size="md"
                    color="primary"
                    class="text-weight-light"
                    flat
                    label="Travel Agent"
                  ></q-btn>
                  <q-item-label lines="2">{{ item?.subtitle }}</q-item-label>
                </q-card-section>
              </q-card>
            </div>
          </q-img> -->
        </q-card>
      </div>
    </div>
  </div>
  <!-- Call To Action -->
  <div class="call-action-box bg-color-callback bg-light-grey row justify-center">
    <div class="col-lg-8 text-center q-px-md">
      <h5>CALL TO ACTION</h5>
      <h2 class="q-py-lg">READY FOR UNFORGATABLE TRAVEL. REMEMBER US!</h2>
      <p>
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
        Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>
      <div class="q-mt-xl">
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
          color="primary"
          label="Learn More"
        />
      </div>
    </div>
  </div>

  <!-- </main> -->
</template>

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
    {
      id: "1",
      title: "Mr. Bean",
      image: "assets/images/img31.jpg",
      subtitle:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.`,
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
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.`,
    },
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
  padding-bottom: 85px;
}
.bg-light-grey {
  background-color: #f8f8f8;
}
</style>
