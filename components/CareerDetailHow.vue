<template>
  <q-card flat bordered :ratio="1" style="height: 350px" class="rounded-borders-2">
    <q-card-actions class="bg-grey-4" align="center">
      <q-chip
        dense
        color="white"
        size="18px"
        class="rounded-borders-4 q-pa-lg q-my-sm"
        label="HOW TO APPLY"
      ></q-chip>
    </q-card-actions>
    <q-separator></q-separator>
    <div class="bg-transparent">
      <q-list separator>
        <template
          v-for="i in [
            'Vacation Packages',
            'Homeymoon Packages',
            'New Year Packages',
            'Weekend Packages',
            'Business Packages',
          ]"
        >
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="chevron_right" />
            </q-item-section>
            <q-item-section>{{ i }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>
  </q-card>
</template>
