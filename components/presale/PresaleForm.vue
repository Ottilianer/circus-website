<template>
  <section class="py-8 px-4 md:px-0 mx-auto max-w-screen-lg">
    <form
      @submit.prevent="form.handleSubmit"
      class="flex flex-col gap-3 min-w-full"
    >
      <div>
        <label for="name-input">Vor- & Nachname</label> <br />
        <input
          v-model="form.name.value"
          type="text"
          placeholder="Vor- & Nachname"
          class="input"
          id="name-input"
          required
        />
      </div>

      <div>
        <label for="email-input">Email Addresse</label> <br />
        <input
          v-model="form.email.value"
          type="email"
          placeholder="Email Addresse"
          class="input"
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
          v-model="form.regularCards.value"
          type="number"
          min="0"
          id="regular-visitors-input"
          placeholder="Anzahl der Karten"
          class="input"
          required
        />
      </div>

      <div>
        <label for="discount-visitors-input"
          >Ermäßigte Karten (3-18 Jahre)</label
        >
        <br />
        <input
          v-model="form.discountCards.value"
          type="number"
          min="0"
          id="discount-visitors-input"
          placeholder="Anzahl der Karten"
          class="input"
          required
        />
      </div>

      <div>
        <label for="performance-select">Vorstellung wählen</label> <br />

        <select
          v-model="form.performance.value"
          name="performance-select"
          id="performance-select"
          class="input"
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
              {{ new Date(performance.date).toLocaleDateString("de") }} -
              {{ new Date(performance.date).toLocaleTimeString("de") }}
            </option>
          </optgroup>
          <optgroup label="Standardvorstellungen">
            <option
              :value="performance"
              v-for="performance in performances.filter(
                (performance) => !performance.specialPerformance
              )"
            >
              {{ new Date(performance.date).toLocaleDateString("de") }} -
              {{ new Date(performance.date).toLocaleTimeString("de") }}
            </option>
          </optgroup>
          <hr />
        </select>
      </div>

      <div class="flex flex-row items-center gap-2">
        <input type="checkbox" id="terms-checkbox" required />
        <label for="terms-checkbox" class="select-none"
          >Ich habe die
          <NuxtLink to="/legal/presale-conditions" target="_blank" class="link"
            >Vorverkaufsbedingungen</NuxtLink
          >
          gelesen und akzeptiere diese.</label
        >
        <br />
      </div>

      <button type="submit" class="button mt-4">
        Reservieren für {{ form.price }}€
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const { $pb } = useNuxtApp();
const form = useForm();

const performances = ref<CircusPerformance[]>([]);

function useForm() {
  const name = ref("");
  const email = ref("");
  const regularCards = ref(0);
  const discountCards = ref(0);
  const performance = ref<CircusPerformance | null>(null);

  async function handleSubmit() {
    if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name.value)) {
      toast.error("Bitte geben Sie einen gültigen Vor- und Nachnamen ein.");
      return;
    }

    if (regularCards.value + discountCards.value > 15) {
      toast.error(
        "Bitte nutzen Sie die Gruppenanmeldung bei mehr als 15 Karten."
      );
      return;
    }

    try {
      $fetch("/api/presale/create", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          regularCards: regularCards.value,
          discountCards: discountCards.value,
          performanceId: performance.value?.id,
        }),

        onResponse: ({ response }) => {
          if (response.ok) {
            toast.success(
              "Bitte bestätigen Sie Ihre Email-Adresse über den Link, den wir Ihnen zugesendet haben."
            );
          }
        },

        onResponseError: ({ response }) => {
          toast.error(`Interner Serverfehler: ${response.statusText}`);
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  const {
    presaleDiscountPrice,
    presaleRegularPrice,
    presaleSpecialDiscountPrice,
    presaleSpecialRegularPrice,
  } = useRuntimeConfig().public;
  const price = computed(() => {
    if (performance.value?.specialPerformance) {
      return (
        (regularCards.value || 0) * parseFloat(presaleSpecialRegularPrice) +
        (discountCards.value || 0) * parseFloat(presaleSpecialDiscountPrice)
      );
    } else {
      return (
        (regularCards.value || 0) * parseFloat(presaleRegularPrice) +
        (discountCards.value || 0) * parseFloat(presaleDiscountPrice)
      );
    }
  });

  return {
    handleSubmit,
    price,
    name,
    email,
    regularCards,
    discountCards,
    performance,
  };
}

const fetchPerformances = async () => {
  const performances = await $pb.collection("performances").getFullList();
  return performances as unknown as CircusPerformance[];
};

onMounted(async () => {
  performances.value = await fetchPerformances();
});
</script>
