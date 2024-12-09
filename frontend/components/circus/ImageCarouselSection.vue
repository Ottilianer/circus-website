<template>
  <div class="mx-auto max-w-screen-xl py-8 lg:py-16">
    <Text
      class="mb-4"
      title="Bildergalarie"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <ImageCarousel color="#cb3032" :images="[]" />
  </div>
</template>

<style>
:root {
  --swiper-theme-color: #cb3032;
}
</style>
