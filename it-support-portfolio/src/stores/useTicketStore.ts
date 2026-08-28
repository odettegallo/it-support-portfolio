import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Ticket {
  id: string
  title: string
  category: 'Redes' | 'M365' | 'Hardware' | 'Acceso'
  priority: 'Baja' | 'Media' | 'Alta' | 'Crítica'
  status: 'Abierto' | 'En Proceso' | 'Resuelto'
  createdAt: string
  slaDeadline: string
}

export const useTicketStore = defineStore('tickets', () => {
  const tickets = ref<Ticket[]>([
    {
      id: 'INC-1001',
      title: 'Fallo de conexión VPN al teletrabajar',
      category: 'Redes',
      priority: 'Alta',
      status: 'Abierto',
      createdAt: '2026-08-27 09:00',
      slaDeadline: '4h restantes'
    },
    {
      id: 'INC-1002',
      title: 'Reset de contraseña y asignación de licencia M365',
      category: 'M365',
      priority: 'Media',
      status: 'En Proceso',
      createdAt: '2026-08-27 10:15',
      slaDeadline: '6h restantes'
    },
    {
      id: 'INC-1003',
      title: 'Error de sincronización en servidor de archivos Linux',
      category: 'Acceso',
      priority: 'Crítica',
      status: 'Abierto',
      createdAt: '2026-08-27 10:45',
      slaDeadline: '1h restante'
    }
  ])

  const filterCategory = ref<string>('Todas')

  const filteredTickets = computed(() => {
    if (filterCategory.value === 'Todas') return tickets.value
    return tickets.value.filter(t => t.category === filterCategory.value)
  })

  function updateStatus(id: string, newStatus: Ticket['status']) {
    const ticket = tickets.value.find(t => t.id === id)
    if (ticket) {
      ticket.status = newStatus
    }
  }

  function addTicket(newTicket: Omit<Ticket, 'id' | 'createdAt' | 'status'>) {
    tickets.value.unshift({
      ...newTicket,
      id: `INC-${1000 + tickets.value.length + 1}`,
      status: 'Abierto',
      createdAt: new Date().toLocaleString()
    })
  }

  return { tickets, filterCategory, filteredTickets, updateStatus, addTicket }
})
