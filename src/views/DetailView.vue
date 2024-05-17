<script lang="ts" setup>
import { getStreamByID } from '@/services';
import DescriptionComponent from '@/components/DescriptionComponent.vue';

import { reactive } from 'vue';

const props = defineProps(['type', 'id']);
const stream = await getStreamByID(props.type, props.id);

const imageUrl = 'https://image.tmdb.org/t/p/original' + stream.backdrop_path;

const styleBackground = reactive({
  backgroundImage: 'linear-gradient(to right, black, rgba(0, 0, 0, 0.5)), url(' + imageUrl + ')'
});
</script>

<template>
  <main
    class="bg-fixed bg-center bg-cover py-24 px-5 grid items-center bg-slate-600"
    :style="styleBackground"
  >
    <DescriptionComponent :stream="stream" :type="props.type" :id="props.id" />
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - 64px);
  max-height: calc(100vh - 64px);
}
</style>
