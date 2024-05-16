<script setup lang="ts">
import GridComponent from '@/components/GridComponent.vue';
import router from '@/router';
import { getMovies } from '@/services';

const page = Number(router.currentRoute.value.params.page);
const data = await getMovies(page);
const results = await data.results;
</script>

<template>
  <GridComponent :results="results" :page="page" :router-type="'movies'" />
</template>
