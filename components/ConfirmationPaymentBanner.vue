<template>
  <q-banner class="rounded-borders-2 q-pa-lg" :class="[ $q.screen.width > 425 ? 'q-mb-lg' : '', color ]">
    <template v-slot:avatar>
      <q-icon size="80px" :name="icon" color="white" />
    </template>
    <div class="success-content text-white">
      <h3>{{title}}</h3>
      <p>
        Thank you, your payment has been successful and your booking is now confirmed.A
        confirmation email has been sent to info@travele.com.
      </p>
    </div>
  </q-banner>
</template>

<script>
export default {
  props:['color','title','icon']
}
</script>

<style scoped>
.success-notify .success-content {
    margin-left: 20px;
}

.success-notify .success-content h3 {
    margin-bottom: 5px;
    color: #ffffff;
}
h3 {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 5px;
}

.success-notify .success-content p {
    margin-bottom: 0;
}
p {
    line-height: 1.6;
    margin: 0 0 0px;
    word-wrap: break-word;

    font-size: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;    
}
</style>