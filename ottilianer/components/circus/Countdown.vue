<template>
  <section class="items-center py-2 mx-auto max-w-screen-xl">
    <div
      class="gap-6 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col text-center justify-center lg:py-16 lg:px-6"
    >
      <div v-if="!isExpired" class="grid grid-cols-4 gap-4">
        <div v-for="(value, unit) in timeLeft" :key="unit" class="text-center">
          <div class="text-5xl font-bold text-black mb-2">{{ value }}</div>
          <div class="text-xl text-black opacity-75">{{ unit }}</div>
        </div>
      </div>
      <div v-else class="text-3xl font-bold text-black text-center">
        Der Circus hat begonnen!
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const targetDate = new Date("2025-07-18T18:00:00+01:00");
const now = ref<Date>(new Date());
const intervalId = ref(null);

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
    Tage: days,
    Stunden: hours,
    Minuten: minutes,
    Sekunden: seconds,
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
