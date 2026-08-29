<!-- src/components/Footer.vue -->
<script setup lang="ts">
// Componente de Footer reutilizable
</script>

<template>
  <footer class="contact-section" id="contact">
    <div class="contact-content">
      <h2>📫 Hablemos de oportunidades</h2>
      <p>¿Buscas una Analista de Soporte TI capacitada para optimizar tus procesos operativos y resolver incidentes con rapidez?</p>

      <div class="contact-links">
        <!-- Corregido el prefijo mailto: -->
        <a href="mailto:odettegallo@outlook.es" class="contact-btn">✉️ Enviar un Correo</a>
        <a href="https://www.linkedin.com/in/odette-gallo-mart%C3%ADnez-35913b271/" target="_blank" rel="noopener" class="contact-btn outline">🔗 Perfil de LinkedIn</a>
        <a href="https://github.com/odettegallo" target="_blank" rel="noopener" class="contact-btn outline">💻 Perfil de GitHub</a>
      </div>
      <p class="copyright">© 2026 - Portafolio Profesional de Soporte TI N1</p>
    </div>
  </footer>
</template>

<style scoped>
.contact-section {
  background: #0f172a;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.contact-btn {
  background: #2563eb;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.contact-btn:hover {
  background: #1d4ed8;
}

.contact-btn.outline {
  background: transparent;
  border: 1px solid #475569;
  color: #cbd5e1;
}

.contact-btn.outline:hover {
  background: #1e293b;
  color: white;
}

.copyright {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 2rem;
}
</style>
