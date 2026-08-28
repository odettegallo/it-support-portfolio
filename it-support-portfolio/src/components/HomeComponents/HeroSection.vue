<!-- src/components/HomeComponents/HeroSection.vue -->
<script setup lang="ts">
const kpis = [
  { value: '-50%', label: 'Tiempo de respuesta (Base KB)', sub: 'Corp. Municipal Viña del Mar' },
  { value: '2+ Años', label: 'Experiencia N1 Directa', sub: 'Mesa de Ayuda & GLPI' },
  { value: '< 5 min', label: 'Onboarding M365/Google', sub: 'Aprovisionamiento' }
]
</script>

<template>
  <header class="hero">
    <div class="hero-container">
      <div class="badge-status">
        <span class="dot-online"></span> Disponible para roles de Soporte TI N1 / Service Desk
      </div>

      <h1>Odette Gallo Martínez</h1>
      <h2>Analista de Soporte TI Nivel 1 & SysAdmin Junior</h2>

      <p class="summary">
        Especializada en gestión de tickets (GLPI), administración de identidades en Microsoft 365 y Google Workspace,
        y resolución metódica de incidentes en entornos corporativos.
      </p>

      <!-- Métricas de Impacto Directo -->
      <div class="kpi-grid">
        <div v-for="(kpi, i) in kpis" :key="i" class="kpi-card">
          <span class="kpi-value">{{ kpi.value }}</span>
          <span class="kpi-label">{{ kpi.label }}</span>
          <span class="kpi-sub">{{ kpi.sub }}</span>
        </div>
      </div>

      <div class="actions">
        <a href="#dashboard" class="btn-primary">⚡ Probar Dashboard de Soporte en Vivo</a>
        <a href="mailto:odettegallo@outlook.es" class="btn-outline">✉️ Contactar vía Email</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  background: radial-gradient(circle at top, #1e293b 0%, #0f172a 100%);
  color: #ffffff;
  padding: 4rem 1.5rem;
  text-align: center;
}

.hero-container {
  max-width: 900px;
  margin: 0 auto;
}

.badge-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid #10b981;
  color: #34d399;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.dot-online {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}

h1 { font-size: 2.8rem; font-weight: 800; margin-bottom: 0.2rem; }
h2 { font-size: 1.3rem; color: #60a5fa; font-weight: 500; margin-bottom: 1rem; }

.summary {
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

/* Tarjetas KPI de impacto */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.kpi-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.kpi-value { font-size: 2rem; font-weight: 800; color: #38bdf8; }
.kpi-label { font-size: 0.9rem; font-weight: 600; color: #f8fafc; }
.kpi-sub { font-size: 0.75rem; color: #64748b; margin-top: 4px; }

.actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-primary { background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; }
.btn-outline { border: 1px solid #475569; color: #cbd5e1; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; }
</style>
