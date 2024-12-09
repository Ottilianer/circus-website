<template>
  <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="true"
    :modules="modules"
    class="select-none rounded-xl"
    :loop="true"
  >
    <swiper-slide v-for="i in 10">
      <img
        :src="`https://loremflickr.com/1920/1080?random=${i}`"
        width="auto"
        height="600"
      />
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

defineProps<{
  color: string;
  images: string[];
}>();

const modules = [Pagination, Navigation];
</script>
