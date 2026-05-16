<script setup>
import { useRouter } from 'vue-router'
import imgSerotonine from '../assets/projects/serotonine/imgPortada.png'
import imgRecetario from '../assets/projects/recetario/imgPortada.svg'
import imgUnas from '../assets/projects/unas/imgPortada.svg'

const router = useRouter()

const proyectos = [
  {
    id: 1,
    titulo: 'Control de Stock - Serotonine',
    descripcion:
      'Gestión de inventario y stock en tiempo real para la marca Serotonine.',
    imagen: imgSerotonine,
    tecnologias: ['Vue 3', 'Vuetify', 'MongoDB', 'Express'],
    ruta: '/proyecto/serotonine'
  },
  {
    id: 2,
    titulo: 'Recetario - Baking In Bliss',
    descripcion:
      'Recetario privado para el emprendimiento de budines y cupcakes: login, buscador, filtros por categoría y gestión completa de recetas.',
    imagen: imgRecetario,
    tecnologias: ['Vue 3', 'Vuetify', 'MongoDB', 'Express'],
    ruta: '/proyecto/baking-in-bliss'
  },
  {
    id: 3,
    titulo: 'Agrib Nails',
    descripcion:
      'Turnos, reservas, historial por clienta y descuentos automáticos según servicio. Panel admin y acceso para clientas.',
    imagen: imgUnas,
    tecnologias: ['Vue 3', 'TypeScript', 'Vuetify'],
    ruta: '/proyecto/agrib-nails'
  }
]

const verProyecto = (proyecto) => {
  if (proyecto.ruta) {
    router.push(proyecto.ruta)
  }
}
</script>

<template>
  <section id="proyectos" class="py-8">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 mb-2" style="color: #04323a; font-weight: 500; letter-spacing: -0.5px">Proyectos</h2>
          <div class="title-divider mb-6"></div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          v-for="proyecto in proyectos"
          :key="proyecto.id"
          cols="12"
          sm="6"
          lg="4"
          class="d-flex justify-center"
        >
          <v-card
            class="project-card project-card--clickable"
            style="width: 100%; max-width: 400px"
            @click="verProyecto(proyecto)"
          >
            <v-img :src="proyecto.imagen" height="250" contain class="project-image">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-4"></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <v-card-title class="text-h6">
              {{ proyecto.titulo }}
            </v-card-title>

            <v-card-text>
              <p class="text-body-2">{{ proyecto.descripcion }}</p>
              <v-chip-group class="mt-2 d-flex flex-wrap justify-center">
                <v-chip
                  v-for="tecnologia in proyecto.tecnologias"
                  :key="tecnologia"
                  size="small"
                  color="primary"
                  variant="outlined"
                >
                  {{ tecnologia }}
                </v-chip>
              </v-chip-group>
              <p class="text-caption text-center mt-3 mb-0" style="color: #666">
                Clic para ver más detalles
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.project-card {
  transition: transform 0.2s;
  border: 1px solid #e0e0e0;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image {
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-color: #f8f7f2;
}

.v-card-title {
  color: #04323a;
  font-weight: 500;
  padding: 16px 16px 8px;
}

.v-card-text {
  padding: 8px 16px 16px;
}

.text-body-2 {
  color: #333;
  line-height: 1.6;
  margin-bottom: 12px;
}

.v-chip {
  border-color: #04323a;
  color: #04323a;
}

.title-divider {
  width: 60px;
  height: 3px;
  background-color: #04323a;
  margin: 0 auto;
}
</style>
