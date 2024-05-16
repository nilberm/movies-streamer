<script lang="ts" setup>
import CardComponent from './CardComponent.vue';
import PaginationComponent from './PaginationComponent.vue';
import router from '@/router';

const props = defineProps(['results', 'page', 'routerType', 'totalPages', 'hasPagination']);

const nextPage = async () => {
  await router.push(`/${props.routerType}/${props.page + 1}`).then(() => router.go());
};

const previousPage = () => {
  router
    .push({
      name: `${props.routerType}`,
      params: { page: props.page > 1 ? props.page - 1 : 1 }
    })
    .then(() => {
      router.go();
    });
};
</script>

<template>
  <div class="px-3 md:px-10 pt-24 pb-12 bg-slate-900 flex flex-col gap-8">
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-6">
      <CardComponent v-for="item in props.results" :key="item.id" :item="item" />
    </div>
    <PaginationComponent
      v-if="props.hasPagination"
      :from="props.page"
      :to="props.totalPages"
      @previous="previousPage"
      @next="nextPage"
    />
  </div>
</template>
