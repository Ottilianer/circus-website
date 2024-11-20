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
          Discover the latest insights and updates from our team. We cover a
          wide range of topics to keep you informed and inspired.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(post, index) in blogPosts"
          :key="index"
          class="bg-white shadow rounded-lg overflow-hidden"
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
              <span class="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {{ post.views }}
              </span>
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                {{ post.comments }}
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
    title: "Finding best places to visit in California",
    date: "16 July 2023",
    image: "https://loremflickr.com/320/240?random=1",
    views: 35,
    comments: 15,
  },
  {
    title: "Top 10 restaurants in New York City",
    date: "22 July 2023",
    image: "https://loremflickr.com/320/240?random=2",
    views: 42,
    comments: 23,
  },
  {
    title: "Top 10 restaurants in New York City",
    date: "22 July 2023",
    image: "https://loremflickr.com/320/240?random=2",
    views: 42,
    comments: 23,
  },
  {
    title: "Top 10 restaurants in New York City",
    date: "22 July 2023",
    image: "https://loremflickr.com/320/240?random=2",
    views: 42,
    comments: 23,
  },
]);
</script>
