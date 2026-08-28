<script setup lang="ts">
interface ServiceStatus {
  name: string
  status: 'Online' | 'Degradado' | 'Offline'
}

defineProps<{
  services: ServiceStatus[]
}>()

const getBadgeClass = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'Online': return 'bg-green-100 text-green-800 border-green-300'
    case 'Degradado': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    case 'Offline': return 'bg-red-100 text-red-800 border-red-300'
  }
}
</script>

<template>
  <div class="status-panel">
    <h3>Estado de Servicios & Red</h3>
    <div class="badge-grid">
      <div
        v-for="service in services"
        :key="service.name"
        :class="['status-badge', getBadgeClass(service.status)]"
      >
        <span class="dot"></span>
        <strong>{{ service.name }}:</strong> {{ service.status }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-panel { margin-bottom: 1.5rem; }
.badge-grid { display: flex; gap: 10px; flex-wrap: wrap; }
.status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.bg-green-100 { background-color: #e6fffa; color: #234e52; border-color: #b2f5ea; }
.bg-yellow-100 { background-color: #fefcbf; color: #744210; border-color: #faf089; }
.bg-red-100 { background-color: #fed7d7; color: #9b2c2c; border-color: #feb2b2; }
</style>
