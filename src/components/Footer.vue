<script setup>
const informacionPersonal = {
  email: "agribaldovino1235@gmail.com",
  linkedin: "linkedin.com/in/agripina-baldovino-606872254",
  ubicacion: "Córdoba, Argentina"
}
</script>

<template>
  <v-footer class="footer">
    <v-container fluid>
      <v-row align="center" no-gutters>
        <v-col cols="12" md="6" class="text-left">
          <p class="text-caption mb-0 font-italic footer-text">Este sitio está en constante evolución y mejora. Última actualización: {{ new Date().toLocaleDateString() }}</p>
        </v-col>
        <v-col cols="12" md="6" class="text-right">
          <v-list class="bg-transparent pa-0 d-flex justify-end">
            <v-list-item class="pa-0 mx-2">
              <v-list-item-title class="text-subtitle-2">Email:</v-list-item-title>
              <v-list-item-subtitle class="text-caption">
                <a :href="'mailto:' + informacionPersonal.email" class="text-decoration-none">
                  {{ informacionPersonal.email }}
                </a>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="pa-0 mx-2">
              <v-list-item-title class="text-subtitle-2">LinkedIn:</v-list-item-title>
              <v-list-item-subtitle class="text-caption">
                <a :href="'https://' + informacionPersonal.linkedin" target="_blank" class="text-decoration-none">
                  {{ informacionPersonal.linkedin }}
                </a>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="pa-0 mx-2">
              <v-list-item-title class="text-subtitle-2">Ubicación:</v-list-item-title>
              <v-list-item-subtitle class="text-caption">{{ informacionPersonal.ubicacion }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: transparent;
  padding: 0.5rem 0;
  margin-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.05);
}

.footer-text {
  padding: 0 2rem;
}

.v-list {
  padding: 0 2rem;
}

.v-list-item {
  min-height: 24px;
}

.v-list-item-title {
  font-weight: 600;
  color: #000000;
  margin-bottom: 0;
}

.v-list-item-subtitle {
  color: #666666;
}

.v-list-item-subtitle a {
  color: #666666;
  transition: color 0.3s ease;
}

.v-list-item-subtitle a:hover {
  color: #1E88E5;
}

.font-italic {
  font-style: italic;
  color: #666666;
}

@media (max-width: 960px) {
  .text-right {
    text-align: center !important;
  }
  
  .v-list {
    justify-content: center !important;
  }

  .v-list-item {
    padding: 0.25rem 0;
  }
}
</style> 