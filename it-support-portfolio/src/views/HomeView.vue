<!-- src/views/HomeView.vue -->
<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const profileImage = ref('/img/foto_perfil.jpg')

// 1. Interfaz explícita para evitar errores de TypeScript
interface Course {
  name: string
  provider: string
  date: string
  duration?: string
  details?: string
}

interface TrainingCategory {
  title: string
  courses: Course[]
}

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

// 2. Tipado estricto aplicado aquí
const trainingCategories: TrainingCategory[] = [
  {
    title: '🛡️ TI & Ciberseguridad',
    courses: [
      {
        name: 'Certificación Profesional de Soporte de TI de Google',
        provider: 'Google (Coursera)',
        date: 'Julio 2024',
        details: 'Aspectos básicos de asistencia, redes informáticas, sistemas operativos, infraestructura de TI y seguridad.'
      },
      {
        name: 'Transformación Digital con IA y Automatización',
        provider: 'Academia Desafío Latam',
        duration: '150 hrs',
        date: 'Diciembre 2025'
      },
      {
        name: 'MSC Linux 101',
        provider: '8dot8 Academy & TTPSEC SPA',
        duration: '30 hrs',
        date: 'Abril 2026'
      },
      {
        name: 'Rol del Analista SOC',
        provider: '8dot8 Academy & TTPSEC SPA',
        duration: '15 hrs',
        date: 'Abril 2026'
      },
      {
        name: 'Ciberseguridad: Phishing y Fraude Digital',
        provider: 'Academia CEA',
        duration: '12 hrs',
        date: 'Abril 2026'
      },
      {
        name: 'Fundamentos en Ciberseguridad',
        provider: 'Microsoft & LinkedIn',
        duration: '5.5 hrs',
        date: 'Noviembre 2024'
      }
    ]
  },
  {
    title: '🏢 Entornos Corporativos & Datos',
    courses: [
      {
        name: 'Gestión de Datos con Microsoft 365',
        provider: 'Microsoft & LinkedIn',
        duration: '1.7 hrs',
        date: 'Enero 2025'
      },
      {
        name: 'Excel Aplicado a los Negocios (Avanzado)',
        provider: 'Universidad Austral (Coursera)',
        date: 'Agosto 2020'
      },
      {
        name: 'Estatuto Administrativo Avanzado',
        provider: 'Academia CEA',
        duration: '40 hrs',
        date: 'Diciembre 2025'
      }
    ]
  },
  {
    title: '🤝 Gestión de Servicio & Habilidades Blandas',
    courses: [
      {
        name: 'Habilidades Socioemocionales para la Empleabilidad',
        provider: 'Eidos Global, Accenture & Skills Builder',
        duration: '25 hrs',
        date: 'Julio 2026'
      },
      {
        name: 'Técnicas de Servicio Orientadas al Cliente',
        provider: 'Sercotec',
        date: 'Abril 2023'
      },
      {
        name: 'Conflict Resolution Skills',
        provider: 'UC Irvine (Coursera)',
        date: 'Agosto 2020'
      }
    ]
  }
]
</script>

