<script setup>
import { ref } from 'vue'

const carousel = ref(0)
const slides = [
  // Aquí podrás agregar las imágenes del proyecto
  // Por ahora dejamos un placeholder
  {
    src: 'https://via.placeholder.com/800x400?text=Serotonine+Screenshot+1',
    alt: 'Vista general del sistema'
  }
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn
          color="primary"
          variant="text"
          class="mb-4"
          @click="$router.push('/')"
        >
          <v-icon start>mdi-arrow-left</v-icon>
          Volver al inicio
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <v-card class="mb-6">
          <v-card-title class="text-h4 text-center text-primary py-4">
            🧾 Control de Stock para Serotonine
          </v-card-title>

          <!-- Carrusel de imágenes -->
          <v-carousel
            v-model="carousel"
            :show-arrows="slides.length > 1"
            hide-delimiter-background
            delimiter-icon="mdi-circle"
            height="400"
            class="mb-4"
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
              :src="slide.src"
              :alt="slide.alt"
              cover
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-carousel-item>
          </v-carousel>

          <v-card-text>
            <v-row>
              <v-col cols="12">
                <h3 class="text-h5 mb-4 text-primary">Sobre el Proyecto</h3>
                <p class="text-body-1 mb-4">
                  Desarrollé esta aplicación web para resolver una necesidad concreta de gestión de stock en tiempo real entre dos ubicaciones: Canals (donde se encuentra la dueña de Serotonine) y Nueva Córdoba (donde se preparan los pedidos para retiro rápido).
                </p>
                <p class="text-body-1 mb-4">
                  Inicialmente administrábamos el stock a través de un Google Sheet, pero a medida que los productos crecieron en cantidad, se volvió tedioso y poco práctico. Por eso decidí crear un sistema propio, accesible desde celular o PC, con login seguro y sincronización en tiempo real gracias a Firebase.
                </p>
              </v-col>

              <v-col cols="12">
                <h3 class="text-h5 mb-4 text-primary">Funcionalidades Principales</h3>
                <v-list>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-magnify</v-icon>
                    </template>
                    <v-list-item-title>Búsqueda rápida de productos por nombre</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-alert</v-icon>
                    </template>
                    <v-list-item-title>Detección de productos con stock 0</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-pencil</v-icon>
                    </template>
                    <v-list-item-title>Edición de stock en tiempo real desde cualquier ubicación</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-lock</v-icon>
                    </template>
                    <v-list-item-title>Acceso seguro con contraseña para uso interno</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>

              <v-col cols="12">
                <h3 class="text-h5 mb-4 text-primary">Tecnologías Utilizadas</h3>
                <v-chip-group>
                  <v-chip color="primary" variant="outlined">Vue 3</v-chip>
                  <v-chip color="primary" variant="outlined">Vuetify</v-chip>
                  <v-chip color="primary" variant="outlined">JavaScript</v-chip>
                  <v-chip color="primary" variant="outlined">Firebase</v-chip>
                  <v-chip color="primary" variant="outlined">Vite</v-chip>
                </v-chip-group>
              </v-col>

              <v-col cols="12">
                <p class="text-body-1 mt-4">
                  Este proyecto, aunque simple, nos facilitó mucho la gestión diaria del stock y demuestra cómo una solución web pensada desde la necesidad puede marcar una diferencia concreta en la organización.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  border-radius: 12px;
  overflow: hidden;
}

.v-carousel {
  border-radius: 8px;
  overflow: hidden;
}

.v-list-item {
  min-height: 48px;
}

.v-chip-group {
  gap: 8px;
}
</style> 