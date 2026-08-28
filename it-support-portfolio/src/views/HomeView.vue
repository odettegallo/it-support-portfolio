<script setup lang="ts">
import { ref } from 'vue'
import SystemStatusBadge from '@/components/SystemStatusBadge.vue'
import TicketList from '@/components/TicketList.vue'
import UserProvisioning from '@/components/UserProvisioning.vue'
import KnowledgeBaseCard from '@/components/KnowledgeBaseCard.vue'

// Estado de servicios para el Dashboard simulado
const systemServices = ref([
  { name: 'Microsoft 365 Auth', status: 'Online' as const },
  { name: 'Servidor VPN Corporate', status: 'Degradado' as const },
  { name: 'Google Workspace Sync', status: 'Online' as const }
])

// Proyectos con Metodología (Contexto -> Solución -> Métricas / Impacto)
const caseStudies = ref([
  {
    id: 1,
    title: 'Optimización de Tiempos de Respuesta N1 con GLPI',
    context: 'Atención a usuarios en entorno corporativo con alto flujo de solicitudes sin estandarizar.',
    challenge: 'Reducir el cuello de botella en la categorización de incidentes y mitigar solicitudes repetitivas.',
    solution: 'Implementación de plantillas de diagnóstico inicial para tickets y creación de base de conocimiento (KB) de autoservicio para restablecimiento de credenciales.',
    metrics: '⚡ Reducción del 35% en tiempo medio de resolución (MTTR) y mejora en el cumplimiento de SLA.',
    tags: ['GLPI', 'SLA', 'Atención al Cliente', 'Mesa de Ayuda']
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
    tags: ['Ciberseguridad', 'SOC N1', 'Phishing', 'Entra ID']
  }
])

// Certificaciones agrupadas
const certifications = ref([
  { title: 'Google IT Support Professional Certificate', issuer: 'Google / Coursera', date: 'Jul 2024', category: 'TI & Soporte' },
  { title: 'Transformación Digital con IA y Automatización (150h)', issuer: 'Academia Desafío Latam', date: 'Dic 2025', category: 'IA & Automatización' },
  { title: 'MSC Linux 101 (30h)', issuer: '8dot8 Academy / TTPSEC', date: 'Abr 2026', category: 'Sistemas & Linux' },
  { title: 'Rol del Analista SOC (15h)', issuer: '8dot8 Academy / TTPSEC', date: 'Abr 2026', category: 'Ciberseguridad' },
  { title: 'Phishing y Fraude Digital (12h)', issuer: 'Academia CEA', date: 'Abr 2026', category: 'Ciberseguridad' },
  { title: 'Fundamentos en Ciberseguridad', issuer: 'Microsoft & LinkedIn', date: 'Nov 2024', category: 'Ciberseguridad' }
])
</script>

