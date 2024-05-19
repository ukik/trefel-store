<template>
  <q-no-ssr class="col-12">
    <q-table id="TransactionHistoryProduct" style="min-height: 500px; max-height: 1000px;"
      flat
      bordered
      separator="cell"
      :table-header-class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
      class="my-sticky-header-table"
      :title="`Riwayat ${$route.query?.tab}`"
      :rows="[...rows, ...rows, ...rows, ...rows]"
      :columns="columns"
      row-key="id"
      selection="multiple"
      v-model:selected="selected"
      :filter="filter"
      :grid="$q.screen.width < 768"
      :hide-header="$q.screen.width < 768"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card
            bordered
            flat
            :class="props.selected ? ($q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2') : ''"
          >
            <q-card-section>
              <q-checkbox dense v-model="props.selected" :label="props.row.name" />
            </q-card-section>

            <q-img key="image" :src="props.row.image"></q-img>

            <q-separator />
            <q-list dense class="bg-white">
              <template v-for="col in props.cols.filter((col) => col.id !== 'desc')">
                <q-item v-if="col.field !== 'image'" :key="col.id">
                  <q-item-section>
                    <q-item-label class="text-bold">{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label>{{ col.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-list>
            <!-- <q-separator></q-separator>
            <q-card-section class="row bg-white" key="quantity" :props="props">
              <q-btn
                size="18px"
                color="negative"
                round
                icon="remove"
                @click="props.row.quantity = Number(props.row.quantity) - 1"
              ></q-btn>

              <q-input
                type="number"
                outlined
                class="col q-mx-md"
                input-class="text-center text-big"
                v-model="props.row.quantity"
              ></q-input>

              <q-btn
                size="18px"
                color="primary"
                round
                icon="add"
                @click="props.row.quantity = Number(props.row.quantity) + 1"
              ></q-btn>
            </q-card-section> -->
          </q-card>
        </div>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <q-checkbox v-model="props.selected" color="primary" />
          </q-td>
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="image" :props="props" @click="onRowClick(props.row)">
            <q-img width="100px" height="100px" :src="props.row.image"></q-img>
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="price" :props="props">
            {{ props.row.price }}
          </q-td>
          <!-- <q-td style="width: 300px" key="quantity" :props="props">
            <q-card-section class="row bg-white" key="quantity" :props="props">
              <q-btn
                size="18px"
                color="negative"
                round
                icon="remove"
                @click="props.row.quantity = Number(props.row.quantity) - 1; onUpdate({ key: 'quantity', index: props.key, row: props.row})"
              ></q-btn>

              <q-input
                type="number"
                outlined
                class="col q-mx-md"
                input-class="text-center text-big"
                v-model="props.row.quantity"
              ></q-input>

              <q-btn
                size="18px"
                color="primary"
                round
                icon="add"
                @click="props.row.quantity = Number(props.row.quantity) + 1; onUpdate({ key: 'quantity', index: props.key, row: props.row})"
              ></q-btn>
            </q-card-section>
          </q-td> -->
          <q-td key="sub_total" :props="props">
            <!-- <q-badge color="primary"> -->
            <div class="text-bold text-big">
              {{ props.row.quantity * props.row.price }}
            </div>
            <!-- </q-badge> -->
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-no-ssr>
</template>

<script>
import { ref } from "vue";

const columns = [
  // {
  //   name: "calories",
  //   align: "center",
  //   label: "Calories",
  //   field: "calories",
  //   sortable: true,
  // },
  // { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  // { name: "carbs", label: "Carbs (g)", field: "carbs" },
  // { name: "protein", label: "Protein (g)", field: "protein" },
  // { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "id",
    label: "ID",
    field: "id",
    sortable: true,
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "image",
    label: "Gambar",
    field: "image",
    sortable: true,
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "name",
    label: "Nama Produk",
    field: "name",
    sortable: true,
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "price",
    label: "Harga",
    field: "price",
    sortable: true,
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  // {
  //   name: "quantity",
  //   label: "Qty",
  //   field: "name",
  //   align: "left",
  //   // sortable: true,
  //   // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  // },
  {
    name: "sub_total",
    label: "Sub Total",
    field: "sub_total",
    sortable: true,
    align: "left",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

let sample = [];

for (let i = 0; i < 100; i++) {
  sample.push({
    id: i,
    image: "https://demo.stairthemes.com/html/traveler/assets/images/img5.jpg",
    name: "Frozen Yogurt",
    price: 5000,
    quantity: Math.round(Math.random() * 100),
    // sub_total: 50000,
  });
}

const rows = [...sample];

export default {
  setup() {
    return {
      onRowClick: (row) => alert(`${row.name} clicked`),
      filter: ref(""),
      selected: ref([]),
      columns,
      rows: ref(rows), // wajib ada ref, kalo tidak gak bisa di edit
    };
  },
  data() {
    return {
      // rows,
      vat: 5555,
      coupon: 0,
    };
  },
  methods: {
    onAdd({ key, index, row }) {
      this.rows[index][key] += 1;
    },
    onUpdate({ key, index, row }) {
      console.log('onUpdate', key, index, row)
    },
  },
  mounted() {
    this.$q.dark.set(false);
  },
  computed: {
    calculate() {
      // if (this.selected.length <= 0) return;
      let total = 0;
      for (let i = 0; i < this.selected.length; i++) {
        total += Number(this.selected[i]["price"] * this.selected[i]["quantity"]);
      }
      return {
        total: total,
        coupon: this.coupon,
        vat: this.vat,
        grand: Number(total - this.vat - this.coupon)
      };
    },
  },
  watch: {
    rows: {
      deep:true,
      handler(val) {
        console.log('rows val',val[0], this.selected[0])
      }
    }
  }
};
</script>

<style>
#TransactionHistoryProduct .q-table__control {
    text-transform: capitalize;
}
</style>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s

.my-sticky-header-table
  /* height or max-height is important */
  // min-height: 500px
  // height: 1000px

  // .q-table__top,
  // .q-table__bottom,
  // thead tr:first-child th
    /* bg color is important for th; just specify one */
    // color: white
    // background-color: #3A78C9

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>

<style>
.text-big {
  font-size: 16px;
}
</style>
