<script lang="ts" setup>
import { type MovieProps } from '@/interfaces/index';
import router from '@/router';

const props = defineProps(['item', 'isInFavorite']);

const goToDetailPage = () => {
  if (props.isInFavorite == true) {
    router.push({
      name: 'Detail',
      params: {
        type: props.item.title ? 'movie' : 'tv',
        id: props.item.id
      }
    });
  } else {
    router.push({
      name: 'Detail',
      params: { type: props.item.title ? 'movie' : 'tv', id: props.item.id }
    });
  }
};

const getImageUrl = (item: MovieProps) => 'https://image.tmdb.org/t/p/original' + item.poster_path;
</script>

<template>
  <div
    @click="goToDetailPage"
    class="bg-slate-600 p-2 rounded-md hover:scale-105 ease-in-out duration-300 cursor-pointer"
  >
    <img :src="getImageUrl(props.item)" alt="image" />
  </div>
</template>
