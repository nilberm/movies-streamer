<script setup lang="ts">
import GridComponent from '@/components/GridComponent.vue';
import router from '@/router';
import { getMovies } from '@/services';

const page = Number(router.currentRoute.value.params.page);
const data = await getMovies(page);
const results = await data.results;
const totalPages = await data.total_pages;
</script>

<template>
  <GridComponent
    :results="results"
    :page="page"
    :router-type="'movies'"
    :totalPages="totalPages > 500 ? 500 : totalPages"
    :hasPagination="true"
  />
</template>
