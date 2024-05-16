<script setup lang="ts">
import GridComponent from '@/components/GridComponent.vue';
import { reactive } from 'vue';
import storage from '@/services/customStorage.ts';
const favoriteList = reactive(storage.getFavoriteList());

console.log(favoriteList);
</script>

<template>
  <main class="px-3 pt-16 pb-12 bg-slate-900">
    <p class="text-3xl font-bold text-white p-2 text-center">My List</p>
    <div>
      <GridComponent
        v-if="!(favoriteList.length == 0)"
        :results="favoriteList"
        :router-type="'home'"
      />

      <h6 v-else class="text-base font-bold text-gray-500 text-center">Sua lista está vazia :(</h6>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - 64px);
  max-height: calc(100vh - 64px);
}
</style>
