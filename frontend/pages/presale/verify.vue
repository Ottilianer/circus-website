<template>
  <CircusJumbotron text="Reservieren Sie Ihren Platz" />

  <div class="flex justify-center">
    <Spinner
      v-if="fetchState == FetchState.Loading"
      color="#cb3032"
      size="100"
    />
    <div v-else>
      <div v-if="!query.code">
        <Text
          title="Hoppla!"
          text="Du hast versucht, ohne Verifizierungscode deine Reservierung abzuschließen. Bitte überprüfe deine E-Mails und folge dem Link, den wir dir geschickt haben."
          class="pt-8 px-4 lg:pt-16 lg:px-6"
        />
        {{ query.code }}
        {{ query }}
      </div>
      <div
        v-else-if="fetchState == FetchState.NotStarted"
        class="flex flex-col"
      >
        <Text
          :title="textContent.title"
          :text="textContent.text"
          class="pt-8 px-4 lg:pt-16 lg:px-6"
        />
        <button @click="handleSubmit" class="button mx-auto m-3">
          Reservierung abschließen
        </button>
      </div>
      <div v-else-if="fetchState == FetchState.Success" class="flex flex-col">
        <Text
          title="Du hast es geschafft! 🎉"
          text="Deine Reservierung wurde erfolgreich abgeschlossen. Wir freuen uns darauf, dich bei uns begrüßen zu dürfen!"
          class="pt-8 px-4 lg:pt-16 lg:px-6"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Ottilianer → Circus → Vorverkauf → Verifizierung",
});

const { query } = useRoute();

enum FetchState {
  NotStarted,
  Loading,
  Error,
  Success,
}

const fetchState = ref<FetchState>(FetchState.NotStarted);

const textContent = {
  title: "Du bist fast fertig!",
  text: "Du musst nur noch auf die Schaltfläche klicken, um deine Reservierung abzuschließen. Toll oder?",
};

async function handleSubmit() {
  await $fetch("/api/circus/presale/verify", {
    method: "POST",
    body: { code: query.code },
    onRequest: () => {
      fetchState.value = FetchState.Loading;
    },
    onResponse: ({ response }) => {
      if (response.ok) {
        fetchState.value = FetchState.Success;
      } else {
        fetchState.value = FetchState.Error;
      }
    },
    onResponseError: () => {
      fetchState.value = FetchState.Error;
    },
  });
}
</script>
