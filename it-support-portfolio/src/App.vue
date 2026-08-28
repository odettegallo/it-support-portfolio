<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/LayoutComponents/NavBar.vue'
import FooterP from '@/components/LayoutComponents/FooterP.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <FooterP />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
