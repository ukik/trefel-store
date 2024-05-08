<template>
    <InnerBanner _title="CART"></InnerBanner>

    <!-- ***Inner Banner html end here*** -->
    <div class="content-page-section row justify-center">
      <div
        class="q-col-gutter-md col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12" >
            <FormBookingPackageFull></FormBookingPackageFull>
            <FormBookingPackageFull></FormBookingPackageFull>
            <FormBookingPackageFull></FormBookingPackageFull>
      </div>
    </div>
</template>

<script setup>

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
