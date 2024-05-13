<template>
  <q-card flat id="RightDrawerContent">
    <q-card-actions align="center" class="q-mt-xl">
      <h3 class="full-width text-center">CALL TO ACTION</h3>
      <q-avatar size="100px" class="q-mt-md q-mb-sm">
        <q-img
          src="https://demo.stairthemes.com/html/traveler/assets/images/img21.jpg"
        ></q-img>
      </q-avatar>
    </q-card-actions>
    <q-card-section class="text-center">
      <div class="name-title">
        <h4>James Watson</h4>
      </div>
      <q-item-label class="text-body">
        Accumsan? Aliquet nobis doloremque, aliqua? Inceptos voluptatem, duis tempore
        optio quae animi viverra distinctio cumque vivamus, earum congue, anim velit
      </q-item-label>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn outline color="primary" size="16px" style="width: 40px"
        ><font-awesome :icon="['fab', 'instagram']"
      /></q-btn>
      <q-btn outline color="primary" size="16px" style="width: 40px"
        ><font-awesome :icon="['fab', 'whatsapp']"
      /></q-btn>
      <q-btn outline color="primary" size="16px" style="width: 40px"
        ><font-awesome :icon="['fab', 'facebook-f']"
      /></q-btn>
      <q-btn outline color="primary" size="16px" style="width: 40px"
        ><font-awesome :icon="['fab', 'x-twitter']"
      /></q-btn>
      <q-btn outline color="primary" size="16px" style="width: 40px"
        ><font-awesome :icon="['fab', 'tiktok']"
      /></q-btn>
    </q-card-actions>

    <q-card-actions align="center" class="q-mt-lg">
      <h3 class="full-width text-center">CONTACT US</h3>
      <q-item-label class="text-body q-px-lg text-center">
        Feel free to contact and reach us !!
      </q-item-label>

      <q-btn class="q-mb-sm" dense flat icon="phone" label="+01(988) 256 203"></q-btn>
      <q-btn class="q-mb-sm" dense flat icon="email" label="info@domain.com"></q-btn>
      <q-btn dense flat icon="location_on" label="3146 Koontz, California"></q-btn>
    </q-card-actions>

      
  </q-card>
</template>

<style scoped>
h3 {
  color: #3a78c9;
  font-size: 16px;
  font-weight: 500;
}

h4 {
  font-size: 18px;
  font-weight: 600;
}
</style>

<style>
#RightDrawerContent .q-item__label {
  line-height: 1.6 !important;
  margin: 0 0 15px;
  word-wrap: break-word;
}
</style>
