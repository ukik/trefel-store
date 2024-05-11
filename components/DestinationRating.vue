<template>
  <q-badge floating class="rounded-borders-2" style="right:20px; top:-20px;">
    <q-rating class="q-pa-sm" readonly v-model="item.rating" size="xs" :max="5" color="white"></q-rating>
  </q-badge>
</template>

<script setup>
const item = defineProps(['rating'])
</script>