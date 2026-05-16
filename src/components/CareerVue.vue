<script setup>
const formacion = [
  {
    icono: 'mdi-school',
    titulo: 'Analista de Sistemas',
    institucion: 'IES Siglo 21',
    periodo: '2022 - 2025',
    estado: 'Recibida',
    resumen:
      'Para mi tesis desarrollé un sistema de gestión para un local de indumentaria, con gestión de productos, stock y categorías, y 3 roles de usuario distintos. Lo construí con MongoDB, Vue 3, Vuetify y Express.js, con base de datos SQL. Realicé el testing funcional completo de principio a fin.'
  },
  {
    icono: 'mdi-certificate',
    titulo: 'Diplomatura en Testing Manual',
    institucion: 'UTN',
    periodo: 'Junio 2025 - Diciembre 2025',
    estado: 'Finalizada',
    resumen:
      'Estudié distintos tipos de pruebas: smoke testing, testing funcional, regresión, integración, exploratorio y de aceptación, entre otras. También gestión de bugs, historias de usuario y elaboración de planes de prueba completos.'
  },
  {
    icono: 'mdi-brain',
    titulo: 'Inteligencia Artificial',
    institucion: 'IES Siglo 21',
    periodo: 'Marzo 2026 - Junio 2028',
    estado: 'En curso',
    resumen:
      'Mi formación actual. Estamos trabajando con machine learning en Orange, entrenamiento de modelos de IA y análisis matemático aplicado.'
  }
]
</script>

<template>
  <section id="carrera" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 mb-2" style="color: #04323a; font-weight: 500; letter-spacing: -0.5px">
            Mi Recorrido
          </h2>
          <div class="title-divider mb-6"></div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(item, index) in formacion"
          :key="index"
          cols="12"
          md="4"
          class="mb-4"
        >
          <v-card class="career-card" elevation="2">
            <v-card-text>
              <div class="d-flex align-center mb-4 justify-center">
                <v-icon color="#04323a" size="large" class="mr-3">
                  {{ item.icono }}
                </v-icon>
                <div class="text-center">
                  <h3 class="text-h6 mb-1" style="color: #04323a">{{ item.titulo }}</h3>
                  <p v-if="item.institucion" class="text-subtitle-2 mb-0" style="color: #666">{{ item.institucion }}</p>
                </div>
              </div>

              <v-divider class="mb-4"></v-divider>

              <div class="d-flex align-center mb-2">
                <v-icon color="#04323a" size="small" class="mr-2">mdi-calendar</v-icon>
                <span class="text-body-2" style="color: #333">{{ item.periodo }}</span>
              </div>

              <div class="d-flex align-center mb-4">
                <v-icon color="#04323a" size="small" class="mr-2">mdi-flag-checkered</v-icon>
                <span class="text-body-2" style="color: #333">{{ item.estado }}</span>
              </div>

              <p class="text-body-2 mb-0" style="color: #333; line-height: 1.6">
                {{ item.resumen }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.career-card {
  transition: transform 0.2s ease-in-out;
  border-radius: 8px;
  background: white;
  height: 100%;
}

.career-card:hover {
  transform: translateY(-4px);
}

.title-divider {
  width: 60px;
  height: 3px;
  background-color: #04323a;
  margin: 0 auto;
}

.v-card-text {
  padding: 16px !important;
}

@media (max-width: 960px) {
  .career-card {
    margin-bottom: 8px;
  }
}
</style>
