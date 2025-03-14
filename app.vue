<template>
  <Toaster position="top-center" richColors />
  <div class="font-redrose">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

  <ClientOnly>
    <div
      v-if="!hasClickedCookieConsent && !hidden"
      class="fixed md:bottom-10 md:right-10 bottom-0 bg-white shadow-xl shadow-gray-500/40 p-4 rounded-lg border border-gray-200 flex flex-col justify-end items-end z-50"
    >
      <p class="text-body font-redrose max-w-md">
        Wir verkaufen nicht Ihre Daten, sondern ein unvergessliches Erlebnis.
        Daher nutzen wir keine Cookies.
      </p>
      <button class="button block mt-4" @click="clickCookieConsent">
        Okay
      </button>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Toaster } from "vue-sonner";

const hidden = ref(false);

const hasClickedCookieConsent = computed(() => {
  return localStorage.getItem("cookieConsent") === "true";
});

const clickCookieConsent = () => {
  localStorage.setItem("cookieConsent", "true");
  hidden.value = true;
};

onMounted(() => {
  console.group("Debugging");
  console.log(useRuntimeConfig().public);
  console.groupEnd();
});
</script>
