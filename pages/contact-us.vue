<template>
  <!-- <main> -->
  <InnerBanner :_title="content?.title"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
      class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div class="section-heading">
          <h5 class="text-primary">GET IN TOUCH</h5>
          <h2 class="section-title">REACH &amp; CONTACT US!</h2>
          <p>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
            Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent. Eget
            feugiat error necessitatibus taciti..
          </p>
        </div>
        <q-btn round color="primary" size="16px" dense class="q-mr-sm"
          ><font-awesome :icon="['fab', 'instagram']"
        /></q-btn>
        <q-btn round color="primary" size="16px" dense class="q-mr-sm"
          ><font-awesome :icon="['fab', 'whatsapp']"
        /></q-btn>
        <q-btn round color="primary" size="16px" dense class="q-mr-sm"
          ><font-awesome :icon="['fab', 'facebook-f']"
        /></q-btn>
        <q-btn round color="primary" size="16px" dense class="q-mr-sm"
          ><font-awesome :icon="['fab', 'x-twitter']"
        /></q-btn>
        <q-btn round color="primary" size="16px" dense class="q-mr-sm"
          ><font-awesome :icon="['fab', 'tiktok']"
        /></q-btn>
        <ContactUsGoogleMap />
      </div>

      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <ContactUsForm />
      </div>
    </div>
  </div>

  <!-- Call To Action -->
  <div class="content-page-section row justify-center bg-light-grey">
    <div
      class="row justify-start col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"      
    >
      <div class="section-heading col-12 text-center q-mt-xl">
        <h5 class="sub-title q-mt-lg">CONSULT WITH US</h5>
        <h2 class="section-title">NEED TO KNOW MORE</h2>
        <p>
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
          Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
        </p>
      </div>

      <!-- <template v-for="i in 3"> -->

      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
        <q-card flat bordered class="rounded-borders-2 q-py-lg">
          <q-card-section class="text-center q-mt-sm">
            <q-avatar
              size="80px"
              font-size="45px"
              color="blue"
              text-color="white"
              icon="email"
            />
          </q-card-section>
          <q-card-section class="text-center q-mt-sm">
            <h6>PHONE NUMBER</h6>
            <div style="height: 48px">
              <q-btn
                dense
                capitalize
                flat
                href="mailto:support@gmail.com"
                label="support@gmail.com"
                push
                color="dark"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
        <q-card flat bordered class="rounded-borders-2 q-py-lg">
          <q-card-section class="text-center q-mt-sm">
            <q-avatar
              size="80px"
              font-size="45px"
              color="blue"
              text-color="white"
              icon="phone"
            />
          </q-card-section>
          <q-card-section class="text-center q-mt-sm">
            <h6>EMAIL ADDRESS</h6>
            <div style="height: 48px">
              <q-btn
                dense
                capitalize
                flat
                href="mailto:support@gmail.com"
                label="support@gmail.com"
                push
                color="dark"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <q-card flat bordered class="rounded-borders-2 q-py-lg">
          <q-card-section class="text-center q-mt-sm">
            <q-avatar
              size="80px"
              font-size="45px"
              color="blue"
              text-color="white"
              icon="location_on"
            />
          </q-card-section>
          <q-card-section class="text-center q-mt-sm">
            <h6>ADDRESS LOCATION</h6>
            <q-item-label style="height: 48px" class="q-px-md"
              >Jl. Raya Sitirejo No. 9 Sitirejo, Wagir, Malang, Jawa Timur
              65158</q-item-label
            >
          </q-card-section>
        </q-card>
      </div>
      <!-- </div> -->
      <!-- </template> -->
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
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
