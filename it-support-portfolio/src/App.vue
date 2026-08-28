<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/LayoutComponents/NavBar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <RouterView />
  </div>
</template>

<style>
/* Estilos base globales si es necesario */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-border;
}
</style>
