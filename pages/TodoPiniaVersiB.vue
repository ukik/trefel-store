<template>
  <InnerBanner _title="Todo Pinia Versi B"></InnerBanner>

  <!-- ***Inner Banner html end here*** -->
  <div class="content-page-section row justify-center">
    <div
      class="row justify-center col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"
      :class="[
        $q.screen.width > 425 ? 'q-col-gutter-lg' : 'q-col-gutter-y-xl q-col-gutter-x-lg',
        $q.screen.width > 768 ? 'q-col-gutter-lg' : '',
      ]"
    >
      <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
      <!-- {{ store?.todos }} -->
          <template v-for="(item, index) in todos" :key="index">
            <q-item>
              <q-item-section avatar>
                <q-avatar color="primary">
                  <span class="text-white">{{ index }}</span>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label caption>{{ item?.id }}</q-item-label>
                <q-item-label>{{ item?.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
      </div>
      <div class="col" :class="[$q.screen.width > 768 ? '' : 'row']">
        <BookingSummary></BookingSummary>
        <q-card
          flat
          bordered
          class="booking-section q-py-xl rounded-borders-2 bg-grey-1 q-mt-xl"
        >
          <q-card-actions align="center">
            <q-icon size="80px" name="phone_forwarded"></q-icon>
          </q-card-actions>
          <q-card-actions align="center">
            <div class="support-content text-center">
              <h5>HELP AND SUPPORT</h5>
              <a href="telto:12345678" class="phone">+55 123 987 00</a>
              <small>Monday to Friday 9.00am - 7.30pm</small>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>

  <!-- <div>
    <h1>Todos:</h1>
    <ul v-for="todo in todos" :key="todo.id">
      <li>{{ todo?.title }}</li>
    </ul>
  </div> -->
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
// import { useTodosStore } from "~/stores/TodoStore";

const store = useTodosStoreVersiB();
const { fetchTodos } = store; // have all non reactiave stuff here
const { todos } = storeToRefs(store); // have all reactive states here

await fetchTodos();
</script>
