export interface Project {
  id: string;
  title: string;
  category: 'Troubleshooting' | 'Active Directory' | 'Networking';
  problem: string;
  tools: string[];
  steps: string[];
  outcome: string;
  learned: string;
}

export const projectsData: Project[] = [
  {
    id: 'win-login-failure',
    title: 'Resolución de Falla de Inicio de Sesión en Windows 11',
    category: 'Troubleshooting',
    problem: 'Usuario no puede iniciar sesión localmente tras aplicar actualización del sistema ("Contraseña incorrecta").',
    tools: ['Windows 11', 'Event Viewer', 'PowerShell', 'CMD'],
    steps: [
      'Acceso en Modo Seguro mediante menú de recuperación.',
      'Revisión de registros de seguridad en visor de eventos (Event ID 4625).',
      'Restablecimiento de credenciales de usuario mediante comando net user en entorno de recuperación.',
      'Verificación y corrección de políticas de bloqueo de cuenta.'
    ],
    outcome: 'Acceso restaurado en menos de 15 minutos sin pérdida de datos del usuario.',
    learned: 'Análisis profundo de Event Viewer para identificar causas raíz de fallas en cuentas de usuario.'
  },
  {
    id: 'ad-virtual-lab',
    title: 'Despliegue de laboratorio en VirtualBox con Windows Server & Active Directory',
    category: 'Active Directory',
    problem: 'Necesidad de simular un entorno corporativo seguro con jerarquía de usuarios y carpetas compartidas.',
    tools: ['VirtualBox', 'Windows Server 2022', 'Active Directory Domain Services', 'GPO'],
    steps: [
      'Instalación y configuración de controlador de dominio (DC) y DNS.',
      'Creación de Unidades Organizativas (OUs) e importación masiva de usuarios.',
      'Configuración de Group Policy Objects (GPO) para restringir acceso al Panel de Control y mapear unidades de red.'
    ],
    outcome: 'Dominio funcional con más de 20 usuarios simulados y políticas de seguridad aplicadas.',
    learned: 'Administración de identidades, permisos NTFS y despliegue estructurado de GPOs.'
  },
  {
    id: 'network-troubleshooting',
    title: 'Diagnóstico y Configuración de Red Local (LAN)',
    category: 'Networking',
    problem: 'Falla intermitente de resolución de nombres de dominio y caídas de conectividad en terminales locales.',
    tools: ['Wireshark', 'Packet Tracer', 'Ping/Tracert', 'PowerShell (Get-NetIPConfiguration)'],
    steps: [
      'Captura de tráfico en tiempo real con Wireshark para detectar saturación de broadcast.',
      'Asignación de direcciones IP estáticas y configuración manual de DNS primario y secundario.',
      'Pruebas de latencia y diagnóstico mediante ping y tracert hacia la puerta de enlace predeterminada.'
    ],
    outcome: 'Estabilización del tráfico de red local y optimización del tiempo de respuesta DNS en un 40%.',
    learned: 'Interpretación de paquetes de red mediante Wireshark y configuración de la capa de enlace e IP.'
  }
];
