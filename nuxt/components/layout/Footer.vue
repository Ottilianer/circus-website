<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl fonat-semibold text-blueGray-700">
            Let's keep in touch!
          </h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <button
              class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-twitter"></i></button
            ><button
              class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-facebook-square"></i></button
            ><button
              class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-dribbble"></i></button
            ><button
              class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                >Sonstiges</span
              >
              <ul class="list-unstyled">
                <li v-for="other in others">
                  <NuxtLink
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    :to="other.link"
                    >{{ other.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                >Rechtliches</span
              >
              <ul class="list-unstyled">
                <li v-for="legal in legals">
                  <NuxtLink
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    :to="legal.link"
                    >{{ legal.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Made with ❤️ by Leo Gall - &copy;
            {{ new Date().getFullYear() }} RMG-Webteam
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram } from "lucide-vue-next";

const legals = [
  { name: "Impressum", link: "#" },
  { name: "Datenschutz", link: "#" },
];
const others = [
  { name: "RMG-Ottilien", link: "#" },
  { name: "Kloster", link: "#" },
  { name: "Schulwerk", link: "#" },
];

const socials = [
  {
    alt: "",
    icon: "",
  },
];
</script>
