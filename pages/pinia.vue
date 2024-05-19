<template>
  <div style="padding-top:500px">
    {{ test.value }}
    <br>
    {{ countStore?.counter }}
    <q-btn label="ADD" @click="countStore.setNewValue(10000)"></q-btn>
  </div>
</template>

<script setup lang="ts">
import { useTest } from "~/stores/test";
const test = useTest();

const countStore = useCountStore();
</script>
