<template>
  <!-- <main> -->
  <InnerBanner :_title="content?.title"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div
    class="row justify-center q-mb-xl"
    :class="[$q.screen.width > 768 ? 'q-pb-lg' : 'q-pb-lg']"
  >
    <div
      class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 q-mb-lg">
        <q-card flat class="rounded-borders-2">
          <q-img
            loading="lazy"
            :ratio="16 / 9"
            class="card-box"
            src="assets/images/img30.jpg"
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                Cannot load image
              </div>
            </template>

            <div class="absolute-bottom bg-transparent flex justify-center items-end">
              <q-banner class="rounded-borders-2 text-dark q-pa-lg">
                <template v-slot:avatar>
                  <h2>
                    <font-awesome class="text-grey-5" :icon="['fas', 'quote-left']" />
                  </h2>
                </template>
                <q-item-label lines="3">
                  Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis
                  voluptas, harum officia ante aliquet blanditiis scelerisque donec illo
                  aperiam commodi hymenaeos.
                </q-item-label>
              </q-banner>
            </div>
          </q-img>
        </q-card>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div class="section-head q-mb-xl">
          <div class="sub-title">QUESTIONS / ANSWERS</div>
          <h2 class="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p>
            Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores
            platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident
            laoreet nesciunt odio voluptates etiam, omnis.
          </p>
        </div>

        <q-expansion-item
          class="shadow-0 overflow-hidden q-mb-lg"
          style="border-radius: 30px"
          label="HOW CAN I PAY FOR MY BOOKING?"
          header-class="bg-primary text-white "
          expand-icon-class="text-white"
        >
          <q-card flat class="bg-grey-1">
            <q-card-section>
              <q-item-label lines="3">
                Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis
                voluptas, harum officia ante aliquet blanditiis scelerisque donec illo
                aperiam commodi hymenaeos.
              </q-item-label>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="shadow-0 overflow-hidden q-mb-lg"
          style="border-radius: 30px"
          label="WHAT ARE ACCEPTABLE PAYMENT METHOD?"
          header-class="bg-primary text-white "
          expand-icon-class="text-white"
        >
          <q-card flat class="bg-grey-1">
            <q-card-section>
              <q-item-label lines="3">
                Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis
                voluptas, harum officia ante aliquet blanditiis scelerisque donec illo
                aperiam commodi hymenaeos.
              </q-item-label>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="shadow-0 overflow-hidden"
          style="border-radius: 30px"
          label="How we provide services for you ?"
          header-class="bg-primary text-white "
          expand-icon-class="text-white"
        >
          <q-card flat class="bg-grey-1">
            <q-card-section>
              <q-item-label lines="3">
                Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis
                voluptas, harum officia ante aliquet blanditiis scelerisque donec illo
                aperiam commodi hymenaeos.
              </q-item-label>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </div>

  <div class="content-page-section row justify-center bg-light-grey">
    <div
      class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div class="section-heading col-12 text-center q-mt-xl">
        <h5 class="sub-title q-mt-lg">BENEFITS &amp; AIM</h5>
        <h2 class="section-title">BENEFITS AND WHAT WE DO?</h2>
        <p>
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
          Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
        </p>
      </div>

      <template v-for="(item, index) in content?.faq2">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <q-expansion-item
            default-opened
            class="shadow-0 overflow-hidden"
            style="border-radius: 30px"
            :label="item?.title"
            header-class="bg-primary text-white "
            expand-icon-class="text-white"
          >
            <q-card flat>
              <q-card-section>
                <q-item-label lines="3">
                  Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis
                  voluptas, harum officia ante aliquet blanditiis scelerisque donec illo
                  aperiam commodi hymenaeos.
                </q-item-label>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </template>
    </div>
  </div>

  <!-- Call To Action -->
  <!-- <div class="call-action-box bg-color-callback bg-light-grey row justify-center">
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
  </div> -->

  <!-- </main> -->
</template>

<script setup>
const content = {
  title: "FAQ",
  faq2: [
    {
      id: "1",
      title: "WHAT OUR TERMS AND CONDITION?",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      title: "How do we manage to fund charity ?",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      title: "DO I HAVE TO MAKE RESERVATION?",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      title: "How did we manage your fund raised ?",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      title: "WHAT BENEFITS YOU GET FRIM BOOKING?",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
    },
    {
      id: "1",
      title: "How to donate your money for charity ?",
      subtitle:
        "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
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
  padding-bottom: 85px;
}
.bg-light-grey {
  background-color: #f8f8f8;
}
</style>
