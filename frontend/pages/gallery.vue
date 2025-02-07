<template>
  <SectionHeading :title="title" :subtitle="subtitle" class="mt-16" />
  <GalleryCarousel class="!pt-10" />
  <hr />
  <GalleryFull />
</template>

<script setup lang="ts">
const title = "Galerie";

const subtitle =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

useHead({
  title: "Galerie • Circus St. Ottilien",
});
</script>
