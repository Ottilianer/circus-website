<template>
  <div class="flex flex-col justify-center items-center pb-8 lg:pb-12">
    <SectionHeading :title="title" :subtitle="subtitle" class="!pb-0" />
    <div className="rounded-xl p-6 mt-8 mx-auto max-w-screen-lg">
      <div class="max-w-4xl w-full rounded-xl overflow-hidden">
        <div class="relative">
          <div
            class="absolute top-5 left-5 w-[calc(100%-2.5rem)] h-1 md:bg-gray-700"
          ></div>
          <ol
            class="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <TransitionGroup
              name="fade"
              tag="div"
              class="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-8 sm:space-y-0"
            >
              <li
                v-for="(step, index) in steps"
                :key="step.id"
                class="flex flex-col items-center w-full sm:w-1/3"
              >
                <div
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl mb-4"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex flex-col items-center text-center px-4">
                  <h3 class="text-lg font-semibold text-black mb-2">
                    {{ step.title }}
                  </h3>
                  <p
                    class="text-gray-500 text-sm"
                    v-html="step.description"
                  ></p>
                </div>
              </li>
            </TransitionGroup>
          </ol>
        </div>
      </div>
    </div>
    <NuxtLink class="button mt-5"> Formular herunterladen </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { Mail, CheckCircle, CloudDownload, Pen } from "lucide-vue-next";

const title = "Informationen für Gruppen";
const subtitle = `
  Bei Gruppenbuchungen ab 10 Personen bitten wir Sie, unser
  Vorverkaufsformular herunterzuladen und per E-Mail an uns zu senden. Dies
  gilt auch für Schulen, Kindergärten und andere Einrichtungen, selbst wenn
  die Gruppengröße kleiner ist.
`;

const steps = ref([
  {
    id: 1,
    title: "Formular herunterladen",
    description:
      "Laden Sie das PDF-Formular über den untenstehenden Link herunter.",
    icon: CloudDownload,
  },
  {
    id: 2,
    title: "Formular ausfüllen",
    description:
      "Füllen Sie das Formular mit allen benötigten Angaben vollständig aus.",
    icon: Pen,
  },
  {
    id: 3,
    title: "Formular senden",
    description: `Senden Sie das ausgefüllte Formular per E-Mail an <a href='mailto:info@circusdirektor.de' class='link'>info@circusdirektor.de</a>`,
    icon: CheckCircle,
  },
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
