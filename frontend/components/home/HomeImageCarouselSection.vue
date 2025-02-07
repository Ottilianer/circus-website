<template>
  <div class="mx-auto max-w-screen-xl py-8 lg:py-16 px-4 md:px-12">
    <!-- Desktop Version (3 items per slide) -->
    <swiper
      v-if="!isMobile"
      :navigation="true"
      :modules="modules"
      class="select-none rounded-xl"
      :loop="true"
    >
      <swiper-slide v-for="i in 3" :key="`desktop-${i}`">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="j in 3" :key="`item-${j}`" class="relative">
            <img
              :src="`https://loremflickr.com/800/800?random=${j * i}`"
              class="rounded-lg w-full aspect-square object-cover"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Mobile Version (1 item per slide) -->
    <swiper
      v-else
      :navigation="true"
      :modules="modules"
      class="select-none rounded-xl"
      :loop="true"
    >
      <swiper-slide v-for="i in 9" :key="`mobile-${i}`" class="px-2">
        <div class="relative">
          <img
            :src="`https://loremflickr.com/800/800?random=${i}`"
            class="rounded-lg w-full aspect-square object-cover"
          />
        </div>
      </swiper-slide>
    </swiper>
    <button class="button flex items-center justify-center mt-8 mx-auto gap-2">
      <DownloadCloudIcon class="w-5 h-5" />
      <span> Programm herunterladen </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { DownloadCloudIcon } from "lucide-vue-next";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
