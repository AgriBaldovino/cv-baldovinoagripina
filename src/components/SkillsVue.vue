<script setup>
defineProps({
  habilidades: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="habilidades" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 mb-2" style="color: #04323a; font-weight: 500; letter-spacing: -0.5px">Habilidades Técnicas</h2>
          <div class="title-divider mb-6"></div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(categoria, i) in habilidades"
          :key="i"
          cols="12"
          :md="(i === habilidades.length - 1 && habilidades.length % 2 !== 0) ? 12 : 6"
          class="mb-4"
        >
          <v-card
            elevation="0"
            class="skills-card"
            style="border: 1px solid #e0e0e0"
          >
            <v-card-title class="d-flex align-center">
              <v-icon
                :color="i === 0 ? '#e91e63' : i === 1 ? '#ff9800' : i === 2 ? '#4caf50' : i === 3 ? '#2196f3' : '#9c27b0'"
                class="mr-2"
              >
                {{ i === 0 ? 'mdi-code-braces' : 
                 i === 1 ? 'mdi-tools' : 
                 i === 2 ? 'mdi-database' : 
                 i === 3 ? 'mdi-account-group' : 
                 'mdi-desktop-mac-dashboard' }}
              </v-icon>
              <span style="color: #04323a">{{ categoria.categoria }}</span>
            </v-card-title>

            <v-card-text>
              <v-list class="pa-0">
                <v-list-item
                  v-for="(item, j) in categoria.items"
                  :key="j"
                  class="px-0"
                >
                  <template v-slot:prepend>
                    <v-icon
                      color="#04323a"
                      size="small"
                      class="mr-2"
                    >
                      mdi-check-circle
                    </v-icon>
                  </template>
                  <v-list-item-title style="color: #333; font-size: 0.95rem">
                    {{ item }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.skills-card {
  transition: all 0.3s ease;
  border-radius: 8px;
  background: white;
  height: 100%;
}

.skills-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.title-divider {
  width: 60px;
  height: 3px;
  background-color: #04323a;
  margin: 0 auto;
}

.v-list-item {
  min-height: 40px;
  padding: 4px 0;
}

.v-list-item:hover {
  background-color: #f5f5f5;
  border-radius: 4px;
}

.v-card-title {
  font-size: 1.25rem;
  font-weight: 500;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.v-card-text {
  padding: 16px !important;
}

@media (max-width: 960px) {
  .skills-card {
    margin-bottom: 16px;
  }
}
</style>