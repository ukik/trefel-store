<template>
  <div class="form-box">
    <q-card flat class="rounded-borders-2 bg-form q-pa-md">
      <q-card-section>
        <h5 class="subtitle text-uppercase">Complete Form Below</h5>
        <h2><q-avatar color="white"><span class="text-primary text-bold">1</span></q-avatar> BILLING ADDRESS</h2>
        <!-- <p>
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.
          Vestibulum cumque laudantm sit.
        </p> -->
      </q-card-section>
      <q-card-section>
        <form
          id="form-career-component"
          @submit.prevent.stop="onSubmit"
          @reset.prevent.stop="onReset"
          class="q-col-gutter-lg row"
        >
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
              label="Your country *"
              lazy-rules
              :rules="nameRules"
              bottom-slots
            >
              <template v-slot:prepend>
                <q-icon name="person" color="primary" />
              </template>
              <template v-slot:error>
                <div class="text-white">Negara tidak boleh kosong</div>
              </template>
              <template v-slot:hint>
                <span class="text-white">Negara wajib diisi *</span>
              </template>
            </q-input>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <q-input
              clearable
              counter
              maxlength="25"
              mask="+62 #### #### ###########"
              bg-color="white"
              
              rounded
              outlined
              color="primary"
              ref="phoneRef"
              v-model="name"
              label="Your provinsi *"
              lazy-rules
              :rules="[(val) => !!val || '']"
              bottom-slots
            >
              <template v-slot:prepend>
                <q-icon name="person" color="primary" />
              </template>
              <template v-slot:error>
                <div class="text-white">Provinsi tidak boleh kosong</div>
              </template>
              <template v-slot:hint>
                <span class="text-white">Provinsi wajib diisi *</span>
              </template>
            </q-input>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <q-input
              clearable
              counter
              maxlength="25"
              mask="+62 #### #### ###########"
              bg-color="white"
              
              rounded
              outlined
              color="primary"
              ref="phoneRef"
              v-model="name"
              label="Your city *"
              lazy-rules
              :rules="[(val) => !!val || '']"
              bottom-slots
            >
              <template v-slot:prepend>
                <q-icon name="person" color="primary" />
              </template>
              <template v-slot:error>
                <div class="text-white">Kota tidak boleh kosong</div>
              </template>
              <template v-slot:hint>
                <span class="text-white">Kota wajib diisi *</span>
              </template>
            </q-input>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <q-input
              clearable
              counter
              maxlength="25"
              mask="+62 #### #### ###########"
              bg-color="white"
              
              rounded
              outlined
              color="primary"
              ref="phoneRef"
              v-model="name"
              label="Your zip *"
              lazy-rules
              :rules="[(val) => !!val || '']"
              bottom-slots
            >
              <template v-slot:prepend>
                <q-icon name="person" color="primary" />
              </template>
              <template v-slot:error>
                <div class="text-white">Kodepos tidak boleh kosong</div>
              </template>
              <template v-slot:hint>
                <span class="text-white">Kodepos wajib diisi *</span>
              </template>
            </q-input>
          </div>

          <div class="col-12">
            <q-input
              clearable
              counter
              maxlength="25"
              mask="+62 #### #### ###########"
              bg-color="white"
              
              rounded
              outlined
              color="primary"
              ref="phoneRef"
              v-model="name"
              label="Your street *"
              lazy-rules
              :rules="[(val) => !!val || '']"
              bottom-slots
            >
              <template v-slot:prepend>
                <q-icon name="person" color="primary" />
              </template>
              <template v-slot:error>
                <div class="text-white">Jalan tidak boleh kosong</div>
              </template>
              <template v-slot:hint>
                <span class="text-white">Jalan wajib diisi *</span>
              </template>
            </q-input>
          </div>


          <div class="col-12">
            <q-input
              type="textarea"
              clearable
              counter
              maxlength="300"
              bg-color="white"
              
              rounded
              outlined
              color="primary"
              ref="addressRef"
              v-model="name"
              label="About informasi *"
              bottom-slots
            >
              <template v-slot:prepend>
                <q-icon name="person" color="primary" />
              </template>
              <template v-slot:error>
                <div class="text-white">Informasi tidak boleh kosong</div>
              </template>
              <template v-slot:hint>
                <span class="text-white">Informasi tambahan</span>
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

    const age = ref(null);
    const ageRef = ref(null);

    const accept = ref(false);

    const position = ref(null);
    const position_options = ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]);

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
  font-size: 30px;
  font-weight: 500;
}
</style>