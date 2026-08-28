<script setup lang="ts">
import { useTicketStore } from '../../stores/useTicketStore'

const ticketStore = useTicketStore()
</script>

<template>
  <section class="ticket-simulator">
    <h2>Simulador de Mesa de Ayuda (Demo Interactiva con Pinia)</h2>
    <p>Haz clic en los tickets para cambiarlos de estado y simular la resolución de incidentes:</p>

    <div class="tickets-grid">
      <div
        v-for="ticket in ticketStore.tickets"
        :key="ticket.id"
        class="ticket-card"
        :class="ticket.status.toLowerCase().replace(' ', '-')"
      >
        <div class="ticket-header">
          <span class="badge">{{ ticket.priority }}</span>
          <span class="status">{{ ticket.status }}</span>
        </div>
        <h3>#{{ ticket.id }} - {{ ticket.title }}</h3>
        <p>Categoría: {{ ticket.category }}</p>

        <button
          v-if="ticket.status !== 'Resuelto'"
          @click="ticketStore.updateStatus(ticket.id, 'Resuelto')"
          class="btn-resolve"
        >
          Marcar como Resuelto
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ticket-simulator {
  background: #1e293b;
  color: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.tickets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.ticket-card {
  background: #0f172a;
  padding: 1.2rem;
  border-radius: 8px;
  border-left: 5px solid #3b82f6;
}

.ticket-card.resuelto {
  border-left-color: #10b981;
  opacity: 0.7;
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.badge {
  background: #ef4444;
  padding: 2px 8px;
  border-radius: 4px;
}

.btn-resolve {
  background: #10b981;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.btn-resolve:hover {
  background: #059669;
}
</style>
