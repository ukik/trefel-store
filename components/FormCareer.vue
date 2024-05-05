<template>
  <!-- <div class="q-pa-md" style="max-width: 300px"> -->
  <form
    id="form-career-component"
    @submit.prevent.stop="onSubmit"
    @reset.prevent.stop="onReset"
    class="q-col-gutter-md row"
  >
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
      <q-input clearable counter maxlength="100"
        bg-color="white"
        input-class="rounded-borders-2"
        rounded
        outlined
        color="primary"
        ref="nameRef"
        v-model="name"
        label="Your name *"
        lazy-rules
        :rules="nameRules"
        bottom-slots
      >
        <template v-slot:prepend>
          <q-icon name="person" color="primary" />
        </template>
        <template v-slot:error>
          <div class="text-white">Nama tidak boleh kosong</div>
        </template>
        <template v-slot:hint>
          <span class="text-white">Nama wajib diisi *</span>
        </template>
      </q-input>
    </div>

    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
      <q-input type="email" clearable counter maxlength="100"
        bg-color="white"
        input-class="rounded-borders-2"
        rounded
        outlined
        color="primary"
        ref="emailRef"
        v-model="name"
        label="Your email *"
        lazy-rules
        :rules="[val => !!val || '']"
        bottom-slots
      >
        <template v-slot:prepend>
          <q-icon name="email" color="primary" />
        </template>
        <template v-slot:error>
          <div class="text-white">Email tidak boleh kosong</div>
        </template>
        <template v-slot:hint>
          <span class="text-white">Email wajib diisi *</span>
        </template>
      </q-input>
    </div>

    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
      <q-input clearable counter maxlength="25" mask="+62 #### #### ###########"
        bg-color="white"
        input-class="rounded-borders-2"
        rounded
        outlined
        color="primary"
        ref="phoneRef"
        v-model="name"
        label="Your phone *"
        lazy-rules
        :rules="[val => !!val || '']"
        bottom-slots
      >
        <template v-slot:prepend>
          <q-icon name="person" color="primary" />
        </template>
        <template v-slot:error>
          <div class="text-white">Telepon tidak boleh kosong</div>
        </template>
        <template v-slot:hint>
          <span class="text-white">Telepon wajib diisi *</span>
        </template>
      </q-input>
    </div>

    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
      <q-select clearable multiple
        bg-color="white"
        input-class="rounded-borders-2"
        rounded
        outlined
        color="primary"
        ref="positionRef"
        v-model="position" :options="position_options"
        label="Your position *"
        lazy-rules
        :rules="[val => !!val || '']"
        bottom-slots
      >
        <template v-slot:prepend>
          <q-icon name="person" color="primary" />
        </template>
        <template v-slot:error>
          <div class="text-white">Posisi tidak boleh kosong</div>
        </template>
        <template v-slot:hint>
          <span class="text-white">Posisi wajib diisi *</span>
        </template>
      </q-select>
    </div>

    <div class="col-12">
      <q-input type="textarea" clearable counter maxlength="300"
        bg-color="white"
        input-class="rounded-borders-2"
        rounded
        outlined
        color="primary"
        ref="addressRef"
        v-model="name"
        label="Your address *"
        lazy-rules
        :rules="[val => !!val || '']"
        bottom-slots
      >
        <template v-slot:prepend>
          <q-icon name="person" color="primary" />
        </template>
        <template v-slot:error>
          <div class="text-white">Alamat tidak boleh kosong</div>
        </template>
        <template v-slot:hint>
          <span class="text-white">Alamat wajib diisi *</span>
        </template>
      </q-input>
    </div>

    <div class="col-12">
      <q-input type="textarea" clearable counter maxlength="2000"
        bg-color="white"
        input-class="rounded-borders-2"
        rounded
        outlined
        color="primary"
        ref="interestRef"
        v-model="name"
        label="Your interest & personality *"
        lazy-rules
        :rules="[val => !!val || '']"
        bottom-slots
      >
        <template v-slot:prepend>
          <q-icon name="person" color="primary" />
        </template>
        <template v-slot:error>
          <div class="text-white">Minat & personaliti tidak boleh kosong</div>
        </template>
        <template v-slot:hint>
          <span class="text-white">Minat & personaliti wajib diisi *</span>
        </template>
      </q-input>
    </div>
    <!-- <q-input
      ref="ageRef"
      filled
      type="number"
      v-model="age"
      label="Your age *"
      lazy-rules
      :rules="ageRules"
    />

    <q-toggle v-model="accept" label="I accept the license and terms" /> -->

    <div class="col-12 text-center q-mt-lg">
      <q-btn
      icon-right="send"
        outline
        color="white"
        size="18px"
        class="rounded-borders-4"
        label="Send Application"
      ></q-btn>
      <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
    </div>
  </form>
  <!-- </div> -->
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const nameRef = ref(null);

    const age = ref(null);
    const ageRef = ref(null);

    const accept = ref(false);

    const position = ref(null)
    const position_options = ref([
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
    ])

    return {
      name,
      nameRef,
      nameRules: [(val) => (val && val.length > 0) || ""],

      age,
      ageRef,
      ageRules: [
        (val) => (val !== null && val !== "") || "Please type your age",
        (val) => (val > 0 && val < 100) || "Please type a real age",
      ],

      position,
      position_options,

      accept,

      onSubmit() {
        nameRef.value.validate();
        ageRef.value.validate();

        if (nameRef.value.hasError || ageRef.value.hasError) {
          // form has error
        } else if (accept.value !== true) {
          $q.notify({
            color: "negative",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            icon: "done",
            color: "positive",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;

        nameRef.value.resetValidation();
        ageRef.value.resetValidation();
      },
    };
  },
};
</script>

<style>
#form-career-component .q-field--outlined .q-field__control:hover:before {
  border-color: #ffffff75 !important;
}
#form-career-component .q-field__counter {
    color: white;
}
</style>
