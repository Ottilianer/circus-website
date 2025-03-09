<template>
  <section>
    <div class="bg-white pt-20 pb-10 lg:pt-[110px] lg:pb-[70px]">
      <div class="container mx-auto">
        <div
          class="grid lg:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 lg:gap-8 text-center"
        >
          <div class="w-full">
            <div class="mb-10 text-center flex flex-col items-center">
              <div
                class="mx-auto mb-5 flex items-center justify-center rounded-full bg-gray-50 text-primary p-8"
              >
                <MailIcon class="w-10 h-10 text-primary" />
              </div>
              <div class="text-center">
                <h4 class="mb-3 text-lg font-semibold text-dark">
                  Email Addresse
                </h4>
                <NuxtLink
                  to="mailto:info@circusdirektor.de"
                  class="text-base link"
                  >info@circusdirektor.de</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="w-full" id="contact">
            <div class="mb-10 text-center flex flex-col items-center">
              <div
                class="mx-auto mb-5 flex items-center justify-center rounded-full bg-gray-50 text-primary p-8"
              >
                <PhoneIncomingIcon class="w-10 h-10 text-primary" />
              </div>
              <div class="text-center">
                <h4 class="mb-3 text-lg font-semibold text-dark">Telefon</h4>
                <div class="text-center">
                  <p class="text-base text-text-body">+49 123 456 789</p>
                  <p class="text-base text-text-body">
                    Verfügbar ab dem 18.07.25
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="mb-10 text-center flex flex-col items-center">
              <div
                class="mx-auto mb-5 flex items-center justify-center rounded-full bg-gray-50 text-primary p-8"
              >
                <Code class="w-10 h-10 text-primary" />
              </div>
              <div class="text-center">
                <h4 class="mb-3 text-lg font-semibold text-dark">
                  Technische Probleme
                </h4>
                <p class="text-base text-body-color"></p>
                <NuxtLink
                  class="text-base !link"
                  to="mailto:leo.gall@rmg-ottilien.de"
                >
                  leo.gall@rmg-ottilien.de
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { MailIcon, PhoneIncomingIcon, Code } from "lucide-vue-next";
</script>
