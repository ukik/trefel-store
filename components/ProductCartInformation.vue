<template>
  <div class="q-mt-lg q-py-none">
    <q-list bordered>
      <q-expansion-item group="somegroup" header-class="bg-grey-1">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">1</q-avatar>
          </q-item-section>

          <q-item-section class="text-h5 text-dark"> YOUR DETAILS </q-item-section>
        </template>
        <q-separator />

        <q-card>
          <q-card-section>
            <FormBookingPackageFull></FormBookingPackageFull>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="somegroup" header-class="bg-grey-1">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">2</q-avatar>
          </q-item-section>

          <q-item-section class="text-h5 text-dark"> PAYMENT INFORMATION </q-item-section>
        </template>
        <q-separator />
        <q-card>
          <q-card-section>
            <FormBookingPackageFull></FormBookingPackageFull>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="somegroup" header-class="bg-grey-1">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">2</q-avatar>
          </q-item-section>

          <q-item-section class="text-h5 text-dark"> BILLING ADDRESS </q-item-section>
        </template>
        <q-separator />
        <q-card>
          <q-card-section>
            <FormBookingPackageFull></FormBookingPackageFull>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <q-card flat bordered class="q-mt-lg">
      <q-card-actions class="q-pa-md" align="right">
        <q-btn
          size="18px"
          class="rounded-borders-3"
          style="height: 46.28px; padding: 0px 20px"
          dense
          icon="shopping_cart_checkout"
          color="primary"
          label="CHECKOUT"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
