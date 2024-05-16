<script lang="ts" setup>
import CardComponent from './CardComponent.vue';

const props = defineProps(['results', 'page', 'routerType']);
</script>

<template >
  <main class="px-3 md:px-10 pt-24 pb-12 bg-slate-900">
    <div class="grid grid-cols-4 justify-items-center items-center gap-6">
      <CardComponent v-for="item in props.results" :key="item.id" :item="item" />
    </div>
  </main>
</template>
