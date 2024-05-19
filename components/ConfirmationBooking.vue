<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.form-box {
  color: white;
  h5 {
    color: white;
    font-size: 16px;
  }
  h2 {
    color: white;
  }
}
h2, h3, h4 {
  font-size: 28px;
  font-weight: 500;
}
</style>
<template>
    <h2 class="q-mt-xl">
    <!-- <q-avatar color="form"><span class="text-white text-bold">2</span></q-avatar>  -->
    VIEW BOOKING DETAILS</h2>
    <q-item :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <q-item-section>
        <q-item-label>https://www.traveler.com/index.html</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="list" />
      </q-item-section>
    </q-item>


</template>

<script setup>
const payloads = [

];
</script>
