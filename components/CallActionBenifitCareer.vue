<template>

<div class="call-action-box bg-color-callback bg-light-grey row justify-center">
    <div class="col-lg-8 text-center q-px-md row justify-center">
      <h5 class="col-12">BENEFITS FROM US</h5>
      <h2 class="q-py-lg col-12">WHY JOIN US !</h2>
      <p class="col-xl-9 col-lg-9 col-md-9 col-sm-11 col-12">
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
        Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
      </p>

      <div class="q-mt-xl col-12 row justify-center q-col-gutter-lg">
        <template v-for="(item, index) in career_reasons">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
            <q-card flat bordered class="rounded-borders-3">
              <q-card-section>
                <div class="full-width text-center q-mt-md">
                  <q-avatar
                    size="80px"
                    font-size="45px"
                    color="primary"
                    text-color="white"
                    :icon="item?.icon"
                  />
                </div>
                <div class="text-box text-center q-my-lg full-width q-px-sm">
                  <h3>{{ item?.title }}</h3>
                  <q-item-label lines="4">{{ item?.subtitle }}</q-item-label>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </div>
    </div>
  </div>

</template>

<script setup>
const { _career_reasons } = defineProps(['_career_reasons'])
const career_reasons = _career_reasons
</script>

<style scoped>

.text-box h3 {
  font-size: 22px;
  font-weight: 700;
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