<template>
  <div class="home-page">
    <div class="container">

      <!-- 1. HEADER DE PERFIL CON FOTO -->
      <header class="profile-card">
        <div class="avatar-container">
          <img :src="profileImage" alt="Odette Gallo Martínez" class="profile-img" />
          <span class="status-indicator" title="Disponible para trabajar"></span>
        </div>
        <div class="profile-info">
          <span class="badge-role">Analista de Soporte TI Nivel 1 | Mesa de Ayuda</span>
          <h1>Odette Gallo Martínez</h1>
          <p class="summary">
            Certificada en <strong>Google IT Support Professional</strong> y con más de 2 años de experiencia directa atendiendo usuarios, gestionando incidentes N1 con GLPI y administrando identidades en M365 y Google Workspace. Combino mi formación en Administración Pública con habilidades en desarrollo Front-End para optimizar procesos operativos.
          </p>
          <div class="contact-actions">
            <RouterLink to="/dashboard" class="btn-primary">🖥️ Ver Dashboard en Vivo</RouterLink>
            <a href="https://docs.google.com/document/d/1ZVogLKvQpSm6wbemcgyfRbujwxy0rzPt/edit?usp=sharing&ouid=101854029669132058599&rtpof=true&sd=true" target="_blank" rel="noopener" class="btn-secondary">📄 Ver CV</a>
          </div>
        </div>
      </header>

      <!-- 2. PROPUESTA DE VALOR -->
      <section class="section">
        <div class="card highlight-card">
          <h3>💡 Propuesta de Valor</h3>
          <p>
            Aporto un enfoque metódico para la gestión de tickets, priorización de requerimientos y continuidad operativa. Mi combinación de conocimiento de administración pública y desarrollo Front-End me permite entender la experiencia del usuario final y crear herramientas simples de automatización interna.
          </p>
        </div>
      </section>

      <!-- 3. COMPETENCIAS TÉCNICAS -->
      <section class="section">
        <h3>🛠️ Competencias Técnicas & Herramientas</h3>
        <div class="skills-grid">
          <div v-for="skillGroup in coreSkills" :key="skillGroup.category" class="card skill-card">
            <h4>{{ skillGroup.category }}</h4>
            <ul>
              <li v-for="item in skillGroup.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 4. EXPERIENCIA LABORAL -->
      <section class="section">
        <h3>💼 Experiencia Destacada en TI</h3>
        <div class="experience-list">
          <div v-for="job in experienceTimeline" :key="job.company" class="card job-card">
            <div class="job-header">
              <div>
                <h4>{{ job.role }}</h4>
                <span class="company">{{ job.company }}</span>
              </div>
              <span class="period-badge">{{ job.period }}</span>
            </div>
            <ul>
              <li v-for="achievement in job.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 5. EDUCACIÓN PRINCIPAL -->
      <section class="section">
        <h3>🎓 Educación Principal</h3>
        <div class="edu-grid">
          <div class="card edu-card google-cert">
            <div class="cert-header">
              <span class="icon">🏆</span>
              <h4>Google IT Support Professional Certificate</h4>
            </div>
            <p>Google / Coursera (2024)</p>
            <small>Redes, Sistemas Operativos, Infraestructura y Ciberseguridad.</small>
          </div>
          <div class="card edu-card">
            <div class="cert-header">
              <span class="icon">💻</span>
              <h4>Bootcamp Desarrollo Front-End</h4>
            </div>
            <p>Talento Digital / Desafío Latam</p>
            <small>Desarrollo web moderno con Vue.js y TypeScript (2025-2026).</small>
          </div>
          <div class="card edu-card">
            <div class="cert-header">
              <span class="icon">🏛️</span>
              <h4>Administración Pública</h4>
            </div>
            <p>Universidad de Valparaíso</p>
            <small>Licenciatura y Título Profesional (2012 - 2017).</small>
          </div>
        </div>
      </section>

      <!-- 6. CAPACITACIONES Y CERTIFICACIONES -->
      <section class="section">
        <h3>📜 Capacitaciones & Formación Continua</h3>
        <div class="training-grid">
          <div v-for="cat in trainingCategories" :key="cat.title" class="card training-category-card">
            <h4>{{ cat.title }}</h4>
            <div class="courses-list">
              <div v-for="course in cat.courses" :key="course.name" class="course-item">
                <div class="course-header">
                  <span class="course-name">{{ course.name }}</span>
                  <span v-if="course.duration" class="badge-duration">{{ course.duration }}</span>
                </div>
                <div class="course-meta">
                  <span>{{ course.provider }}</span>
                  <span class="dot">•</span>
                  <span>{{ course.date }}</span>
                </div>
                <p v-if="course.details" class="course-details">{{ course.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding: 3rem 1.5rem;
  background: #f8fafc;
  color: #1e293b;
  min-height: 100vh;
}

.container {
  max-width: 950px;
  margin: 0 auto;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.profile-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.avatar-container {
  position: relative;
  flex-shrink: 0;
}

.profile-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #eff6ff;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
}

.status-indicator {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 18px;
  height: 18px;
  background-color: #22c55e;
  border: 3px solid #ffffff;
  border-radius: 50%;
}

.profile-info h1 {
  font-size: 1.8rem;
  color: #0f172a;
  margin: 0.4rem 0;
}

.badge-role {
  background: #eff6ff;
  color: #2563eb;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.summary {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #475569;
  margin: 0.8rem 0 1.2rem;
}

.contact-actions {
  display: flex;
  gap: 0.75rem;
}

.btn-primary {
  background: #2563eb;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.btn-secondary {
  background: #f1f5f9;
  color: #334155;
  padding: 8px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.section {
  margin-bottom: 2.5rem;
}

.section h3 {
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 1rem;
}

.highlight-card {
  border-left: 4px solid #2563eb;
  background: linear-gradient(90deg, #f8fafc 0%, #ffffff 100%);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1rem;
}

.skill-card h4 {
  font-size: 0.95rem;
  color: #1e293b;
  margin-top: 0;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f1f5f9;
}

.skill-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-card li {
  font-size: 0.85rem;
  color: #475569;
  padding: 4px 0;
  display: flex;
  align-items: center;
}

.skill-card li::before {
  content: "•";
  color: #2563eb;
  font-weight: bold;
  display: inline-block;
  width: 1em;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.job-header h4 {
  margin: 0;
  font-size: 1.05rem;
  color: #0f172a;
}

.company {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}

.period-badge {
  background: #f1f5f9;
  color: #2563eb;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 600;
}

.job-card ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #334155;
  font-size: 0.9rem;
}

.job-card li {
  margin-bottom: 0.4rem;
}

.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}

.cert-header h4 {
  margin: 0;
  font-size: 0.95rem;
  color: #0f172a;
}

.google-cert {
  border-color: #93c5fd;
  background: #eff6ff;
}

.edu-card p {
  margin: 0 0 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2563eb;
}

.edu-card small {
  color: #64748b;
  font-size: 0.8rem;
}

/* ESTILOS DE LA SECCIÓN DE CAPACITACIONES */
.training-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.training-category-card h4 {
  margin: 0 0 1rem 0;
  font-size: 1.05rem;
  color: #0f172a;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 0.5rem;
}

.courses-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.course-item {
  padding-bottom: 0.75rem;
  border-bottom: 1px dashed #e2e8f0;
}

.course-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.course-name {
  font-weight: 600;
  font-size: 0.92rem;
  color: #1e293b;
}

.badge-duration {
  background: #eff6ff;
  color: #2563eb;
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 10px;
  white-space: nowrap;
  font-weight: 600;
}

.course-meta {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 0.25rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.dot {
  color: #cbd5e1;
}

.course-details {
  font-size: 0.82rem;
  color: #475569;
  margin: 0.4rem 0 0;
  background: #f8fafc;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
}

@media (max-width: 640px) {
  .profile-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .contact-actions {
    justify-content: center;
  }

  .job-header {
    flex-direction: column;
  }

  .course-header {
    flex-direction: column;
  }
}
</style>
