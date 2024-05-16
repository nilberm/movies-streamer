<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import IconHeart from '@/components/icons/IconHeart.vue';
</script>

<template>
  <header class="bg-gray-800 flex items-center gap-8 p-4 justify-between w-full h-16">
    <RouterLink :to="{ name: 'home', params: { page: 1 } }">
      <img alt="logo" class="w-8" src="@/assets/imgs/logo.png" />
    </RouterLink>

    <div class="flex justify-between w-full">
      <nav class="flex gap-8 text-white font-semibold">
        <RouterLink :to="{ name: 'home', params: { page: 1 } }">Home</RouterLink>
        <RouterLink :to="{ name: 'movies', params: { page: 1 } }">Movies</RouterLink>
        <RouterLink :to="{ name: 'series', params: { page: 1 } }">Series</RouterLink>
      </nav>

      <RouterLink to="/my-list">
        <i>
          <IconHeart class="hover:scale-125 ease-in-out duration-300" />
        </i>
      </RouterLink>
    </div>
  </header>
</template>
