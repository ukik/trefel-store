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
      <!-- <q-card> -->
      <q-tabs
        keep-alive
        dense
        class="text-grey col-12"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-route-tab
          :to="{ name: 'transaction-history-hotel', query: { tab: '1' } }"
          exact
          replace
          label="hotel"
        />
        <q-route-tab
          :to="{ name: 'transaction-history-kuliner', query: { tab: '2' } }"
          exact
          replace
          label="kuliner"
        />
        <q-route-tab
          :to="{ name: 'transaction-history-rental', query: { tab: '1' } }"
          exact
          replace
          label="rental"
        />
        <q-route-tab
          :to="{ name: 'transaction-history-suvenir', query: { tab: '2' } }"
          exact
          replace
          label="suvenir"
        />
        <q-route-tab
          :to="{ name: 'transaction-history-talent', query: { tab: '2' } }"
          exact
          replace
          label="talent"
        />
        <q-route-tab
          :to="{ name: 'transaction-history-travel', query: { tab: '2' } }"
          exact
          replace
          label="travel"
        />
        <!-- <q-route-tab :to="{ query: { tab: '3' } }" exact replace label="Navigate to the second tab" @click="navRedirect" />
          <q-route-tab :to="{ query: { tab: '4' } }" exact replace label="Navigate immediately"/> -->
      </q-tabs>
      <!-- </q-card> -->

      <q-separator />
      
      <RouterView></RouterView>

      <q-tab-panels class="col-12" v-model="tab" animated>
        <q-tab-panel name="transaction-history-hotel">
          <TransactionHistoryProduct></TransactionHistoryProduct>
        </q-tab-panel>
      </q-tab-panels>

      <!-- <ProductCartInformation></ProductCartInformation> -->
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const tab = ref("");
tab.value = route.name;

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
