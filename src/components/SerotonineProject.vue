<script setup>
import { ref } from 'vue'

const carousel = ref(0)
const slides = [
  {
    src: '/src/assets/projects/serotonine/screenshot0.png',
    alt: 'Vista inicial del sistema'
  },
  {
    src: '/src/assets/projects/serotonine/screenshot1.png',
    alt: 'Vista general del sistema de stock'
  },
  {
    src: '/src/assets/projects/serotonine/screenshot2.png',
    alt: 'Búsqueda de productos'
  },
  {
    src: '/src/assets/projects/serotonine/screenshot3.png',
    alt: 'Edición de stock'
  },
  {
    src: '/src/assets/projects/serotonine/screenshot4.png',
    alt: 'Vista de productos'
  },
  {
    src: '/src/assets/projects/serotonine/screenshot5.png',
    alt: 'Panel de control'
  },
  {
    src: '/src/assets/projects/serotonine/screenshot6.png',
    alt: 'Gestión de stock'
  },
  {
    src: '/src/assets/projects/serotonine/screenshot8.png',
    alt: 'Vista final del sistema'
  }
]

const proyecto = {
  titulo: "Control de Stock para Serotonine",
  descripcion: "Desarrollé esta aplicación web para resolver una necesidad concreta de gestión de stock en tiempo real entre dos ubicaciones: Canals (donde se encuentra la dueña de Serotonine) y Nueva Córdoba (donde se preparan los pedidos para retiro rápido).",
  tecnologias: ["Vue 3", "Vuetify", "JavaScript", "Firebase", "Vite"],
  caracteristicas: [
    "Búsqueda rápida de productos por nombre",
    "Detección de productos con stock 0",
    "Edición de stock en tiempo real desde cualquier ubicación",
    "Acceso seguro con contraseña para uso interno"
  ],
  detalles: {
    contexto: "Inicialmente administrábamos el stock a través de un Google Sheet, pero a medida que los productos crecieron en cantidad, se volvió tedioso y poco práctico. Por eso decidí crear un sistema propio, accesible desde celular o PC, con login seguro y sincronización en tiempo real gracias a Firebase.",
    conclusion: "Este proyecto, aunque simple, nos facilitó mucho la gestión diaria del stock y demuestra cómo una solución web pensada desde la necesidad puede marcar una diferencia concreta en la organización."
  }
}
</script>

<template>
  <v-container class="pb-8" style="padding-top: 55px !important;">
    <!-- Título -->
    <v-row class="mb-6 mt-16">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 mb-4" style="color: #04323a; font-weight: 500; letter-spacing: -0.5px">Proyecto Serotonine</h1>
        <div class="title-divider mb-6"></div>
        <h2 class="text-h5 mb-4" style="color: #04323a">{{ proyecto.titulo }}</h2>
      </v-col>
    </v-row>

    <!-- Carrusel -->
    <v-row class="mb-6">
      <v-col cols="12" md="8" class="mx-auto">
        <v-card elevation="0" style="border: 1px solid #e0e0e0">
          <v-carousel
            v-model="carousel"
            :show-arrows="slides.length > 1"
            hide-delimiter-background
            delimiter-icon="mdi-circle"
            class="carousel"
            height="400"
            :cycle="true"
            :interval="5000"
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
              :src="slide.src"
              :alt="slide.alt"
              class="carousel-item"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="#04323a"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>

    <!-- Descripción -->
    <v-row class="mb-6">
      <v-col cols="12" md="8" class="mx-auto">
        <p class="text-subtitle-1" style="color: #666">{{ proyecto.descripcion }}</p>
      </v-col>
    </v-row>

    <!-- Cards en dos columnas -->
    <v-row>
      <!-- Primera columna -->
      <v-col cols="12" md="6">
        <v-card elevation="0" class="mb-6" style="border: 1px solid #e0e0e0">
          <v-card-text>
            <h3 class="text-h6 mb-4" style="color: #04323a">Sobre el Proyecto</h3>
            <p class="text-body-2 mb-4" style="color: #333">{{ proyecto.detalles.contexto }}</p>
            <p class="text-body-2" style="color: #333">{{ proyecto.detalles.conclusion }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Segunda columna -->
      <v-col cols="12" md="6">
        <v-card elevation="0" class="mb-6" style="border: 1px solid #e0e0e0">
          <v-card-text>
            <h3 class="text-h6 mb-4" style="color: #04323a">Características Principales</h3>
            <v-list class="pa-0">
              <v-list-item
                v-for="(caracteristica, index) in proyecto.caracteristicas"
                :key="index"
                class="px-0"
              >
                <template v-slot:prepend>
                  <v-icon color="#04323a" size="small">mdi-check</v-icon>
                </template>
                <v-list-item-title style="color: #333">{{ caracteristica }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tecnologías al final -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="0" style="border: 1px solid #e0e0e0">
          <v-card-text>
            <h3 class="text-h6 mb-4 text-center" style="color: #04323a">Tecnologías</h3>
            <v-chip-group class="d-flex justify-center">
              <v-chip
                v-for="tech in proyecto.tecnologias"
                :key="tech"
                variant="outlined"
                class="mr-2 mb-2"
                style="border-color: #04323a; color: #04323a"
              >
                {{ tech }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  background-color: white;
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-2px);
}

.v-list-item {
  min-height: 40px;
}

.text-body-2 {
  line-height: 1.6;
}

.title-divider {
  width: 60px;
  height: 3px;
  background-color: #04323a;
  margin: 0 auto;
}

.carousel {
  border-radius: 4px;
  overflow: hidden;
}

.carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #fafafa;
}

@media (max-width: 960px) {
  .carousel-item img {
    max-height: 300px;
  }
}
</style> 