<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const articles = ref([
  { id: 1, title: 'Procedimiento de Reset de Contraseña en Entra ID', tags: ['M365', 'Seguridad'] },
  { id: 2, title: 'Diagnóstico de Red en Linux: `ping`, `traceroute` y `netstat`', tags: ['Linux', 'Redes'] },
  { id: 3, title: 'Identificación y Reporte de Correos de Phishing (SOC N1)', tags: ['SOC', 'Seguridad'] }
])

const filteredArticles = computed(() => {
  return articles.value.filter(a =>
    a.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    a.tags.some(t => t.toLowerCase().includes(searchQuery.value.toLowerCase()))
  )
})
</script>

<template>
  <div class="kb-panel">
    <h3>Base de Conocimiento N1 (Runbooks)</h3>
    <input v-model="searchQuery" placeholder="Buscar solución rápida (ej. Linux, Phishing)..." class="search-input" />

    <div class="articles-list">
      <div v-for="art in filteredArticles" :key="art.id" class="article-item">
        📋 <strong>{{ art.title }}</strong>
        <div class="tags">
          <span v-for="tag in art.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kb-panel { background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }
.search-input { width: 100%; padding: 8px; margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 4px; }
.article-item { border-bottom: 1px solid #f1f5f9; padding: 10px 0; }
.tag { background: #e0f2fe; color: #0369a1; font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; margin-right: 4px; }
</style>
