<template>
  <q-img :ratio="1" height="400px" class="q-mt-xl rounded-borders-2" src="https://cdn.quasar.dev/img/parallax2.jpg">
    <div class="absolute-full"></div>
    <div class="absolute-top bg-transparent" style="padding:0px;">
      <q-item>
        <q-item-section>
          <div class="absolute-full dimmed"></div>
          <q-item-label class="text-center">
            <q-chip
              icon="task_alt"
              dense
              outline
              color="white"
              size="18px"
              class="rounded-borders-4 q-pa-lg q-my-sm"
              label="EXTRA PACKAGE"
            ></q-chip>
          </q-item-label>
        </q-item-section>
      </q-item>

      <div class="bg-transparent">
        <q-list>
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
              <q-icon color="white" name="done" />
            </q-item-section>
            <q-item-section>{{ i }}</q-item-section>
          </q-item>
        </template>
        </q-list>
      </div>
    </div>
  </q-img>
</template>
