<template>
  <section>
    <div class="items-center px-6 xl:px-0 py-8 mx-auto max-w-screen-xl">
      <div class="font-light text-gray-500 sm:text-lg text-center">
        <div
          class="tracking-tight flex flex-col md:flex-row justify-between items-center mb-8"
        >
          <div class="flex flex-col md:flex-row gap-3">
            <NuxtLink
              v-for="(legal, index) in legals"
              :key="index"
              :to="legal.link"
              class="hover:text-primary"
            >
              {{ legal.title }}
            </NuxtLink>
          </div>
          <div class="flex flex-row gap-3 md:mt-0 mt-4">
            <NuxtLink
              v-for="(social, index) in socials"
              :key="index"
              :to="social.link"
              target="_blank"
              class="hover:-translate-y-1 transform transition-transform"
            >
              <img :src="social.icon" :alt="social.alt" class="w-8 h-auto" />
            </NuxtLink>
            <NuxtLink
              key="ottilianer"
              to="https://ottilianer.de"
              target="_blank"
              class="hover:-translate-y-1 transform transition-transform bg-gray-700 rounded-full flex items-center justify-center w-7 h-7 mt-0.5"
            >
              <img
                src="/media/logos/ottilianer.svg"
                alt="Logo der Schule"
                class="w-5 h-auto"
              />
            </NuxtLink>
          </div>
        </div>
        <hr />
        <div class="mt-8 tracking-tight">
          Made with ☕ by
          <NuxtLink to="https://lgll.dev" target="_blank" class="link">
            Leo Gall
          </NuxtLink>
          <span class="md:block hidden font-bold"> • </span>
          <p>
            &copy; Circus St. Ottilien
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const legals = ref([
  {
    title: "Impressum",
    link: "https://erzabtei.de/impressum",
  },
  {
    title: "Datenschutz",
    link: "https://erzabtei.de/datenschutz",
  },
  {
    title: "Vorverkaufsbedingungen",
    link: "/legal/presale-conditions",
  },
]);
const socials = ref([
  {
    alt: "Instagram",
    link: "https://www.instagram.com/circus.ottilien/",
    icon: "/media/logos/instagram.svg",
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/@circusst.ottilien7772",
    icon: "/media/logos/youtube.svg",
  },
]);
</script>
