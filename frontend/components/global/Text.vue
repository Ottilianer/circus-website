<template>
  <div
    class="gap-6 items-center mx-auto max-w-screen-xl flex flex-col text-center justify-center"
  >
    <div class="font-light text-gray-500 sm:text-lg">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
        {{ title }}
      </h2>
      <p class="mb-4">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  content: String,
});
</script>
