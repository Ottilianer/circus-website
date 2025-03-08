<template>
  <section class="bg-white py-20 mx-auto max-w-screen-xl">
    <div class="container">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <template v-for="image in images">
          <div class="overflow-hidden rounded-xl">
            <img
              :alt="image.alt"
              :src="$pb.files.getURL(image, image.image)"
              class="w-full object-cover object-center"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = ref<GalleryImage[]>([]);
const { $pb } = useNuxtApp();

async function fetchGalleryImages() {
  const result = await $pb.collection("gallery").getFullList({
    filter: "highlight = false",
  });

  images.value = result as unknown as GalleryImage[];
}

onMounted(fetchGalleryImages);
</script>
