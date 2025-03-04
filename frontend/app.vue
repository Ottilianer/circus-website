<template>
  <Toaster position="top-center" richColors />
  <div class="font-redrose">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { Toaster } from "vue-sonner";
</script>
