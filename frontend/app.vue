<template>
  <Toaster position="top-center" richColors />
  <div class="font-redrose">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

  <div
    v-if="cookieModalOpen"
    class="fixed bottom-10 right-10 bg-white shadow-xl shadow-gray-500 p-4 rounded-lg border border-gray-200 flex flex-col justify-end items-end z-50"
  >
    <p class="text-body font-redrose max-w-md">
      Wir verkaufen nicht Ihre Daten, sondern ein unvergessliches Erlebnis.
      Daher nutzen wir keine Cookies.
    </p>
    <button class="button block mt-4" @click="cookieModalOpen = false">
      Okay
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Toaster } from "vue-sonner";

const cookieModalOpen = ref(true);
</script>
