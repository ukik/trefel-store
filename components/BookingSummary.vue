<template>
  <q-card flat bordered class="booking-section q-pa-md  rounded-borders-2 bg-grey-1">
    <q-card-actions align="center">
      <q-chip id="summary-title" class="rounded-borders-2 full-width row justify-center" rounded label="SUMMARY" color="form" text-color="white" size="lg"></q-chip>
    </q-card-actions>
    <q-list separator padding>
        <q-item>
            <q-item-section>
                <q-item-label class="text-bold" lines="1">Packages cost</q-item-label>
            </q-item-section>
            <q-item-section side>
                $1000
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section>
                <q-item-label class="text-bold" lines="1">Dedicated tour guide</q-item-label>
            </q-item-section>
            <q-item-section side>
                $1000
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section>
                <q-item-label class="text-bold" lines="1">Insurance</q-item-label>
            </q-item-section>
            <q-item-section side>
                $1000
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section>
                <q-item-label class="text-bold" lines="1">tax</q-item-label>
            </q-item-section>
            <q-item-section side>
                12%
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section>
                <q-item-label class="text-bold" lines="1">Total cost</q-item-label>
            </q-item-section>
            <q-item-section side>
                12%
            </q-item-section>
        </q-item>
    </q-list>
  </q-card>
</template>

<style>
#summary-title .ellipsis {
    width: 100%;
    text-align: center;
}
</style>