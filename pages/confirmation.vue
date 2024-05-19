<template>
  <InnerBanner _title="PACKAGE DETAIL"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
      class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div class="col-12">
        <ConfirmationPaymentBanner icon="refresh" color="bg-form" title="PAYMENT WAITING"></ConfirmationPaymentBanner>
        <ConfirmationPaymentBanner icon="check_circle_outline" color="bg-positive" title="PAYMENT CONFIRMED"></ConfirmationPaymentBanner>
        <ConfirmationPaymentBanner icon="highlight_off" color="bg-orange" title="PAYMENT TIMEOUT"></ConfirmationPaymentBanner>
        <ConfirmationPaymentBanner icon="block" color="bg-negative" title="PAYMENT CANCELLED"></ConfirmationPaymentBanner>
      </div>
      <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
        <ConfirmationDetail></ConfirmationDetail>
        <ConfirmationPayment></ConfirmationPayment>
        <ConfirmationBooking></ConfirmationBooking>
        <!-- <SinglePageContent></SinglePageContent> -->
      </div>
      <div class="col" :class="[$q.screen.width > 768 ? '' : 'row']">
        <BookingSummary></BookingSummary>
        <q-card flat bordered class="booking-section q-py-xl rounded-borders-2 bg-grey-1 q-mt-xl">
          <q-card-actions align="center">
              <q-icon size="80px" name="phone_forwarded"></q-icon>
          </q-card-actions>
          <q-card-actions align="center">
            <div class="support-content text-center">
              <h5>HELP AND SUPPORT</h5>
              <a href="telto:12345678" class="phone">+55 123 987 00</a>
              <small>Monday to Friday 9.00am - 7.30pm</small>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
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

.booking-section .support-content .phone {
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  display: block;
  margin-bottom: 10px;
  color: #223645;
  line-height: 1;
  font-weight: 700;
}
.booking-section .support-content h5 {
  color: #383838;
  font-weight: 400;
}
h5 {
  font-size: 16px;
}
small {
  font-size: 80%;
}
</style>
