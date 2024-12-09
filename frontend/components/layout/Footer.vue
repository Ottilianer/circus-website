<template>
  <section>
    <div class="items-center py-8 mx-auto max-w-screen-xl">
      <div class="font-light text-gray-500 sm:text-lg text-center">
        <div
          class="tracking-tight flex flex-row justify-between items-center mb-8"
        >
          <div class="flex flex-row gap-3">
            <NuxtLink
              v-for="(legal, index) in legals"
              :key="index"
              :to="legal.link"
            >
              {{ legal.title }}
            </NuxtLink>
          </div>
          <div class="flex flex-row gap-3">
            <NuxtLink
              v-for="(social, index) in socials"
              :key="index"
              :to="social.link"
              class="hover:-translate-y-1 transform transition-transform"
            >
              <NuxtImg
                :src="social.icon"
                :alt="social.alt"
                class="w-8 h-auto"
              />
            </NuxtLink>
          </div>
        </div>
        <hr />
        <div class="mt-8 tracking-tight">
          Made with ❤️ by Leo Gall - &copy; RMG-Webteam
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const legals = ref([
  {
    title: "Impressum",
    link: "/impressum",
  },
  {
    title: "Datenschutz",
    link: "/datenschutz",
  },
]);
const socials = ref([
  {
    alt: "Instagram",
    link: "/impressum",
    icon: "/svg/instagram.svg",
  },
  {
    title: "YouTube",
    link: "/datenschutz",
    icon: "/svg/youtube.svg",
  },
]);
</script>
