<template>
  <CircusJumbotron text="Reservieren Sie Ihren Platz" />

  <div class="flex justify-center">
    <Spinner
      v-if="fetchState == FetchState.Loading"
      color="#cb3032"
      size="100"
    />

    <div v-else-if="fetchState == FetchState.NotStarted" class="flex flex-col">
      <div
        class="gap-6 items-center mx-auto max-w-screen-xl flex flex-col text-center justify-center px-4 lg:px-6"
      >
        <div class="font-light text-gray-500 sm:text-lg">
          <h2 class="mb-4 text-3xl tracking-tight font-semibold text-gray-900">
            <span style="font-size: 6em" class="mb-24 lg:mt-0 mt-36 block"
              >👍</span
            >
          </h2>
          <h2 class="mb-2 text-heading">Fast geschafft!</h2>
          <p class="text-body">
            Klicken Sie auf die Schaltfläche, um Ihre Reservierung
            abzuschließen.
          </p>
        </div>
      </div>
      <hr class="pb-3 mt-3 mx-6" />
      <form
        class="flex flex-col items-center mb-12"
        @submit.prevent="handleSubmit"
      >
        <label class="flex items-center mb-4 text-body">
          <input type="checkbox" class="mr-2 text-body" required />
          Ich akzeptiere die
          <NuxtLink class="link ml-1" to="/legal/presale-conditions"
            >Vorverkaufsbedingungen</NuxtLink
          >.
        </label>
        <button type="submit" class="button mx-auto m-3 mt-0">
          Reservierung abschließen
        </button>
      </form>
    </div>
    <PresaleVerifySuccess v-else-if="fetchState == FetchState.Success" />
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

useHead({
  title: "Ottilianer → Vorverkauf → Verifizierung",
});

const { query } = useRoute();

const fetchState = ref<FetchState>(FetchState.NotStarted);

async function handleSubmit() {
  await $fetch("/api/presale/verify", {
    method: "POST",
    body: { code: query.code },
    onRequest: () => {
      fetchState.value = FetchState.Loading;
    },
    onResponse: ({ response }) => {
      if (response.ok) {
        fetchState.value = FetchState.Success;
        toast.success("Ihre Reservierung wurde erfolgreich verifiziert.");
      } else {
        fetchState.value = FetchState.Error;
        toast.error(
          "Es ist ein Fehler aufgetreten. Prüfen Sie den Code und versuchen Sie es erneut."
        );
      }
    },
    onResponseError: () => {
      fetchState.value = FetchState.Error;
    },
  });
}

if (!query.code) {
  await navigateTo("/");
}
</script>
