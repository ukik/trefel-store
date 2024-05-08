<template>
  <!-- <div> -->
    <!-- <button
      @click="
        () =>
          showMultiple(
            ['http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150'],
            0
          )
      "
    >
      show
    </button> -->
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  <!-- </div> -->
</template>

<script>
import { defineComponent } from "vue";
import VueEasyLightbox, { useEasyLightbox } from "vue-easy-lightbox";

export default defineComponent({
  components: {
    VueEasyLightbox,
  },
  props: {
    _gallery: {
      default: () => [
        "https://picsum.photos/500/300",
        "https://picsum.photos/500/300",
        "https://picsum.photos/500/300",
        "https://picsum.photos/500/300",
        "https://picsum.photos/500/300",
        "https://picsum.photos/500/300",
      ],
    },
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0); // default 0
    const imgsRef = ref([]);

    const onShow = () => {
      visibleRef.value = true;
    };

    const showMultiple = (images, index) => {
      console.log("showMultiple", images, index);
      imgsRef.value = images;
      // or
      // imgsRef.value = [
      //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //   'http://via.placeholder.com/350x150'
      // ]
      indexRef.value = index; // index of imgList
      onShow();
    };

    const showImage = (index = 0) => {
      indexRef.value = index; // index of imgList
      onShow();
    };

    const onHide = () => (visibleRef.value = false);

    return {
      showImage,
      showMultiple,
      visibleRef,
      indexRef,
      imgsRef,
      onHide,
    };
  },
  mounted() {
    this.imgsRef = this._gallery;
  },
});
</script>
