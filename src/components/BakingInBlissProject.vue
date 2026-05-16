<script setup>
import ProjectDetailLayout from './ProjectDetailLayout.vue'
import { buildProjectSlides } from '../utils/projectSlides.js'
import imgPortada from '../assets/projects/recetario/imgPortada.svg'

const screenshotModules = import.meta.glob('../assets/projects/recetario/screenshot*.{png,svg}', {
  eager: true,
  import: 'default'
})

const slides = buildProjectSlides(imgPortada, screenshotModules)

const proyecto = {
  titulo: 'Recetario privado - Baking In Bliss',
  anio: '2025',
  descripcion:
    'Recetario web privado para el emprendimiento de budines y cupcakes de mi hermana. Partí de la base del sistema de stock de Serotonine y lo adapté desde cero para centralizar recetas de uso interno.',
  tecnologias: ['Vue 3', 'Vuetify', 'MongoDB', 'Express'],
  caracteristicas: [
    'Acceso con inicio de sesión (uso personal del emprendimiento)',
    'Buscador de recetas y filtro por categoría (cupcakes, budines y más)',
    'Alta de nuevas recetas',
    'Grilla con nombre, categoría, tiempo, temperatura, cantidad y acciones de editar o eliminar',
    'Detalle de receta con procedimiento, ingredientes, horno y demás datos'
  ],
  detalles: {
    contexto:
      'Baking In Bliss necesitaba un lugar único para guardar y consultar recetas sin depender de notas sueltas. Reutilicé la arquitectura que ya había usado en Serotonine (Vue, Vuetify, MongoDB y Express) pero redefiní el modelo y las pantallas para un recetario privado.',
    conclusion:
      'El sistema facilita el día a día del emprendimiento: buscar, filtrar, cargar y mantener recetas actualizadas con toda la información de preparación en un solo lugar.'
  }
}
</script>

<template>
  <ProjectDetailLayout
    titulo-pagina="Proyecto Baking In Bliss"
    :proyecto="proyecto"
    :slides="slides"
  />
</template>
