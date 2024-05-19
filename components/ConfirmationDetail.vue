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
h2 {
  font-size: 28px;
  font-weight: 500;
}
</style>
<template>
    <h2>
    <!-- <q-avatar color="form"><span class="text-white text-bold">1</span></q-avatar>  -->
    BOOKING DETAILS</h2>
  <table>
    <!-- <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr> -->
    <template v-for="(item, index) in payloads">
      <tr>
        <td class="text-bold">{{item?.label}}</td>
        <td>{{item?.value}}</td>
      </tr>
    </template>
  </table>
</template>

<script setup>
const payloads = [
  {
    label: "Booking id",
    value: "QSD-8DE-44",
  },
  {
    label: "Full Name",
    value: "David",
  },
  {
    label: "Email",
    value: "info@company.com",
  },
  {
    label: "Phone",
    value: "044 - 222 - 666 - 777",
  },
  {
    label: "Card number",
    value: "XXX-XXXX-XXX-08",
  },
  {
    label: "Country",
    value: "Europe",
  },
  {
    label: "Zip Code",
    value: "9764",
  },
  {
    label: "Address",
    value: "3146 Koontz, California",
  },
];
</script>
