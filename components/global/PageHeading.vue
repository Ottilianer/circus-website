<template>
  <section class="items-center py-2 mx-auto max-w-screen-xl">
    <div
      class="gap-6 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col text-center justify-center lg:py-16 lg:px-6"
    >
      <div class="font-light text-gray-500 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          {{ title }}
        </h2>
        <p class="mb-4">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
});
</script>
