<script setup lang="ts">
import { ref } from 'vue'

const newUser = ref({
  fullName: '',
  email: '',
  department: 'IT Support',
  provider: 'M365',
  licenses: [] as string[]
})

const logOutput = ref<string[]>([])

const handleProvision = () => {
  if (!newUser.value.fullName || !newUser.value.email) return

  const timestamp = new Date().toLocaleTimeString()
  logOutput.value.unshift(
    `[${timestamp}] PS > New-UserProvisioning -User "${newUser.value.fullName}" -Platform "${newUser.value.provider}" -Status SUCCESS`
  )

  // Reset básico
  newUser.value.fullName = ''
  newUser.value.email = ''
}
</script>

<template>
  <div class="provisioning-panel">
    <h3>Simulador de Onboarding / Alta de Usuarios</h3>
    <form @submit.prevent="handleProvision" class="form-grid">
      <input v-model="newUser.fullName" placeholder="Nombre completo" required />
      <input v-model="newUser.email" type="email" placeholder="correo@empresa.com" required />

      <select v-model="newUser.provider">
        <option value="M365">Microsoft 365 (Entra ID)</option>
        <option value="Google Workspace">Google Workspace</option>
      </select>

      <button type="submit">Ejecutar Script de Alta</button>
    </form>

    <div v-if="logOutput.length" class="console-output">
      <h4>Logs de Automatización (PowerShell/Bash):</h4>
      <pre v-for="(log, i) in logOutput" :key="i">{{ log }}</pre>
    </div>
  </div>
</template>

<style scoped>
.provisioning-panel { background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; }
.form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
button { background: #2563eb; color: white; border: none; padding: 10px; border-radius: 6px; cursor: pointer; }
.console-output { background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 6px; margin-top: 15px; font-family: monospace; }
</style>
