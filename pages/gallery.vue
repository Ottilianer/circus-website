<template>
  <SectionHeading :title="title" :subtitle="subtitle" class="mt-16" />
  <GalleryCarousel class="!pt-10" />
  <hr />
  <GalleryFull />
</template>

<script setup lang="ts">
const title = "Unsere Galerie - Rückblicke in die Vergangenheit";

const subtitle =
  "Tauchen Sie ein in die magische Welt des Circus St.Ottilien - Erleben Sie faszinierende Einblicke in die Manege der vergangenen Jahre und lassen Sie sich verzaubern von atemberaubenden Momenten, die einen Vorgeschmack auf das geben, was Sie im Jahr 2025 bei unserer spektakulären Show erwarten wird.";

useHead({
  title: "Circus St. Ottilien • Galerie",
});
</script>
