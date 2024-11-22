<template>
  <section class="items-center py-8 mx-auto max-w-screen-xl">
    <form class="flex flex-col gap-3">
      <div>
        <label for="visitors-input">Anzahl der Karten</label> <br />
        <input
          type="number"
          id="visitors-input"
          placeholder="Anzahl der Karten"
          class="circus-input"
        />
      </div>

      <div>
        <label for="performance-select">Your favorite food</label> <br />

        <select
          name="performance-select"
          id="performance-select"
          class="circus-input"
          placeholder="Ihre gewünschte Vorstellung"
        >
          <option disabled selected>Vorstellung wählen</option>
          <hr />
          <optgroup label="Sondervorstellungen">
            <option value="artichoke">Artichokes</option>
            <option value="broccoli">Broccoli</option>
            <option value="cabbage">Cabbages</option>
          </optgroup>
          <hr />
          <optgroup label="Vormittagsvorstellungen">
            <option value="artichoke">Artichokes</option>
            <option value="broccoli">Broccoli</option>
            <option value="cabbage">Cabbages</option>
          </optgroup>
          <hr />
          <optgroup label="Nachmittagsvorstellungen">
            <option value="cod">Cod</option>
            <option value="haddock">Haddock</option>
            <option value="salmon">Salmon</option>
            <option value="turbot">Turbot</option>
          </optgroup>
        </select>
      </div>

      <div>
        <label for="email-input">Ihre Email Addresse</label> <br />
        <input
          type="email"
          placeholder="Ihre Email Addresse"
          class="circus-input"
          id="email-input"
        />
      </div>

      <button type="button" class="circus-button mt-4">Reservieren</button>
    </form>
  </section>
</template>

<script setup lang="ts"></script>
