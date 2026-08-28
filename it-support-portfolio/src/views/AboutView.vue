<script setup lang="ts">
const coreSkills = [
  { category: 'Mesa de Ayuda & Ticketing', items: ['GLPI', 'Trazabilidad y Escalamiento N2', 'Atención N1', 'Creación de Base de Conocimiento'] },
  { category: 'Sistemas & Entornos Cloud', items: ['Microsoft 365 Admin', 'Google Workspace', 'Microsoft Teams', 'Nube GCP (Básico)'] },
  { category: 'Ciberseguridad & Sistemas', items: ['Análisis Phishing SOC N1', 'Linux (Bash 101)', 'Diagnóstico Redes LAN/Wi-Fi', 'Entra ID'] },
  { category: 'Desarrollo & Herramientas', items: ['Vue.js 3', 'TypeScript', 'HTML5 / CSS3', 'Excel Avanzado'] }
]

const experienceTimeline = [
  {
    period: 'Mayo 2023 – Julio 2025',
    role: 'Técnico Soporte Informático Nivel 1 / Mesa de Ayuda',
    company: 'Corporación Municipal de Viña del Mar',
    achievements: [
      'Gestión y categorización de incidentes N1 mediante GLPI con estandarización de respuestas.',
      'Estandarización de Base de Conocimiento (KB) reduciendo los tiempos de respuesta en un 50%.',
      'Administración de accesos y credenciales en Microsoft 365 y Google Workspace.',
      'Soporte técnico directo en la Plataforma AVIS y diagnósticos de hardware/conectividad.'
    ]
  },
  {
    period: 'Diciembre 2020 – Junio 2022',
    role: 'Administrativa',
    company: 'Municipalidad de Quillota',
    achievements: [
      'Atención ciudadana, registro de información en sistemas internos y reportabilidad técnica.'
    ]
  }
]
</script>

<template>
  <div class="about-page">
    <div class="container">
      <header class="about-header">
        <h1>Odette Gallo Martínez</h1>
        <h2>Analista de Soporte TI Nivel 1 | Mesa de Ayuda | Service Desk</h2>
        <p class="summary">
          Certificada en <strong>Google IT Support Professional</strong> y con más de 2 años de experiencia directa atendiendo usuarios, gestionando incidentes N1 con GLPI y administrando identidades en M365 y Google Workspace. Combino mi formación en Administración Pública con habilidades en desarrollo Front-End para optimizar procesos operativos y mejorar SLAs en mesas de ayuda.
        </p>
      </header>

      <section class="section">
        <h3>💡 Propuesta de Valor</h3>
        <p class="value-prop">
          Aporto un enfoque metódico para la gestión de tickets, priorización de requerimientos y continuidad operativa. Mi combinación de conocimiento de administración pública y desarrollo Front-End me permite entender la experiencia del usuario final y crear herramientas simples de automatización interna.
        </p>
      </section>

      <section class="section">
        <h3>🛠️ Competencias Técnicas & Herramientas</h3>
        <div class="skills-grid">
          <div v-for="skillGroup in coreSkills" :key="skillGroup.category" class="skill-card">
            <h4>{{ skillGroup.category }}</h4>
            <ul>
              <li v-for="item in skillGroup.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <h3>💼 Experiencia Destacada en TI</h3>
        <div class="timeline">
          <div v-for="job in experienceTimeline" :key="job.company" class="timeline-item">
            <span class="period">{{ job.period }}</span>
            <h4>{{ job.role }}</h4>
            <span class="company">{{ job.company }}</span>
            <ul>
              <li v-for="achievement in job.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <h3>🎓 Educación & Certificaciones Principales</h3>
        <div class="edu-grid">
          <div class="edu-card highlight">
            <h4>Google IT Support Professional Certificate</h4>
            <p>Google / Coursera (2024) — Redes, SO, Infraestructura y Ciberseguridad.</p>
          </div>
          <div class="edu-card">
            <h4>Bootcamp Desarrollo de Aplicaciones Front-End</h4>
            <p>Talento Digital para Chile / Academia Desafío Latam (2025-2026).</p>
          </div>
          <div class="edu-card">
            <h4>Administradora Pública & Licenciada</h4>
            <p>Universidad de Valparaíso (2012 - 2017).</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 3rem 1.5rem;
  background: #f8fafc;
  color: #1e293b;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.about-header h1 {
  font-size: 2.2rem;
  color: #0f172a;
  margin-bottom: 0.2rem;
}

.about-header h2 {
  font-size: 1.1rem;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
}

.summary {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #334155;
  background: #ffffff;
  padding: 1.25rem;
  border-radius: 8px;
  border-left: 4px solid #2563eb;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.section {
  margin-top: 2.5rem;
}

.section h3 {
  font-size: 1.3rem;
  color: #0f172a;
  margin-bottom: 1rem;
}

.value-prop {
  color: #475569;
  line-height: 1.6;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.skill-card {
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.skill-card h4 {
  font-size: 0.95rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #eff6ff;
  padding-bottom: 4px;
}

.skill-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-card li {
  font-size: 0.85rem;
  color: #64748b;
  padding: 3px 0;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  background: #ffffff;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.period {
  font-size: 0.8rem;
  color: #2563eb;
  font-weight: 600;
}

.timeline-item h4 {
  margin: 0.2rem 0;
  color: #0f172a;
}

.company {
  font-size: 0.85rem;
  color: #64748b;
  display: block;
  margin-bottom: 0.5rem;
}

.timeline-item ul {
  padding-left: 1.2rem;
  margin: 0;
  font-size: 0.9rem;
  color: #334155;
}

.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.edu-card {
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.edu-card.highlight {
  border-color: #3b82f6;
  background: #eff6ff;
}

.edu-card h4 {
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
}

.edu-card p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
}
</style>
