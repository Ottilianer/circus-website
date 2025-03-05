<template>
  <section class="image-container">
    <div class="bg-white w-full h-8"></div>

    <div
      class="px-4 mx-auto max-w-screen-xl text-center flex flex-col items-center justify-center py-24 lg:py-56 text-white"
    >
      <img src="/media/logos/logo_squared.png" class="w-64 h-auto" />
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
      >
        Willkommen beim Circus St.&nbsp;Ottilien!
      </h1>
      <div v-if="!isExpired" class="grid grid-cols-4 gap-4">
        <div v-for="(value, unit) in timeLeft" :key="unit" class="text-center">
          <div class="lg:text-5xl text-2xl font-bold mb-2">{{ value }}</div>
          <div class="text-xl uppercase">{{ unit }}</div>
        </div>
      </div>
      <div v-else class="text-3xl font-bold text-center">
        Der Circus hat begonnen!
      </div>
    </div>
    <div class="bg-white w-full h-8"></div>
  </section>
</template>

<script lang="ts" setup>
const targetDate = new Date("2025-07-18T18:00:00+01:00");
const now = ref<Date>(new Date());
const intervalId = ref<NodeJS.Timeout | null>(null);

const timeLeft = computed(() => {
  const difference = targetDate.getTime() - now.value.getTime();
  if (difference <= 0) {
    return { Tage: 0, Stunden: 0, Minuten: 0, Sekunden: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    d: days,
    h: hours,
    m: minutes,
    s: seconds,
  };
});

const isExpired = computed(() => {
  return now.value >= targetDate;
});

const updateNow = () => {
  now.value = new Date();
};

onMounted(() => {
  intervalId.value = setInterval(updateNow, 1000);
});

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});
</script>

<style lang="css" scoped>
.image-container {
  position: relative;
  z-index: 1;
  background-image: url("https://i.ytimg.com/vi/Zirr9W6Z_rU/maxresdefault.jpg");
  background-size: cover, contain;
  background-position: center, top;
  background-repeat: no-repeat, no-repeat;
}
</style>
