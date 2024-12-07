<template>
  <section class="items-center py-8 mx-auto max-w-screen-xl px-4 md:px-0">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
      <div>
        <label for="name-input">Vor- & Nachname</label> <br />
        <input
          v-model="formModel.name"
          type="text"
          placeholder="Vor- & Nachname"
          class="circus-input"
          id="name-input"
          required
        />
      </div>

      <div>
        <label for="email-input">Email Addresse</label> <br />
        <input
          v-model="formModel.email"
          type="email"
          placeholder="Email Addresse"
          class="circus-input"
          id="email-input"
          required
        />
      </div>

      <div>
        <label for="regular-visitors-input"
          >Reguläre Karten (über 18 Jahre)</label
        >
        <br />
        <input
          v-model="formModel.regularCards"
          type="number"
          min="0"
          id="regular-visitors-input"
          placeholder="Anzahl der Karten"
          class="circus-input"
          required
        />
      </div>

      <div>
        <label for="discount-visitors-input"
          >Ermäßigte Karten (3-18 Jahre)</label
        >
        <br />
        <input
          v-model="formModel.discountCards"
          type="number"
          min="0"
          id="discount-visitors-input"
          placeholder="Anzahl der Karten"
          class="circus-input"
          required
        />
      </div>

      <div>
        <label for="performance-select">Vorstellung wählen</label> <br />

        <select
          v-model="formModel.performance"
          name="performance-select"
          id="performance-select"
          class="circus-input"
          placeholder="Ihre gewünschte Vorstellung"
          required
        >
          <option disabled selected>Vorstellung wählen</option>
          <hr />
          <optgroup label="Sondervorstellungen">
            <option
              :value="performance"
              v-for="performance in performances.filter(
                (performance) => performance.specialPerformance
              )"
            >
              {{ new Date(performance.date).toLocaleDateString() }} -
              {{ new Date(performance.date).toLocaleTimeString() }}
            </option>
          </optgroup>
          <optgroup label="Nachmittagsvorstellungen">
            <option
              :value="performance"
              v-for="performance in performances.filter(
                (performance) => !performance.specialPerformance
              )"
            >
              {{ new Date(performance.date).toLocaleDateString() }} -
              {{ new Date(performance.date).toLocaleTimeString() }}
            </option>
          </optgroup>
          <hr />
        </select>
      </div>

      <div class="flex flex-row items-center gap-2">
        <input type="checkbox" id="terms-checkbox" required />
        <label for="terms-checkbox" class="select-none"
          >Ich habe die
          <NuxtLink
            to="/circus/presale-conditions"
            target="_blank"
            class="circus-link"
            >Vorverkaufsbedingungen</NuxtLink
          >
          gelesen und akzeptiere diese.</label
        >
        <br />
      </div>

      <button type="submit" class="circus-button mt-4">
        Reservieren für {{ price }}€
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useToast } from "vue-toastification";
import type { CircusPerformance } from "~/types/presales";

const toast = useToast();

const isSpecialPerformance = computed(() => false);

const formModel = reactive({
  name: "",
  email: "",
  regularCards: 0,
  discountCards: 0,
  performance: null as Performance | null,
});

async function handleSubmit() {
  console.log(formModel);
  if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(formModel.name)) {
    toast.error("Bitte geben Sie einen gültigen Vor- und Nachnamen ein.");
    return;
  }

  if (formModel.regularCards + formModel.discountCards > 15) {
    toast.error(
      "Bitte nutzen Sie die Gruppenanmeldung bei mehr als 15 Karten."
    );
    return;
  }

  try {
    $fetch("/api/circus/presale/create", {
      method: "POST",
      body: formModel,

      onResponse: ({ response }) => {
        if (response.ok) {
          toast.success(
            "Bitte bestätigen Sie Ihre Email-Adresse über den Link, den wir Ihnen zugesendet haben."
          );
        }
      },

      onResponseError: ({ response }) => {
        toast.error(
          `Interner Serverfehler: ${response.statusText} - Bitte prüfen Sie Ihre Eingaben.`
        );
      },
    });
  } catch (error) {
    console.error(error);
  }
}

const price = computed(() => {
  if (isSpecialPerformance.value) {
    return (
      (formModel.regularCards || 0) * 12 + (formModel.discountCards || 0) * 9
    );
  } else {
    return (
      (formModel.regularCards || 0) * 9 + (formModel.discountCards || 0) * 6
    );
  }
});

const { data } = await useAsyncData("performances", () =>
  $fetch("/api/circus/performances")
);

const performances = computed(
  () => data.value?.data as unknown as CircusPerformance[]
);
</script>
