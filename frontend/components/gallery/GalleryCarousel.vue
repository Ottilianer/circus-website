<template>
  <div class="mx-auto max-w-screen-xl py-8 lg:py-16">
    <!-- Desktop Version (3 items per slide) -->
    <swiper
      v-if="!isMobile"
      :navigation="true"
      :modules="modules"
      class="select-none rounded-xl"
      :loop="true"
    >
      <swiper-slide v-for="i in Math.ceil(images.length / 3)">
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="image in images.slice((i - 1) * 3, i * 3)"
            class="relative"
          >
            <img
              :alt="image.alt"
              :src="$pb.files.getURL(image, image.image)"
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
      <swiper-slide v-for="image in images" :key="image.id" class="px-2">
        <div class="relative">
          <img
            :alt="image.alt"
            :src="$pb.files.getURL(image, image.image)"
            class="rounded-lg w-full aspect-square object-cover"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];
const isMobile = ref(false);

const images = ref<GalleryImage[]>([]);
const { $pb } = useNuxtApp();

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

async function fetchGalleryImages() {
  const result = await $pb.collection("gallery").getFullList({
    filter: "highlight = true",
  });

  images.value = result as unknown as GalleryImage[];
  console.log(images.value);
}

onMounted(async () => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
  await fetchGalleryImages();
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
