<script setup>
import ProjectDetailLayout from './ProjectDetailLayout.vue'
import { buildProjectSlides } from '../utils/projectSlides.js'
import imgPortada from '../assets/projects/unas/imgPortada.svg'

const screenshotModules = import.meta.glob('../assets/projects/unas/screenshot*.{png,svg}', {
  eager: true,
  import: 'default'
})

const slides = buildProjectSlides(imgPortada, screenshotModules)

const proyecto = {
  titulo: 'Agrib Nails - Gestión de turnos y clientas',
  anio: '2025',
  descripcion:
    'Sistema web para mi emprendimiento de manicuría: panel de administración para mí y portal para clientas, con reservas, historial, precios y cálculo automático de descuentos según el servicio y los días desde la última visita.',
  tecnologias: ['Vue 3', 'TypeScript', 'JavaScript', 'Vuetify'],
  caracteristicas: [
    'Login de administradora y acceso de clientas por DNI',
    'Gestión de turnos disponibles: crear, editar y eliminar horarios',
    'Reservas en tiempo real con mínimo de 8 horas de anticipación',
    'Panel de reservas con búsqueda y filtros por estado y fecha',
    'Alta y edición de clientas y de precios de servicios',
    'Historial por clienta: fecha, servicio, descuento y motivo',
    'Descuentos automáticos según servicio (Semipermanente 15 días, Kapping 21, Soft gel 30) y progreso cada 3 visitas',
    'Estado del descuento visible para admin y clienta (visitas, progreso y fecha límite)',
    'Formulario de reserva con DNI, nombre, servicio y si el trabajo es propio o de otra profesional'
  ],
  detalles: {
    contexto:
      'Llevaba turnos y descuentos de forma manual, lo que consumía tiempo y generaba errores. Desarrollé Agrib Nails para automatizar reservas, el seguimiento de cada clienta y las reglas de descuento según el tipo de servicio y los días transcurridos desde la última visita.',
    conclusion:
      'Hoy cargo el turno con el servicio y el sistema calcula si corresponde descuento, muestra el estado (por ejemplo 1/3 hacia el próximo beneficio) y permite que cada clienta consulte sus turnos y descuentos ingresando su DNI.'
  }
}
</script>

<template>
  <ProjectDetailLayout titulo-pagina="Proyecto Agrib Nails" :proyecto="proyecto" :slides="slides" />
</template>