<template>
  <div class="portfolio-page">


    <!-- 1. HERO SECTION / Presentación -->
    <header class="hero-section" id="about">
      <div class="hero-content">
        <span class="badge-role">Analista de Soporte TI N1 | Automation & Frontend Enthusiast</span>
        <h1>Resolución eficiente de incidentes, atención cercana y automatización operativa</h1>
        <p class="hero-bio">
          Especializada en la gestión de tickets (GLPI), administración de usuarios y accesos en
          <strong>Microsoft 365</strong> y <strong>Google Workspace</strong>, diagnóstico de redes y soporte operativo.
          Combino más de 2 años de experiencia directa al usuario con herramientas interactivas de automatización.
        </p>

        <div class="hero-actions">
          <a href="#dashboard" class="btn-primary">🖥️ Probar Dashboard en Vivo</a>
          <a href="#contact" class="btn-secondary">✉️ Contactar / Descargar CV</a>
        </div>

        <div class="tech-badges">
          <span>GLPI</span>
          <span>Microsoft 365</span>
          <span>Google Workspace</span>
          <span>Linux (Bash)</span>
          <span>SOC N1</span>
          <span>Vue.js</span>
        </div>
      </div>
    </header>

    <!-- 2. PROYECTO ESTRELLA: DASHBOARD EN VIVO -->
    <section class="section-container" id="dashboard">
      <div class="section-header">
        <h2>🖥️ Proyecto Estrella: Dashboard de Operaciones TI</h2>
        <p>Demostración interactiva de herramientas visuales para mesa de ayuda, gestión de incidentes y aprovisionamiento de cuentas.</p>
      </div>

      <SystemStatusBadge :services="systemServices" />

      <div class="layout-grid">
        <section class="left-col">
          <TicketList />
        </section>
        <section class="right-col">
          <UserProvisioning />
          <KnowledgeBaseCard class="margin-top" />
        </section>
      </div>
    </section>

    <!-- 3. CASOS DE ÉXITO Y PROYECTOS TÉCNICOS -->
    <section class="section-container bg-alt" id="projects">
      <div class="section-header">
        <h2>🚀 Casos de Éxito & Proyectos de Impacto</h2>
        <p>Proyectos explicados con contexto, desafíos, soluciones aplicadas y métricas alcanzadas.</p>
      </div>

      <div class="projects-grid">
        <div v-for="project in caseStudies" :key="project.id" class="project-card">
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag-pill">{{ tag }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p><strong>Contexto:</strong> {{ project.context }}</p>
          <p><strong>Desafío:</strong> {{ project.challenge }}</p>
          <p><strong>Solución:</strong> {{ project.solution }}</p>
          <div class="metrics-box">
            {{ project.metrics }}
          </div>
        </div>
      </div>
    </section>

    <!-- 4. CERTIFICACIONES Y EDUCACIÓN -->
    <section class="section-container" id="certs">
      <div class="section-header">
        <h2>📜 Certificaciones & Credenciales Oficiales</h2>
        <p>Formación continua en Soporte TI, Ciberseguridad, Administración de Sistemas y Automatización.</p>
      </div>

      <div class="certs-grid">
        <div v-for="(cert, index) in certifications" :key="index" class="cert-card">
          <div class="cert-icon">🎓</div>
          <div>
            <h4>{{ cert.title }}</h4>
            <p class="cert-issuer">{{ cert.issuer }} • <span class="cert-date">{{ cert.date }}</span></p>
            <span class="cert-badge">{{ cert.category }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. SECCIÓN DE CONTACTO & DATOS -->
    <footer class="contact-section" id="contact">
      <div class="contact-content">
        <h2>📫 Hablemos de oportunidades</h2>
        <p>¿Buscas una Analista de Soporte TI capacitada para optimizar tus procesos operativos y resolver incidentes con rapidez?</p>

        <div class="contact-links">
          <a href="mailto:tu-correo@dominio.com" class="contact-btn">✉️ Enviar un Correo</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="contact-btn outline">🔗 Perfil de LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener" class="contact-btn outline">💻 Perfil de GitHub</a>
        </div>
        <p class="copyright">© 2026 - Portafolio Profesional de Soporte TI N1</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Estilos Globales del Portafolio */
.portfolio-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1e293b;
  background-color: #f8fafc;
  line-height: 1.6;
}



/* Hero Section */
.hero-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #ffffff;
  text-align: center;
}
.hero-content { max-width: 850px; margin: 0 auto; }
.badge-role {
  background: #3b82f6;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}
.hero-section h1 { font-size: 2.2rem; margin: 1rem 0; line-height: 1.3; }
.hero-bio { font-size: 1.1rem; color: #cbd5e1; margin-bottom: 2rem; }
.hero-actions { display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; }
.btn-primary { background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; }
.btn-secondary { background: #334155; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; }

.tech-badges { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.tech-badges span { background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 4px; font-size: 0.85rem; }

/* Contenedores de Secciones */
.section-container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
.bg-alt { background-color: #ffffff; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; }
.section-header { margin-bottom: 2.5rem; text-align: center; }
.section-header h2 { font-size: 1.8rem; color: #0f172a; margin-bottom: 0.5rem; }
.section-header p { color: #64748b; }

/* Grid del Dashboard */
.layout-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }
.margin-top { margin-top: 20px; }

/* Casos de Éxito / Proyectos */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
.project-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.project-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
.tag-pill { background: #eff6ff; color: #1d4ed8; font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; font-weight: 600; }
.project-card h3 { font-size: 1.2rem; color: #1e293b; margin-bottom: 12px; }
.project-card p { font-size: 0.9rem; color: #475569; margin-bottom: 8px; }
.metrics-box { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; margin-top: 12px; }

/* Certificaciones */
.certs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
.cert-card { background: #ffffff; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; display: flex; gap: 12px; align-items: center; }
.cert-icon { font-size: 1.8rem; }
.cert-card h4 { font-size: 0.95rem; margin: 0; color: #0f172a; }
.cert-issuer { font-size: 0.8rem; color: #64748b; margin: 2px 0; }
.cert-badge { background: #f1f5f9; color: #475569; font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; }

/* Contacto & Footer */
.contact-section { background: #0f172a; color: white; padding: 4rem 2rem; text-align: center; }
.contact-content { max-width: 600px; margin: 0 auto; }
.contact-links { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0; }
.contact-btn { background: #2563eb; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; }
.contact-btn.outline { background: transparent; border: 1px solid #475569; color: #cbd5e1; }
.copyright { font-size: 0.8rem; color: #64748b; margin-top: 2rem; }

@media (max-width: 768px) {
  .layout-grid { grid-template-columns: 1fr; }
  .navbar { flex-direction: column; gap: 1rem; }
}
</style>
