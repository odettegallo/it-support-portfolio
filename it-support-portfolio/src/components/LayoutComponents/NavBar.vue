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
      <RouterLink to="/about" @click="closeMenu">
        <span class="brand-name">Odette Gallo</span>
        <span class="brand-title">| Soporte TI N1</span>
      </RouterLink>
    </div>

    <button class="hamburger-btn" @click="toggleMenu" aria-label="Abrir menú">
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
    </button>

    <div class="nav-links" :class="{ 'is-active': isMenuOpen }">
      <RouterLink to="/" @click="closeMenu">Sobre Mí & CV</RouterLink>
      <RouterLink to="/home" @click="closeMenu">Inicio</RouterLink>
      <a href="/#dashboard" @click="closeMenu">Mesa de Ayuda Demo</a>
      <a href="/#projects" @click="closeMenu">Casos de Éxito</a>

      <a href="mailto:odettegallo@outlook.es" class="btn-nav" @click="closeMenu">Contacto Directo</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand a {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-name {
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
}

.brand-title {
  font-size: 0.9rem;
  color: #3b82f6;
  font-weight: 500;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #cbd5e1;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #3b82f6;
}

.btn-nav {
  background: #2563eb;
  color: white !important;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600 !important;
}

.btn-nav:hover {
  background: #1d4ed8;
}

.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.bar.open:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
.bar.open:nth-child(2) { opacity: 0; }
.bar.open:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger-btn { display: flex; }
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #0f172a;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #1e293b;
    align-items: flex-start;
    gap: 1.2rem;
  }
  .nav-links.is-active { display: flex; }
}
</style>
