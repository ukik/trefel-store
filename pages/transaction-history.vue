<template>
  <InnerBanner _title="RIWAYAT"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
      class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425
          ? 'q-col-gutter-lgX'
          : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lgX' : '',
      ]"
    >
      <q-card flat class="col-auto">
        <q-tabs
          keep-alive
          dense
          inline-label
          class="bg-blue-4 text-white shadow-2"
          active-class="bg-form text-white"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-route-tab
            @click="tab = 'hotel'"
            :to="{ name: 'transaction-history', query: { tab: 'hotel' } }"
            exact
            replace
            label="hotel"
          />
          <q-route-tab
            @click="tab = 'kuliner'"
            :to="{ name: 'transaction-history', query: { tab: 'kuliner' } }"
            exact
            replace
            label="kuliner"
          />
          <q-route-tab
            @click="tab = 'rental'"
            :to="{ name: 'transaction-history', query: { tab: 'rental' } }"
            exact
            replace
            label="rental"
          />
          <q-route-tab
            @click="tab = 'suvenir'"
            :to="{ name: 'transaction-history', query: { tab: 'suvenir' } }"
            exact
            replace
            label="suvenir"
          />
          <q-route-tab
            @click="tab = 'talent'"
            :to="{ name: 'transaction-history', query: { tab: 'talent' } }"
            exact
            replace
            label="talent"
          />
          <q-route-tab
            @click="tab = 'travel'"
            :to="{ name: 'transaction-history', query: { tab: 'travel' } }"
            exact
            replace
            label="travel"
          />
        </q-tabs>
      </q-card>

      <q-tab-panels class="col-12 " :class="[$q.screen.width > 425 ? 'q-mt-xl' : '']" v-model="tab" animated>
        <q-tab-panel name="hotel" :class="[$q.screen.width > 425 ? '' : 'q-pa-none']" >
          <TransactionHistoryProduct></TransactionHistoryProduct>
        </q-tab-panel>

        <q-tab-panel name="kuliner" :class="[$q.screen.width > 425 ? '' : 'q-pa-none']" >
          <TransactionHistoryProduct></TransactionHistoryProduct>
        </q-tab-panel>

        <q-tab-panel name="rental" :class="[$q.screen.width > 425 ? '' : 'q-pa-none']" >
          <TransactionHistoryProduct></TransactionHistoryProduct>
        </q-tab-panel>

        <q-tab-panel name="suvenir" :class="[$q.screen.width > 425 ? '' : 'q-pa-none']" >
          <TransactionHistoryProduct></TransactionHistoryProduct>
        </q-tab-panel>

        <q-tab-panel name="talent" :class="[$q.screen.width > 425 ? '' : 'q-pa-none']" >
          <TransactionHistoryProduct></TransactionHistoryProduct>
        </q-tab-panel>

        <q-tab-panel name="travel" :class="[$q.screen.width > 425 ? '' : 'q-pa-none']" >
          <TransactionHistoryProduct></TransactionHistoryProduct>
        </q-tab-panel>
      </q-tab-panels>

      <!-- <ProductCartInformation></ProductCartInformation> -->
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter()
const tab = ref("");
tab.value = route.query?.tab;
onMounted(() => {
  if(tab.value != 'hotel' || tab.value != 'kuliner'  || tab.value != 'rental'  || tab.value != 'suvenir'  || tab.value != 'talent'  || tab.value != 'travel' ) {
    router.replace({ query: { tab: 'hotel' } })
    tab.value = 'hotel';
  }
})

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
</style>
