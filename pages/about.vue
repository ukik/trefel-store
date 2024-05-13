<template>
  <InnerBanner _title="ABOUT US"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
      class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
        <AboutContent></AboutContent>
        <AboutBrands></AboutBrands>
      </div>

      <div class="col items-start">
        <div
          class="row"
          :class="[$q.screen.width > 768 ? 'q-col-gutter-lg' : 'q-col-gutter-lg']"
        >
          <template v-for="(item, index) in side">
            <div
              class="col-xl-12 col-lg-12 q-md-12 col-12 row"
              :class="[isSM() ? 'col-sm-6' : '', isMD() ? 'col-sm-12' : '']"
            >
              <q-card flat bordered class="rounded-borders-2">
                <q-card-actions align="center">
                  <div class="full-width text-center q-mt-md">
                    <q-avatar
                      size="100px"
                      font-size="45px"
                      color="blue"
                      text-color="white"
                      :icon="item?.icon"
                    />
                  </div>
                  <div class="text-box text-center q-my-lg full-width q-px-sm">
                    <h3>{{ item?.title }}</h3>
                    <q-item-label lines="4">{{ item?.subtitle }}</q-item-label>
                  </div>
                </q-card-actions>
              </q-card>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- Call To Action -->
  <CallActionPromo></CallActionPromo>
</template>

<script>
import globalMixin from "@/plugins/mixins/globalMixin";
export default {
  mixins: [globalMixin],
};
</script>

<script setup>
// // import { useNuxtApp } from '#app';

// // const nuxtApp = useNuxtApp();

// // const handleNavigate = () => {
// //   console.log('nuxtApp', nuxtApp)
// // }

// // onMounted(() => {
// //   console.log('onMounted About');
// //   console.log('nuxtApp', nuxtApp)
// // })
// const nuxtApp = useNuxtApp()

// onMounted(() => {
//   console.log('onMounted About');
//   console.log('nuxtApp', nuxtApp)
// })

const content = `<p>
            Assumenda mattis condimentum morbi ipsam felis orci, urna placeat blandit
            dictum amet? Leo magni magna sint erat tenetur! Parturient. Explicabo,
            hendrerit distinctio fugit excepteur consectetur diamlorem? Possimus magnis
            wisi officiis impedit egestas, curabitur tempor eiusmod fugiat, posuere elit
            consectetur non dicta adipisicing corporis rerum hymenaeos nam! Dolores
            expedita massa, bibendum? Vulputate porta odit, pretium quos sequi? Ipsum
            possimus nesciunt tempora! Harum voluptas commodo laoreet vestibulum. Integer
            earum dolorem fusce pretium, sociis aliquid? Dicta illo dolor molestias
            posuere minima iure bibendum? Nec, condimentum laboriosam vulputate venenatis
            euismod commodo justo, minima voluptatem, nulla ex aliqua unde sollicitudin
            pellentesque! Labore mus? Vivamus earum.
          </p>
          <p>
            Architecto reprehenderit veniam curae, auctor donec, sapiente! Mus. Vero.
            Molestiae natus dictumst, deleniti. Consequuntur odit vulputate aliquet mi,
            sociis litora eaque dolore optio venenatis quos dolore provident mollis,
            mollis fringilla accusamus sequi cumque pellentesque porttitor tincidunt odit
            eros do omnis? Voluptas ex ex aliqua auctor habitant! Lobortis, urna.
            Consequat libero interdum! Cillum! Phasellus autem, temporibus potenti. Sunt
            architecto sit maecenas! Scelerisque integer incidunt perspiciatis ridiculus
            nostrud aliquam optio nec quam, non assumenda, iusto iure? Quibusdam rem,
            doloribus, augue, saepe mi vehicula parturient aliquam eiusmod. Eveniet, quos
            luctus bibendum saepe ab! Asperiores est sem diamlorem maiores velit!
            Habitasse sint ex perferendis.
          </p>
          <ul>
            <li>
              Purus sequi accusamus? Nibh aut perspiciatis, lorem lorem perspiciatis.
            </li>
            <li>Dictum? Posuere cumque sed illum facilisis leo illum facilisis.</li>
            <li>
              Neque officiis feugiat praesentium qui, aliqua hic commodo praesentium.
            </li>
            <li>
              Asperiores irure class lobortis veritatis, alias sem lobortis veritatis.
            </li>
            <li>Ipsum eros quaerat deserunt proin porttitor, fugit ultrices.</li>
            <li>
              Volutpat, justo mollit ullamco sagittis duis enim labore, ullamcorper dicta
            </li>
          </ul>
          <p>
            Sequi sociis leo, interdum eos ipsa pharetra, unde fringilla erat vulputate
            litora nisl adipisicing primis consectetuer erat aliqua reprehenderit unde
            accusamus earum sollicitudin voluptatum wisi vulputate deleniti, accusamus,
            animi rutrum. Labore et! Odit, nunc nostra, excepturi dui netus, euismod
            pariatur? Proin vivamus diamlorem natoque reprehenderit vivamus diamlorem
            natpo.
          </p>`;

const side = [
  {
    id: "1",
    icon: "directions_bike",
    title: "AFFORDABLE TOURS",
    subtitle:
      "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
  },
  {
    id: "1",
    icon: "sailing",
    title: "BEST TOUR GUIDES",
    subtitle:
      "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
  },
  {
    id: "1",
    icon: "volunteer_activism",
    title: "PERSONAL TOUCH",
    subtitle:
      "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
  },
  {
    id: "1",
    icon: "support_agent",
    title: "FRIENDLY SERVICE",
    subtitle:
      "Donec temporibus consectetuer, repudiandae integer pellentesque aliquet justo at sequi, atque quasi.",
  },
];
</script>

<style scoped>
.content-page-section {
  padding-bottom: 80px;
}

.content-page-section p {
  margin-bottom: 25px;
}

h2 {
  font-size: 40px;
  font-weight: 800;
}

/* p {
  line-height: 1.6;
  margin: 0 0 15px;
  word-wrap: break-word;
} */

h3 {
  font-size: 22px;
  font-weight: 700;
}

.q-item__label {
  line-height: 1.6 !important;
}
</style>
