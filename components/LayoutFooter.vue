<template>
  <q-no-ssr>
    <EasyLightbox :_gallery="gallery" ref="EasyLightboxRef"></EasyLightbox>
  </q-no-ssr>

  <div class="site-footer row justify-center">
    <div
      class="row justify-start col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
        <div class="footer-logo q-mb-lg">
          <a href="index.html"><img src="assets/images/site-logo.png" alt="" /></a>
        </div>
        <q-item-label class="text-white">
          Urna ratione ante harum provident, eleifend, vulputate molestiae proin
          fringilla, praesentium magna conubia at perferendis, pretium, aenean aut
          ultrices.
        </q-item-label>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
        <q-list class="text-white footer-primary">
          <q-item-label class="text-white q-px-none widget-title" header
            >RECENT POST</q-item-label
          >

          <q-item v-for="i in 2" clickable v-ripple>
            <q-item-section top thumbnail>
              <img
                class="rounded-borders-1"
                style="height: 75px; width: 75px"
                src="https://cdn.quasar.dev/img/mountains.jpg"
              />
            </q-item-section>

            <q-item-section top>
              <q-item-label class="text-uppercase" lines="2"
                >Apa JOURNEY TO PEACEFUL PLACES</q-item-label
              >
              <q-item-label class="text-white q-mt-md" caption
                >February 17, 2022</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
        <q-list class="text-white footer-primary">
          <q-item-label class="text-white q-px-none widget-title" header
            >CONTACT US</q-item-label
          >
          <q-item-label class="q-mb-md"
            >Feel free to contact and reach us !!</q-item-label
          >

          <q-item class="q-px-xs" clickable v-ripple>
            <q-item-section side>
              <q-icon color="white" name="phone" />
            </q-item-section>
            <q-item-section>+01(988) 256 203</q-item-section>
          </q-item>

          <q-item class="q-px-xs" clickable v-ripple>
            <q-item-section side>
              <q-icon color="white" name="email" />
            </q-item-section>
            <q-item-section>info@domain.com</q-item-section>
          </q-item>

          <q-item class="q-px-xs" clickable v-ripple>
            <q-item-section side>
              <q-icon color="white" name="location_on" />
            </q-item-section>
            <q-item-section>
              <q-item-label lines="2"
                >3146 Koontz, California 3146 Koontz, California 3146 Koontz,
                California</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
        <q-list class="text-white footer-primary">
          <q-item-label
            class="text-white q-px-none widget-title"
            style="margin-bottom: 4px"
            header
            >GALLERY</q-item-label
          >
        </q-list>

        <div class="row q-col-gutter-sm">
          <div v-for="(item, index) in gallery" class="col-4">
            <q-img @click="openLightBox(index)"
              ratio="1"
              class="rounded-borders-1"
              :src="item"
            />
          </div>
        </div>
      </div>

      <div class="col-12 q-my-md">
        <div style="border-top: 1px solid rgba(255, 255, 255, 0.2)" />
      </div>

      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <q-list class="text-white footer-primary">
          <q-input
            class="q-mb-lg"
            bg-color="white"
            :loading="loading"
            outlined
            bottom-slots
            v-model="text"
            placeholder="Enter your email"
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>

            <template v-slot:after>
              <q-btn
                rounded
                outline
                :loading="loading"
                @click=""
                class="full-height"
                color="white"
                :label="$q.screen.width > 425 ? 'Subscribe' : ''"
              ></q-btn>
            </template>

            <template v-slot:hint
              ><div class="text-white">Email wajib diisi</div></template
            >
          </q-input>
        </q-list>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <q-card-actions class="q-pa-none" align="right">
          <q-btn round outline color="white" size="16px" dense class="q-mr-sm"
            ><font-awesome :icon="['fab', 'instagram']"
          /></q-btn>
          <q-btn round outline color="white" size="16px" dense class="q-mr-sm"
            ><font-awesome :icon="['fab', 'whatsapp']"
          /></q-btn>
          <q-btn round outline color="white" size="16px" dense class="q-mr-sm"
            ><font-awesome :icon="['fab', 'facebook-f']"
          /></q-btn>
          <q-btn round outline color="white" size="16px" dense class="q-mr-sm"
            ><font-awesome :icon="['fab', 'x-twitter']"
          /></q-btn>
          <q-btn round outline color="white" size="16px" dense
            ><font-awesome :icon="['fab', 'tiktok']"
          /></q-btn>
        </q-card-actions>
        <q-card-actions class="q-pa-none q-mt-sm" align="right">
          <router-link to="/">Privacy Policy</router-link>
          <q-separator class="q-mx-sm q-my-xs" vertical color="white"></q-separator>
          <router-link to="/">Term & Condition</router-link>
          <q-separator class="q-mx-sm q-my-xs" vertical color="white"></q-separator>
          <router-link to="/">FAQ</router-link>
        </q-card-actions>
      </div>
    </div>
  </div>
</template>

<script setup>
const loading = false;
const text = ref(null);

const EasyLightboxRef = ref(null);
const gallery = [
  "https://picsum.photos/500/300",
  "https://picsum.photos/500/400",
  "https://picsum.photos/500/300",
  "https://picsum.photos/500/400",
  "https://picsum.photos/500/300",
  "https://picsum.photos/500/400",
];

const openLightBox = (index = 0) => {
  EasyLightboxRef.value?.showImage(index);
  // EasyLightboxRef.value?.showMultiple(gallery, 0)
  // console.log(EasyLightboxRef)
};
</script>
<style scoped>
.site-footer {
  background-color: rgba(34, 54, 69, 0.98);
  padding-top: 80px;
}
.footer-logo img {
  height: auto;
  max-width: 100%;
  vertical-align: top;
}
.footer-primary .widget-title {
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  /* margin-bottom: 30px; */
  text-transform: uppercase;
}
a {
  color: rgba(255, 255, 255, 0.75);
}
a:hover {
  color: white;
}
.q-item__label {
  line-height: 1.6 !important;
}
</style>
