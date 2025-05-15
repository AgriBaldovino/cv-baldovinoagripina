<script setup>
const carrera = {
  titulo: "Analista de Sistemas",
  institucion: "IES Siglo 21",
  periodo: "2022 - 2024",
  estado: "En curso - Tesis final",
  experiencias: [
    {
      icono: "mdi-code-braces",
      titulo: "Desarrollo y Programación",
      texto: "Durante la carrera confirmé que me encanta este mundo: me fue bien en programación, disfruté materias lógicas como Programación Lógica, Matemática Discreta y Estructura de Datos."
    },
    {
      icono: "mdi-database",
      titulo: "Análisis y Bases de Datos",
      texto: "Me entusiasmó todo lo relacionado con bases de datos y análisis de sistemas, que terminó siendo mi materia favorita."
    },
    {
      icono: "mdi-chart-box",
      titulo: "Gestión y Administración",
      texto: "Me sorprendí disfrutando materias más teóricas como Principios de Administración, donde trabajamos con herramientas como FODA, y me di cuenta de que me interesa entender no solo lo técnico, sino también lo organizacional."
    }
  ],
  materias: [
    {
      nombre: "Análisis de Sistemas",
      descripcion: "Diseño y modelado de sistemas, UML, patrones de diseño y metodologías de desarrollo"
    },
    {
      nombre: "Bases de Datos",
      descripcion: "Diseño e implementación de bases de datos relacionales y NoSQL, optimización y consultas"
    },
    {
      nombre: "Desarrollo Web",
      descripcion: "Desarrollo frontend y backend, frameworks modernos, APIs REST y buenas prácticas"
    }
  ]
}
</script>

<template>
  <section id="carrera" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 mb-2" style="color: #04323a; font-weight: 500; letter-spacing: -0.5px">Mi Recorrido</h2>
          <div class="title-divider mb-6"></div>
        </v-col>
      </v-row>

      <v-row>
        <!-- Información Principal -->
        <v-col cols="12" md="6" class="mb-6">
          <v-card class="career-card" elevation="2">
            <v-card-text>
              <div class="d-flex align-center mb-4 justify-center">
                <v-icon color="#04323a" size="large" class="mr-3">
                  mdi-school
                </v-icon>
                <div class="text-center">
                  <h3 class="text-h5 mb-1" style="color: #04323a">{{ carrera.titulo }}</h3>
                  <p class="text-subtitle-1 mb-0" style="color: #666">{{ carrera.institucion }}</p>
                </div>
              </div>

              <v-divider class="mb-4"></v-divider>

              <div class="d-flex align-center mb-3">
                <v-icon color="#04323a" size="small" class="mr-2">
                  mdi-calendar
                </v-icon>
                <span class="text-body-1" style="color: #333">{{ carrera.periodo }}</span>
              </div>

              <div class="d-flex align-center mb-4">
                <v-icon color="#04323a" size="small" class="mr-2">
                  mdi-flag-checkered
                </v-icon>
                <span class="text-body-1" style="color: #333">{{ carrera.estado }}</span>
              </div>

              <v-expansion-panels variant="accordion" class="mb-4">
                <v-expansion-panel
                  v-for="(exp, index) in carrera.experiencias"
                  :key="index"
                  class="mb-3"
                >
                  <v-expansion-panel-title class="text-subtitle-1" style="color: #04323a">
                    <div class="d-flex align-center">
                      <v-icon :color="index === 0 ? '#e91e63' : index === 1 ? '#ff9800' : '#4caf50'" class="mr-2">
                        {{ exp.icono }}
                      </v-icon>
                      {{ exp.titulo }}
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text class="text-body-2" style="color: #333; line-height: 1.6">
                    {{ exp.texto }}
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Materias Destacadas -->
        <v-col cols="12" md="6">
          <v-card class="career-card" elevation="2">
            <v-card-text class="pa-4">
              <h3 class="text-h6 mb-3 text-center" style="color: #04323a">Materias Destacadas</h3>
              
              <v-timeline density="compact" align="start">
                <v-timeline-item
                  v-for="(materia, index) in carrera.materias"
                  :key="index"
                  dot-color="#04323a"
                  size="small"
                >
                  <template v-slot:opposite>
                    <div class="text-caption font-weight-medium" style="color: #666">
                      {{ index + 1 }}° Año
                    </div>
                  </template>

                  <v-hover v-slot="{ isHovering, props }">
          <v-card
                      v-bind="props"
                      :elevation="isHovering ? 4 : 1"
            class="mx-auto"
                      max-width="100%"
                      :class="{ 'on-hover': isHovering }"
                    >
                      <v-card-text>
                        <div class="d-flex align-center">
                          <v-icon
                            color="#04323a"
                            size="small"
                            class="mr-3"
                          >
                            mdi-book-open-page-variant
                          </v-icon>
                          <h4 class="text-subtitle-1 mb-2" style="color: #04323a">
                            {{ materia.nombre }}
                          </h4>
                        </div>
                        <p class="text-body-2 mt-2 mb-0" style="color: #666; line-height: 1.4">
                          {{ materia.descripcion }}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-timeline-item>
              </v-timeline>
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

.v-list-item {
  min-height: 40px;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  padding: 4px 0;
  margin-bottom: 4px !important;
}

.v-list-item:hover {
  background-color: #f5f5f5;
}

.v-list-item-subtitle {
  margin-top: 2px;
  display: block;
}

.v-card-text {
  padding: 12px !important;
}

.v-list {
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
}

.v-card {
  padding-bottom: 0 !important;
}

.v-expansion-panel {
  border-radius: 8px !important;
  margin-bottom: 12px !important;
}

.v-expansion-panel-title {
  font-weight: 500;
  min-height: 48px !important;
}

.v-expansion-panel-text {
  padding: 16px 0;
  line-height: 1.6;
}

.v-expansion-panels {
  margin-bottom: 8px !important;
}

.v-timeline-item__body {
  margin-bottom: 4px;
}

.v-timeline-item__dot {
  box-shadow: 0 0 0 4px #f5f5f5;
}

.v-timeline-item__inner-dot {
  background-color: #f5f5f5;
}

.v-card {
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  background: white;
  margin-bottom: 4px;
}

.v-card.on-hover {
  transform: translateY(-4px);
  border-left: 4px solid #04323a;
}

.v-timeline {
  padding-top: 0;
  padding-bottom: 0;
}

.v-timeline-item {
  padding-bottom: 0;
}

@media (max-width: 960px) {
  .career-card {
    margin-bottom: 24px;
  }
}

@media (max-width: 600px) {
  .v-timeline-item__opposite {
    display: none;
  }
}
</style>