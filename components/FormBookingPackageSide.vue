<template>
  <div class="form-box">
    <q-card flat class="rounded-borders-2 bg-form " :class="[
      $q.screen.width > 425 ? 'q-pa-lg' : 'q-pa-md']">
      <q-card-section>
        <h5 class="subtitle">LET US KNOW</h5>
        <h2>BOOKING FORM</h2>
        <span>
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
          Vestibulum cumque laudantm sit.
        </span>
      </q-card-section>
      <q-card-section>
        <form
          id="form-career-component"
          @submit.prevent.stop="onSubmit"
          @reset.prevent.stop="onReset"
          class="q-col-gutter-md row"
        >
          <div class="col-12">
            <q-input
              clearable
              counter
              maxlength="100"
              bg-color="white"
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

          <div class="col-12">
            <q-input
              type="email"
              clearable
              counter
              maxlength="100"
              bg-color="white"
              rounded
              outlined
              color="primary"
              ref="emailRef"
              v-model="email"
              label="Your email *"
              lazy-rules
              :rules="[(val) => !!val || '']"
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

          <div class="col-12">
            <q-input 
              clearable
              counter
              maxlength="20"
              mask="+62 #### #### ###########"
              bg-color="white"
              rounded
              outlined
              color="primary"
              ref="phoneRef"
              v-model="phone"
              label="Your phone *"
              lazy-rules
              :rules="[(val) => !!val || '']"
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

          <div class="col-12">
            <q-input
              type="textarea"
              clearable
              counter
              maxlength="2000"
              bg-color="white"
              rounded
              outlined
              color="primary"
              ref="interestRef"
              v-model="note"
              label="Your note *"
              lazy-rules
              :rules="[(val) => !!val || '']"
              bottom-slots
            >
              <template v-slot:prepend>
                <q-icon name="description" color="primary" />
              </template>
              <template v-slot:error>
                <div class="text-white">Catatan tidak boleh kosong</div>
              </template>
              <template v-slot:hint>
                <span class="text-white">Catatan wajib diisi *</span>
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
              icon-right="support_agent"
              outline
              color="white"
              size="18px"
              class="rounded-borders-4"
              label="Inquiry Now"
            ></q-btn>
            <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
          </div>
        </form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const nameRef = ref(null);

    const email = ref(null);
    const emailRef = ref(null);

    const phone = ref(null);
    const phoneRef = ref(null);

    const note = ref(null);
    const noteRef = ref(null);

    const age = ref(null);
    const ageRef = ref(null);

    const accept = ref(false);

    const position = ref(null);
    const position_options = ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]);

    return {
      name,
      nameRef,
      nameRules: [(val) => (val && val.length > 0) || ""],

      email,
      emailRef,

      phone,
      phoneRef,

      note,
      noteRef,

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
<style scoped>
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
  font-size: 40px;
  font-weight: 800;
}
</style>
