<script setup lang="ts">
import { useTicketStore } from '@/stores/useTicketStore'
import TicketCard from './TicketCard.vue'

const ticketStore = useTicketStore()
</script>

<template>
  <div class="ticket-list-container">
    <div class="filter-bar">
      <h3>Gestión de Incidentes N1</h3>
      <select v-model="ticketStore.filterCategory">
        <option value="Todas">Todas las categorías</option>
        <option value="Redes">Redes</option>
        <option value="M365">M365</option>
        <option value="Acceso">Acceso</option>
      </select>
    </div>
    <div class="grid">
      <TicketCard
        v-for="ticket in ticketStore.filteredTickets"
        :key="ticket.id"
        :ticket="ticket"
        @change-status="ticketStore.updateStatus"
      />
    </div>
  </div>
</template>

<style scoped>
.filter-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
</style>
