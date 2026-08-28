<script setup lang="ts">
import type { Ticket } from '@/stores/useTicketStore'

const props = defineProps<{ ticket: Ticket }>()
const emit = defineEmits<{ (e: 'change-status', id: string, status: Ticket['status']): void }>()

const handleStatusChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('change-status', props.ticket.id, target.value as Ticket['status'])
}
</script>

<template>
  <div :class="['ticket-card', ticket.priority.toLowerCase()]">
    <div class="ticket-header">
      <span class="ticket-id">{{ ticket.id }}</span>
      <span class="ticket-category">{{ ticket.category }}</span>
    </div>
    <h4>{{ ticket.title }}</h4>
    <p class="sla">⏱️ SLA: {{ ticket.slaDeadline }}</p>
    <div class="ticket-footer">
      <label>Estado:</label>
      <select :value="ticket.status" @change="handleStatusChange">
        <option value="Abierto">Abierto</option>
        <option value="En Proceso">En Proceso</option>
        <option value="Resuelto">Resuelto</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.ticket-card {
  background: #ffffff;
  border-left: 5px solid #cbd5e1;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.ticket-card.crítica { border-left-color: #ef4444; }
.ticket-card.alta { border-left-color: #f97316; }
.ticket-card.media { border-left-color: #eab308; }
.ticket-card.baja { border-left-color: #3b82f6; }
.ticket-header { display: flex; justify-content: space-between; font-size: 0.8rem; color: #64748b; }
.sla { font-size: 0.85rem; color: #475569; }
.ticket-footer { margin-top: 10px; display: flex; gap: 8px; align-items: center; }
</style>
