<script setup lang="ts">
const skills = [
  'Administración M365 & Entra ID',
  'Google Workspace Admin',
  'Gestión de Tickets GLPI',
  'Soporte Técnico N1/N2',
  'Scripting Bash & PowerShell',
  'Fundamentos SOC N1'
]
</script>

<template>
  <div class="about-view">
    <div class="container">
      <h2>Sobre Mí</h2>
      <p class="intro">
        Analista de Soporte TI N1 enfocada en la resolución ágil de incidentes, automatización de procesos
        y mejora constante de la experiencia del usuario.
      </p>

      <h3>Competencias Técnicas</h3>
      <ul class="skills-list">
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about-view {
  padding: 3rem 2rem;
  background: #ffffff;
  color: #1e293b;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #475569;
  margin: 1rem 0 2rem;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  list-style: none;
  padding: 0;
}

.skills-list li {
  background: #f1f5f9;
  padding: 10px 14px;
  border-radius: 6px;
  font-weight: 500;
  border-left: 3px solid #2563eb;
}
</style>
