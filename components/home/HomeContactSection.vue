<template>
  <section>
    <div class="bg-white pt-20 pb-10 lg:pt-[110px] lg:pb-[70px]">
      <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:px-4 md:w-1/3">
            <div class="mb-10 text-center">
              <div
                class="mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-50 text-primary sm:h-[130px] sm:w-[130px]"
              >
                <MailIcon class="w-10 h-10 text-primary" />
              </div>
              <div class="text-center">
                <h4 class="mb-3 text-lg font-semibold text-dark">
                  Email Addresse
                </h4>
                <p class="text-base text-body-color"></p>
                <p class="text-base text-body-color">info@circusdirektor.de</p>
              </div>
            </div>
          </div>
          <div class="w-full md:px-4 md:w-1/3">
            <div class="mb-10 text-center">
              <div
                class="mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-50 text-primary sm:h-[130px] sm:w-[130px]"
              >
                <PhoneIncomingIcon class="w-10 h-10 text-primary" />
              </div>
              <div class="text-center">
                <h4 class="mb-3 text-lg font-semibold text-dark">Telefon</h4>
                <p class="text-base text-body-color">+49 123 456 789</p>
                <p class="text-base text-body-color">
                  Verfügbar ab dem 18.07.25
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:px-4 md:w-1/3">
            <div class="mb-10 text-center">
              <div
                class="mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-50 text-primary sm:h-[130px] sm:w-[130px]"
              >
                <MapPinIcon class="w-10 h-10 text-primary" />
              </div>
              <div class="text-center">
                <h4 class="mb-3 text-lg font-semibold text-dark">
                  Unsere Adresse
                </h4>
                <p class="text-base text-body-color">Erzabtei 23</p>
                <p class="text-base text-body-color">86941 St. Ottilien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { MailIcon, PhoneIncomingIcon, MapPinIcon } from "lucide-vue-next";
</script>
