<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import imgPortada from '../assets/projects/serotonine/imgPortada.png'

const router = useRouter()

const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Control de Stock - Serotonine",
    descripcion: "Desarrollo de un sistema integral para la gestión de inventario y control de stock para la marca Serotonine.",
    imagen: imgPortada,
    tecnologias: ["Vue.js", "Vuetify", "MongoDB", "Express"],
    caracteristicas: [
      "Control de inventario en tiempo real",
      "Gestión de pedidos y envíos",
      "Dashboard con métricas clave",
      "Integración con sistemas de envío"
    ]
  }
]

const verProyecto = (proyecto) => {
  if (proyecto.id === 1) {
    router.push('/proyecto/serotonine')
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
      
      <!-- Grid de Proyectos -->
      <v-row justify="center">
        <v-col 
          v-for="proyecto in proyectos" 
          :key="proyecto.id" 
          cols="12" 
          :md="proyectos.length === 1 ? 6 : 6" 
          :lg="proyectos.length === 1 ? 4 : 4"
          class="d-flex justify-center"
        >
          <v-card
            class="project-card"
            @click="verProyecto(proyecto)"
            style="cursor: pointer; width: 100%; max-width: 400px"
          >
            <v-img
              :src="proyecto.imagen"
              height="250"
              contain
              class="project-image"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-4"></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <v-card-title class="text-h5">
              {{ proyecto.titulo }}
            </v-card-title>

            <v-card-text>
              <p class="text-body-1">{{ proyecto.descripcion }}</p>
              <v-chip-group class="mt-2 d-flex justify-center">
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
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image {
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-color: #f5f5f5;
}

.v-card-title {
  color: #04323a;
  font-weight: 500;
  padding: 16px 16px 8px;
}

.v-card-text {
  padding: 8px 16px 16px;
}

.text-body-1 {
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