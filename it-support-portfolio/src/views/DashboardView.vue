<!-- src/views/DashboardView.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useTicketStore } from '@/stores/useTicketStore'
import SystemStatusBadge from '@/components/DashboardComponents/SystemStatusBadge.vue'
import TicketList from '@/components/DashboardComponents/TicketList.vue'
import UserProvisioning from '@/components/DashboardComponents/UserProvisioning.vue'
import KnowledgeBaseCard from '@/components/DashboardComponents/KnowledgeBaseCard.vue'

const ticketStore = useTicketStore()

const systemServices = ref([
  { name: 'Microsoft 365 Auth', status: 'Online' as const },
  { name: 'Servidor VPN Corporate', status: 'Degradado' as const },
  { name: 'Google Workspace Sync', status: 'Online' as const }
])
</script>

<template>
  <div class="dashboard-view">
    <header class="dashboard-header">
      <div>
        <h1>🖥️ Centro de Operaciones TI N1</h1>
        <p>Panel interactivo para la gestión de incidentes, automatización de usuarios y monitoreo.</p>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">Tickets Pendientes</span>
        <span class="kpi-value">{{ ticketStore.openTicketsCount }}</span>
      </div>
    </header>

    <SystemStatusBadge :services="systemServices" />

    <div class="layout-grid">
      <main class="main-column">
        <TicketList />
      </main>

      <aside class="side-column">
        <UserProvisioning />
        <KnowledgeBaseCard class="margin-top" />
      </aside>
    </div>
  </div>
</template>

<style scoped>
.dashboard-view {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.kpi-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 12px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.kpi-label { display: block; font-size: 0.8rem; color: #64748b; }
.kpi-value { font-size: 1.5rem; font-weight: bold; color: #ef4444; }

.layout-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}
.margin-top { margin-top: 24px; }

@media (max-width: 900px) {
  .layout-grid { grid-template-columns: 1fr; }
}
</style>
