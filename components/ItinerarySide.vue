<template>
  <q-list v-for="i in 2" bordered separator class="rounded-borders q-mt-lg">
    <q-item-label header class="text-h6 text-weight-normal">DAY {{ i }}</q-item-label>
    <q-separator></q-separator>
    <template v-for="i in 10">
      <q-item v-ripple="false">
        <q-item-section avatar top>
          <q-avatar icon="check" color="blue-4" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">DAY 1 Departure at the airport and arrival at the hotel</q-item-label>
          <q-item-label caption>February 22nd, 2019</q-item-label>
        </q-item-section>

        <!-- <q-item-section side>
        <q-icon name="info" color="green" />
      </q-item-section> -->
      </q-item>
    </template>
  </q-list>
</template>
