<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import IconHeart from '@/components/icons/IconHeart.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconClose from '@/components/icons/IconClose.vue';
import { ref } from 'vue';
import router from '@/router';

const toogleMenu = ref(true);

const currentRoute = router.currentRoute._value.name;

const handleCurrentRoute = (value: string) => (value === currentRoute ? 'bg-gray-600' : '');
</script>

<template>
  <header>
    <div class="bg-gray-800 hidden items-center gap-8 p-4 justify-between w-full h-16 sm:flex">
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
    </div>

    <div class="bg-gray-800 flex items-center gap-8 p-4 justify-between w-full h-16 sm:hidden">
      <button
        type="button"
        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white outline-none"
        @click="toogleMenu = !toogleMenu"
      >
        <i>
          <IconMenu v-if="toogleMenu" />
          <IconClose v-if="!toogleMenu" />
        </i>
      </button>

      <RouterLink :to="{ name: 'home', params: { page: 1 } }">
        <img alt="logo" class="w-8" src="@/assets/imgs/logo.png" />
      </RouterLink>

      <RouterLink to="/my-list">
        <i>
          <IconHeart class="hover:scale-125 ease-in-out duration-300" />
        </i>
      </RouterLink>
    </div>

    <nav v-if="!toogleMenu" class="flex flex-col text-white font-semibold bg-gray-800 sm:hidden">
      <RouterLink
        class="px-6 py-4 hover:bg-gray-600"
        :class="handleCurrentRoute('home')"
        :to="{ name: 'home', params: { page: 1 } }"
        @click="toogleMenu = !toogleMenu"
        >Home</RouterLink
      >
      <RouterLink
        class="px-6 py-4 hover:bg-gray-600"
        :class="handleCurrentRoute('movies')"
        :to="{ name: 'movies', params: { page: 1 } }"
        @click="toogleMenu = !toogleMenu"
        >Movies</RouterLink
      >
      <RouterLink
        class="px-6 py-4 hover:bg-gray-600"
        :class="handleCurrentRoute('series')"
        :to="{ name: 'series', params: { page: 1 } }"
        @click="toogleMenu = !toogleMenu"
        >Series</RouterLink
      >
    </nav>
  </header>
</template>
