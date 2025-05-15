<script setup>
defineProps({
  trabajoBuscado: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="trabajo" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 mb-2" style="color: #04323a; font-weight: 500; letter-spacing: -0.5px">Trabajo que Busco</h2>
          <div class="title-divider mb-6"></div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card
            class="job-card"
            elevation="0"
            style="border: 1px solid #e0e0e0"
          >
            <v-card-title class="d-flex align-center">
              <v-icon
                color="#04323a"
                size="large"
                class="mr-3"
              >
                mdi-briefcase-search
              </v-icon>
              <span style="color: #04323a">{{ trabajoBuscado.titulo }}</span>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-card
                    class="info-card mb-4"
                    elevation="0"
                    style="border: 1px solid #e0e0e0"
                  >
                    <v-card-title class="d-flex align-center">
                      <v-icon
                        color="#e91e63"
                        class="mr-2"
                      >
                        mdi-map-marker
                      </v-icon>
                      <span style="color: #04323a">Ubicación</span>
                    </v-card-title>
                    <v-card-text>
                      <p class="text-body-1">{{ trabajoBuscado.ubicacion }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card
                    class="info-card mb-4"
                    elevation="0"
                    style="border: 1px solid #e0e0e0"
                  >
                    <v-card-title class="d-flex align-center">
                      <v-icon
                        color="#4caf50"
                        class="mr-2"
                      >
                        mdi-lightbulb-on
                      </v-icon>
                      <span style="color: #04323a">Motivación</span>
                    </v-card-title>
                    <v-card-text>
                      <p class="text-body-1">{{ trabajoBuscado.motivacion }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-expand-transition>
                <v-card
                  class="mt-4"
                  elevation="0"
                  style="border: 1px solid #e0e0e0"
                >
                  <v-card-title class="d-flex align-center">
                    <v-icon
                      color="#2196f3"
                      class="mr-2"
                    >
                      mdi-information
                    </v-icon>
                    <span style="color: #04323a">Descripción</span>
                  </v-card-title>
                  <v-card-text>
                    <p class="text-body-1">{{ trabajoBuscado.descripcion }}</p>
                  </v-card-text>
                </v-card>
              </v-expand-transition>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.job-card {
  transition: all 0.3s ease;
  border-radius: 8px;
  background: white;
}

.job-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.info-card {
  transition: all 0.3s ease;
  border-radius: 8px;
  height: 100%;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.title-divider {
  width: 60px;
  height: 3px;
  background-color: #04323a;
  margin: 0 auto;
}

.v-card-title {
  font-size: 1.25rem;
  font-weight: 500;
  padding: 16px;
}

.v-card-text {
  padding: 16px !important;
}

.text-body-1 {
  color: #333;
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 960px) {
  .info-card {
    margin-bottom: 16px;
  }
}
</style>