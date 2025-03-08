<template>
  <nav class="bg-white shadow-sm border-b border-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="/media/logos/logo_squared.png" class="h-6 w-6" />
          <span class="text-xl font-semibold text-gray-800 tracking-tighter"
            >Circus St. Ottilien</span
          >
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.name"
            :to="item.to"
            class="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-gray-600 hover:text-primary focus:outline-none"
        >
          <MenuIcon v-if="!isMobileMenuOpen" class="h-6 w-6" />
          <XIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->

    <div
      v-if="isMobileMenuOpen"
      class="absolute top-16 left-0 right-0 bg-white shadow-md z-50 border-t border-gray-200"
    >
      <div class="container mx-auto px-4 py-2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.to"
          class="block py-3 text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { MenuIcon, XIcon, TentIcon } from "lucide-vue-next";

const menuItems = [
  { name: "Home", to: "/" },
  { name: "Vorverkauf", to: "/presale" },
  { name: "Galerie", to: "/gallery" },
  { name: "Kontakt", to: "/#contact" },
];

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
