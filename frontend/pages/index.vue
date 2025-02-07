<template>
  <HomeJumbotron />
  <HomeProgramOverview />
  <hr />
  <HomeAboutSection />
  <hr />
  <GalleryCarousel class="!pb-8 px-4 md:px-12" />
  <div class="flex justify-center">
    <NuxtLink
      to="/gallery"
      class="button mb-16 flex items-center justify-center gap-2"
    >
      <Image class="w-4 h-4 ml-2" />
      <span>Mehr Bilder ansehen</span>
    </NuxtLink>
  </div>
  <hr />
  <HomeArrivalSection />
  <hr />
  <HomeContactSection />
</template>

<script setup lang="ts">
import { Image } from "lucide-vue-next";

useHead({
  title: "Circus St. Ottilien",
});
</script>
