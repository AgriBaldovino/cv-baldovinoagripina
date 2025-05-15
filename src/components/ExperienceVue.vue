<script setup>
defineProps({
  experiencia: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="experiencia" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 mb-2" style="color: #04323a; font-weight: 500; letter-spacing: -0.5px">Experiencia Laboral</h2>
          <div class="title-divider mb-6"></div>
        </v-col>
      </v-row>

      <v-timeline density="compact" align="start">
        <v-timeline-item
          v-for="(exp, index) in experiencia"
          :key="index"
          dot-color="#04323a"
          size="small"
        >
          <template v-slot:opposite>
            <div class="text-caption font-weight-medium" style="color: #666">
              {{ exp.periodo }}
            </div>
          </template>

          <v-card class="experience-card" elevation="2">
            <v-card-text>
              <div class="d-flex align-center mb-2">
                <v-icon
                  color="#04323a"
                  class="mr-2"
                  size="small"
                >
                  mdi-briefcase
                </v-icon>
                <h3 class="text-h6 mb-0" style="color: #04323a">
                  {{ exp.titulo }}
                </h3>
              </div>
              
              <div class="d-flex align-center mb-3">
                <v-icon
                  color="#04323a"
                  class="mr-2"
                  size="small"
                >
                  mdi-office-building
                </v-icon>
                <span class="text-subtitle-2" style="color: #666">{{ exp.empresa }}</span>
              </div>

              <p class="text-body-2 mb-0" style="color: #333; line-height: 1.6">
                {{ exp.descripcion }}
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<style scoped>
.experience-card {
  transition: transform 0.2s;
}

.experience-card:hover {
  transform: translateY(-4px);
}

.title-divider {
  width: 60px;
  height: 3px;
  background-color: #04323a;
  margin: 0 auto;
}

.v-timeline-item__body {
  margin-bottom: 24px;
}

.v-timeline-item__dot {
  box-shadow: 0 0 0 4px #f5f5f5;
}

.v-timeline-item__inner-dot {
  background-color: #f5f5f5;
}

@media (max-width: 600px) {
  .v-timeline-item__opposite {
    display: none;
  }
}
</style>