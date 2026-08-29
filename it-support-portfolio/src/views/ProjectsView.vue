<!-- src/views/ProjectsView.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedTag = ref<string>('Todos')

const caseStudies = ref([
  {
    id: 1,
    title: 'Optimización de Tiempos de Respuesta N1 con GLPI',
    context: 'Atención a usuarios en entorno corporativo con alto flujo de solicitudes sin estandarizar.',
    challenge: 'Reducir el cuello de botella en la categorización de incidentes y mitigar solicitudes repetitivas.',
    solution: 'Implementación de plantillas de diagnóstico inicial para tickets y creación de base de conocimiento (KB) de autoservicio para restablecimiento de credenciales.',
    metrics: '⚡ Reducción del 35% en tiempo medio de resolución (MTTR) y mejora en el cumplimiento de SLA.',
    tags: ['GLPI', 'SLA', 'Mesa de Ayuda']
  },
  {
    id: 2,
    title: 'Automatización de Onboarding en M365 & Google Workspace',
    context: 'Asignación manual de licencias y creación de correos corporativos que tomaba hasta 45 minutos por usuario.',
    challenge: 'Minimizar errores humanos en la asignación de permisos y acelerar el tiempo de preparación para nuevos colaboradores.',
    solution: 'Desarrollo de formularios interactivos y scripts para el aprovisionamiento de cuentas y configuración inicial de grupos de seguridad.',
    metrics: '⏱️ Reducción del tiempo de onboarding de 45 min a menos de 5 min por usuario.',
    tags: ['Microsoft 365', 'Google Workspace', 'PowerShell', 'Automatización']
  },
  {
    id: 3,
    title: 'Laboratorio de Análisis de Phishing y Respuesta a Incidentes N1',
    context: 'Monitoreo preventivo contra ataques de ingeniería social e intentos de intrusión por correo electrónico.',
    challenge: 'Identificación rápida de encabezados de correo sospechosos y aislamiento preventivo de credenciales comprometidas.',
    solution: 'Aplicación de protocolos de análisis de encabezados (headers), revisión de logs de acceso y aislamiento de cuentas según estándares de SOC N1.',
    metrics: '🛡️ Mitigación del 100% de simulaciones de phishing reportadas en el entorno de pruebas.',
    tags: ['Ciberseguridad', 'SOC N1', 'Phishing']
  }
])

const allTags = computed(() => {
  const tagsSet = new Set<string>()
  caseStudies.value.forEach(p => p.tags.forEach(t => tagsSet.add(t)))
  return ['Todos', ...Array.from(tagsSet)]
})

const filteredProjects = computed(() => {
  if (selectedTag.value === 'Todos') return caseStudies.value
  return caseStudies.value.filter(p => p.tags.includes(selectedTag.value))
})
</script>

<template>
  <div class="projects-view">
    <header class="section-header">
      <h1>🚀 Casos de Estudio & Proyectos Técnicos</h1>
      <p>Proyectos explicados mediante contexto de negocio, desafíos de soporte, soluciones técnicas y métricas cuantificables.</p>
    </header>

    <div class="filter-container">
      <button
        v-for="tag in allTags"
        :key="tag"
        :class="['filter-btn', { active: selectedTag === tag }]"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="projects-grid">
      <article v-for="project in filteredProjects" :key="project.id" class="project-card">
        <div class="project-header">
          <h3>{{ project.title }}</h3>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag-pill">{{ tag }}</span>
          </div>
        </div>

        <div class="project-body">
          <p><strong>Contexto:</strong> {{ project.context }}</p>
          <p><strong>Desafío:</strong> {{ project.challenge }}</p>
          <p><strong>Solución:</strong> {{ project.solution }}</p>
        </div>

        <div class="metrics-box">
          {{ project.metrics }}
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.projects-view { max-width: 1200px; margin: 0 auto; padding: 3rem 2rem; }
.section-header { text-align: center; margin-bottom: 2rem; }
.section-header h1 { font-size: 2rem; color: #0f172a; }
.section-header p { color: #64748b; margin-top: 0.5rem; }

.filter-container { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 2.5rem; }
.filter-btn {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}
.filter-btn.active, .filter-btn:hover { background: #2563eb; color: #ffffff; border-color: #2563eb; }

.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px; }
.project-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.project-header h3 { font-size: 1.15rem; color: #1e293b; margin-bottom: 8px; }
.project-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
.tag-pill { background: #eff6ff; color: #1d4ed8; font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; font-weight: 600; }
.project-body p { font-size: 0.9rem; color: #475569; margin-bottom: 8px; }
.metrics-box { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; margin-top: 16px; }
</style>
