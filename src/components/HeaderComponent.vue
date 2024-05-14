<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import HeaderIcon from '@/components/icons/HeartIcon.vue'
</script>
<template>
  <header class="bg-gray-800 flex items-center gap-8 p-4 justify-between w-full">
    <RouterLink to="/">
      <img alt="logo" class="w-8" src="@/assets/imgs/logo.png" />
    </RouterLink>

    <div class="flex justify-between w-full">
      <nav class="flex gap-8 text-white font-semibold">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
        <RouterLink to="/series">Series</RouterLink>
      </nav>

      <RouterLink to="/content">
        <p class="text-red-600 font-bold">heart</p>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>

</style>
