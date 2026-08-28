<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">
      <RouterLink to="/" @click="closeMenu">IT Support Portfolio</RouterLink>
    </div>

    <!-- Botón de Hamburguesa (Solo visible en pantallas pequeñas) -->
    <button class="hamburger-btn" @click="toggleMenu" aria-label="Abrir menú">
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
    </button>

    <!-- Enlaces de navegación -->
    <div class="nav-links" :class="{ 'is-active': isMenuOpen }">
      <RouterLink to="/" @click="closeMenu">Inicio</RouterLink>
      <RouterLink to="/about" @click="closeMenu">Sobre mí</RouterLink>
      <a href="/#dashboard" @click="closeMenu">Live Demo</a>
      <a href="/#projects" @click="closeMenu">Casos de Éxito</a>
      <a href="/#certs" @click="closeMenu">Certificaciones</a>
      <a href="/#contact" class="btn-nav" @click="closeMenu">Contacto</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand a {
  font-weight: 700;
  font-size: 1.2rem;
  color: #2563eb;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #475569;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.btn-nav {
  background: #2563eb;
  color: white !important;
  padding: 6px 14px;
  border-radius: 6px;
}

/* Botón Hamburguesa */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: #1e293b;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Animación del botón a 'X' */
.bar.open:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.bar.open:nth-child(2) {
  opacity: 0;
}
.bar.open:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* Adaptación Responsive */
@media (max-width: 768px) {
  .hamburger-btn {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    align-items: flex-start;
    gap: 1.2rem;
  }

  .nav-links.is-active {
    display: flex;
  }
}
</style>
