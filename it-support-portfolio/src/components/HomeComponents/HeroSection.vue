<template>
  <header class="hero-section" id="about">
    <div class="hero-content">
      <span class="badge-role">Analista de Soporte TI N1 | Mesa de Ayuda & Service Desk</span>
      <h1>Odette Gallo Martínez</h1>
      <p class="hero-bio">
        Especialista en atención a usuarios, gestión de tickets con <strong>GLPI</strong> y administración de cuentas en <strong>Microsoft 365</strong> y <strong>Google Workspace</strong>. Certificada en Google IT Support[cite: 2].
      </p>

      <div class="hero-actions">
        <a href="#dashboard" class="btn-primary">🖥️ Probar Mesa de Ayuda Interactive</a>
        <a href="mailto:odettegallo@outlook.es" class="btn-secondary">✉️ Contactar</a>
      </div>

      <div class="tech-badges">
        <span>GLPI</span>
        <span>Microsoft 365</span>
        <span>Google Workspace</span>
        <span>Redes LAN/Wi-Fi</span>
        <span>Plataforma AVIS</span>
        <span>Vue.js</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  text-align: center;
}
.hero-content { max-width: 800px; margin: 0 auto; }
.badge-role {
  background: #2563eb;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}
.hero-section h1 { font-size: 2.5rem; margin: 1rem 0 0.5rem; }
.hero-bio { font-size: 1.1rem; color: #cbd5e1; margin-bottom: 2rem; line-height: 1.6; }
.hero-actions { display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; }
.btn-primary { background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; }
.btn-secondary { background: #334155; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; }
.tech-badges { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.tech-badges span { background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 4px; font-size: 0.85rem; }
</style>
