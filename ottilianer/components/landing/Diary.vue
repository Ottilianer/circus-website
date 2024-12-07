<template>
  <section>
    <div
      class="items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col gap-8"
    >
      <div class="font-light text-gray-500 sm:text-lg text-center">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Unser Tagebuch
        </h2>
        <p class="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          eaque animi numquam non laborum doloribus
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="(post, index) in blogPosts"
          :key="index"
          class="bg-white shadow rounded-lg overflow-hidden lg:min-w-96"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <span class="block text-gray-400 text-sm mb-2">{{
              post.date
            }}</span>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ post.title }}
            </h3>
            <div class="flex items-center text-sm text-gray-600">
              <span
                class="flex items-center mr-4 px-2 py-0.5 bg-primary/50 border-primary border rounded-full"
              >
                #Flügelschlag
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const blogPosts = ref([
  {
    title: "Lorem ipsum dolor sit amet",
    date: "16 July 2023",
    image: "https://loremflickr.com/320/240?random=1",
    views: 35,
    comments: 15,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "22 July 2023",
    image: "https://loremflickr.com/320/240?random=2",
    views: 42,
    comments: 23,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "22 July 2023",
    image: "https://loremflickr.com/320/240?random=3",
    views: 42,
    comments: 23,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "22 July 2023",
    image: "https://loremflickr.com/320/240?random=4",
    views: 42,
    comments: 23,
  },
]);
</script>
