<template>
  <div class="mx-auto max-w-screen-xl py-8 lg:py-16 px-4 md:px-12">
    <!-- Desktop Version (3 items per slide) -->
    <swiper
      v-if="!isMobile"
      :navigation="true"
      :modules="[Navigation]"
      class="select-none rounded-xl"
      :loop="true"
    >
      <swiper-slide v-for="i in Math.ceil(circusActs.length / 3)" :key="i">
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="circusAct in circusActs.slice((i - 1) * 3, i * 3)"
            :key="circusAct.id"
            class="relative"
          >
            <img
              :src="$pb.files.getURL(circusAct, circusAct.image)"
              class="rounded-lg w-full aspect-square object-cover"
            />
            <!-- Neuer Overlay-Div mit Farbverlauf -->
            <div
              class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-700/70 to-gray-700/40 rounded-lg"
            ></div>

            <div class="absolute bottom-5 left-5 text-white">
              <h3 class="font-semibold text-2xl">{{ circusAct.title }}</h3>
              <p class="text-lg">
                {{ circusAct.description }}
              </p>
            </div>
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
      <swiper-slide
        v-for="circusAct in circusActs"
        :key="circusAct.id"
        class="px-2"
      >
        <div class="relative">
          <img
            :src="$pb.files.getURL(circusAct, circusAct.image)"
            class="rounded-lg w-full aspect-square object-cover"
          />

          <div
            class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-700/70 to-gray-700/40 rounded-lg"
          ></div>
          <div class="absolute bottom-5 left-5 text-white">
            <h3 class="font-semibold text-2xl">
              {{ circusAct.title }}
            </h3>
            <p class="text-lg">
              {{ circusAct.description }}
            </p>
          </div>
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
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { DownloadCloudIcon } from "lucide-vue-next";

import "swiper/css";
import "swiper/css/navigation";

const { $pb } = useNuxtApp();
const {
  public: { POCKETBASE_ADDRESS },
} = useRuntimeConfig();

const modules = [Navigation];
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const { circusActs, fetchState } = useCircusActs();

function useCircusActs() {
  const circusActs = ref<CircusAct[]>([]);
  const fetchState = ref<FetchState>(FetchState.NotStarted);

  const fetchCircusActs = async () => {
    fetchState.value = FetchState.Loading;
    try {
      const response = await $pb.collection("circus_acts").getFullList();
      circusActs.value = response as unknown as CircusAct[];
      fetchState.value = FetchState.Success;
    } catch (error) {
      fetchState.value = FetchState.Error;
    }
  };

  onMounted(fetchCircusActs);

  return { circusActs, fetchState };
}

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style>
:root {
  --swiper-theme-color: #cb3032;
  --swiper-navigation-size: 25px;
}

.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}
@media (min-width: 768px) {
  .swiper-button-next {
    right: -5px;
  }

  .swiper-button-prev {
    left: -5px;
  }
}
</style>
