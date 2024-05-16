<script lang="ts" setup>
import storage from '@/services/customStorage';
import IconYoutube from '@/components/icons/IconYoutube.vue';
import { getTrailerByID } from '@/services';
import router from '@/router';
import { toast } from 'vue3-toastify';

const { stream, type, id } = defineProps(['stream', 'type', 'id']);

const embedLink = await getTrailerByID(type, id).then((data) => {
  if (data) {
    return 'https://www.youtube.com/embed/' + data;
  } else {
    return 'https://www.youtube.com/embed/';
  }
});

const isFavorited = storage.getItem(id);

const addFavorite = () => {
  toast.success('Added on your list of favorites!');
  setTimeout(() => {
    storage.addItem(stream);
    router.go();
  }, 1000);
};

const removeFavorite = () => {
  toast.success('Removed on your list of favorites!');
  setTimeout(() => {
    storage.removeItem(stream.id);
    router.go();
  }, 1000);
};
</script>

<template>
  <div class="p-5 z-10">
    <div class="text-white w-12/12 md:w-4/12">
      <h4 class="text-3xl font-bold whitespace-normal">
        {{ stream.title ? stream.title : stream.name }}
      </h4>
      <div class="flex space-x-2 pb-2 items-center text-gray-500">
        <p class="text-sm">
          {{
            stream.release_date
              ? stream.release_date.split('-')[0]
              : stream.first_air_date.split('-')[0]
          }}
        </p>
        <p class="text-green-500 font-bold text-xs rounded-full py-1 px-2">
          {{ stream.vote_average }}
        </p>
        <span> | </span>
        <p class="text-sm">
          {{
            stream.runtime
              ? stream.runtime + ' min'
              : stream.number_of_episodes
                ? stream.number_of_episodes + ' Episodes'
                : ''
          }}
        </p>
      </div>

      <p class="line-clamp-4 text-lg font-bold pt-2">{{ stream.tagline }}</p>
      <p class="text-sm line-clamp-6">{{ stream.overview }}</p>
    </div>

    <div class="flex justify-start space-x-3 text-sm text-white py-5 items-center">
      <button
        type="button"
        class="rounded-lg px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold bg-red-600 border-2 border-red-600"
      >
        <a :href="embedLink" target="_blank" class="flex">
          <i>
            <IconYoutube />
          </i>

          Trailer
        </a>
      </button>

      <div>
        <button
          v-if="!isFavorited"
          class="border-2 rounded-lg px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold"
          @click="addFavorite"
        >
          🤍 Favoritar
        </button>
        <button
          v-else
          class="border-2 rounded-lg px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold"
          @click="removeFavorite"
        >
          🤍 Favorito
        </button>
      </div>
    </div>
  </div>
</template>
