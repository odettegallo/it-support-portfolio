<!-- src/views/NotFoundView.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found-container">
    <div class="not-found-card">
      <div class="error-code-wrapper">
        <span class="error-code">404</span>
        <div class="icon-badge">📡</div>
      </div>

      <h1>Página no encontrada</h1>
      <p class="description">
        La ruta que intentas visitar no existe o fue movida. Parece que hay un problema de enrutamiento en este enlace.
      </p>

      <div class="actions">
        <RouterLink to="/" class="btn-primary">
          🏠 Volver al Inicio
        </RouterLink>
        <RouterLink to="/dashboard" class="btn-secondary">
          🖥️ Ir al Dashboard
        </RouterLink>
      </div>

      <div class="tech-note">
        <small>HTTP Status Code: 404 Not Found | Portafolio TI Odette Gallo</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background-color: #f8fafc;
}

.not-found-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 3rem 2rem;
  max-width: 520px;
  width: 100%;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.05);
}

.error-code-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.error-code {
  font-size: 5rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
  letter-spacing: -2px;
}

.icon-badge {
  position: absolute;
  top: -10px;
  right: -25px;
  font-size: 2rem;
  background: #eff6ff;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.2);
}

h1 {
  font-size: 1.6rem;
  color: #0f172a;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn-primary {
  background: #2563eb;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #f1f5f9;
  color: #334155;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid #cbd5e1;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-secondary:hover {
  background: #e2e8f0;
  transform: translateY(-1px);
}

.tech-note {
  border-top: 1px solid #f1f5f9;
  padding-top: 1.25rem;
  color: #94a3b8;
  font-family: monospace;
}

@media (max-width: 480px) {
  .not-found-card {
    padding: 2rem 1.25rem;
  }

  .error-code {
    font-size: 4rem;
  }

  .actions {
    flex-direction: column;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
  }
}
</style>
