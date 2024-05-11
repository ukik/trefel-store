<template>
  <q-card
    flat
    bordered
    :ratio="1"
    style="height: 350px"
    class="rounded-borders-2 bg-form"
  >
    <q-card-actions align="center">
      <q-chip
        dense
        color="white"
        size="18px"
        class="rounded-borders-4 q-pa-lg q-my-sm"
        label="SUMMARY"
      ></q-chip>
    </q-card-actions>
    <q-separator color="white"></q-separator>
    <q-list class="text-white">
      <q-item>
        <q-item-section>
          <q-item-label>Position: </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label class="text-white">TRAVEL GUIDE </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Status: </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label class="text-white">INTERSHIP / TRIAL / EXPERT </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Time: </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label class="text-white">FULL TIME / PART TIME </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Salary: </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label class="text-white">AVAILABLE </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Code: </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label class="text-white">#42562 </q-item-label>
        </q-item-section>
      </q-item>

      <!-- <q-separator color="white"></q-separator> -->
    </q-list>
  </q-card>
</template>
