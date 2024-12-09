<template>
  <section class="image-container">
    <div
      class="px-4 mx-auto max-w-screen-xl text-center flex flex-col items-center justify-center"
      :class="{
        'py-12 lg:py-24': hasText,
        'py-24 lg:py-56': !hasText,
      }"
    >
      <NuxtImg src="/png/circus-logo.png" class="w-64 h-auto" />
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
      >
        <span v-if="hasText">{{ text }}</span>
        <span v-else>Willkommen beim Circus St. Ottilien!</span>
      </h1>
      <div
        class="flex flex-col md:flex-row gap-3 justify-center items-center mt-10"
      >
        <NuxtLink to="/circus/program" class="circus-button">Programm</NuxtLink>
        <NuxtLink to="/circus/presale" class="circus-button"
          >Vorverkauf</NuxtLink
        >
        <NuxtLink to="/circus/#arrival" class="circus-button">Anreise</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  text?: string;
}>();

const hasText = typeof props.text === "string";
</script>

<style lang="css" scoped>
.image-container {
  background-image: url("https://www.amper-kurier.de/sites/default/files/archiv/_dsc0788.jpg");
  background-size: cover, contain;
  background-position: center, top;
  background-repeat: no-repeat, no-repeat;
}
</style>
