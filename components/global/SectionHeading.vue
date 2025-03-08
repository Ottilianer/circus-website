<template>
  <div
    class="gap-6 items-center mx-auto max-w-screen-xl flex flex-col text-center justify-center py-8 px-4 lg:py-12 lg:px-6"
  >
    <div class="font-light text-gray-500 sm:text-lg">
      <h2 class="mb-4 text-3xl tracking-tight font-semibold text-gray-900">
        {{ title }}
      </h2>
      <p class="mb-4">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
});
</script>
