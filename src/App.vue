<script lang="ts" setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <div class="min-w-[320px]">
    <HeaderComponent />

    <Suspense>
      <RouterView />
      <template #fallback>
        <p>Carregando...</p>
      </template>
    </Suspense>
  </div>
</template>

<style>
@import url('@/assets/build.css');
</style>
