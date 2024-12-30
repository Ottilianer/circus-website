<script setup lang="ts">
const galleriesData = ref([
  {
    imageSrc: "https://i.ibb.co/zGVkyNX/image-1.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/Tc5MqBD/image-2.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/qjwc7Qq/image-3.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/tHxwXGT/image-4.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/SrWGCY8/image-5.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/drWGPRt/image-6.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/1rtHscW/image-7.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/H4zC1j4/image-8.jpg",
    altText: "Gallery Image",
  },
  {
    imageSrc: "https://i.ibb.co/QMB14TC/image-9.jpg",
    altText: "Gallery Image",
  },
]);
</script>

<template>
  <section class="bg-white py-20 mx-auto max-w-screen-xl">
    <div class="container">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <template v-for="(item, index) in galleriesData" :key="index">
          <div class="overflow-hidden rounded-xl">
            <img
              :src="item.imageSrc"
              :alt="item.altText"
              class="w-full object-cover object-center"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
