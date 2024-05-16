<script lang="ts" setup>
import IconArrow from '@/components/icons/IconArrow.vue';

const props = defineProps(['from', 'to']);
const emits = defineEmits(['next', 'previous']);
const nextPage = () => emits('next');
const previousPage = () => emits('previous');
</script>

<template>
  <nav aria-label="Page navigation" class="w-full flex items-center justify-center">
    <ul class="flex gap-4 items-center justify-center">
      <li
        class="rounded-full p-2 bg-white hover:scale-110 ease-in-out duration-300 cursor-pointer"
        @click="previousPage"
      >
        <a href="#"
          ><i> <IconArrow class="w-4 h-4" /> </i
        ></a>
      </li>
      <span class="text-white font-medium">{{ `${props.from} de ${props.to}` }}</span>
      <li
        class="rounded-full p-2 bg-white hover:scale-110 ease-in-out duration-300 cursor-pointer"
        @click="nextPage"
      >
        <a href="#"
          ><i> <IconArrow class="w-4 h-4 rotate-180" /> </i
        ></a>
      </li>
    </ul>
  </nav>
</template>
