<template>
  <div class="inner-banner-wrap">
    <div
      class="inner-baner-container"
      style="background-image: url(assets/images/img7.jpg); padding-top: 134.562px;"
    >
        <div class="inner-banner-content">
          <h1 class="page-title">{{ title }}</h1>
        </div>
    </div>
  </div>
</template>

<script setup>
const { _title } = defineProps(['_title'])
const title = _title
</script>

<style scoped>

/* below from style.css */
.inner-banner-wrap {
    padding-bottom: 95px;
}

.inner-baner-container {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;
    position: relative;
}

.inner-baner-container:before {
    background-color: #151515;
    content: "";
    display: block;
    opacity: 0.65;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
}

.inner-baner-container .inner-banner-content {
    padding-top: 120px;
    padding-bottom: 135px;
    position: relative;
    color: #ffffff;
}

.inner-baner-container .page-title {
    color: #ffffff;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 0;
}

h1 {
    font-size: 60px;
    font-weight: 800;
}

/* h1, h2, h3, h4, h5, h6 {
    margin: 0 0 15px;
    line-height: 1.2;
} */

h1, h2, h3, h4, h5, h6 {
    color: #223645;
    font-family: "Montserrat", sans-serif;
}
/* h1 {
    font-size: 2em;
    margin: 0.67em 0;
} */
</style>