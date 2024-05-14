<script setup lang="ts">
import {  RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="mainContent">
    <HeaderComponent />

    <RouterView />
  </div>
</template>

<style scoped>

</style>
