// src/stores/useTicketStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Ticket {
  id: string
  title: string
  category: 'Redes' | 'M365' | 'Acceso'
  priority: 'crítica' | 'alta' | 'media' | 'baja'
  status: 'Abierto' | 'En Proceso' | 'Resuelto'
  slaDeadline: string
}

export const useTicketStore = defineStore('tickets', () => {
  const filterCategory = ref<string>('Todas')

  const tickets = ref<Ticket[]>([
    {
      id: 'INC-101',
      title: 'Fallo de autenticación en M365 post-actualización',
      category: 'M365',
      priority: 'alta',
      status: 'Abierto',
      slaDeadline: '15 mins'
    },
    {
      id: 'INC-102',
      title: 'Perdida de conectividad con Servidor VPN Corporate',
      category: 'Redes',
      priority: 'crítica',
      status: 'En Proceso',
      slaDeadline: '30 mins'
    },
    {
      id: 'INC-103',
      title: 'Solicitud de permisos de acceso a grupo Google Workspace',
      category: 'Acceso',
      priority: 'baja',
      status: 'Resuelto',
      slaDeadline: '4 horas'
    }
  ])

  const filteredTickets = computed(() => {
    if (filterCategory.value === 'Todas') return tickets.value
    return tickets.value.filter(t => t.category === filterCategory.value)
  })

  const openTicketsCount = computed(() => {
    return tickets.value.filter(t => t.status !== 'Resuelto').length
  })

  function updateStatus(id: string, newStatus: Ticket['status']) {
    const ticket = tickets.value.find(t => t.id === id)
    if (ticket) {
      ticket.status = newStatus
    }
  }

  return {
    tickets,
    filterCategory,
    filteredTickets,
    openTicketsCount,
    updateStatus
  }
})
