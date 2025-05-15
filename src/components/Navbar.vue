<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)

const menuItems = [
  { title: 'Inicio', path: '/#inicio' },
  { title: 'Sobre Mí', path: '/#sobre-mi' },
  { title: 'Carrera', path: '/#carrera' },
  { title: 'Experiencia', path: '/#experiencia' },
  { title: 'Habilidades', path: '/#habilidades' },
  { title: 'Proyectos', path: '/#proyectos' },
  { title: 'Trabajo', path: '/#trabajo' }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const navigateTo = (path) => {
  if (path.startsWith('/#')) {
    if (router.currentRoute.value.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const sectionId = path.substring(2);
          scrollToSection(sectionId);
        }, 100);
      });
    } else {
      const sectionId = path.substring(2);
      scrollToSection(sectionId);
    }
  } else {
    router.push(path);
  }
  drawer.value = false;
}
</script>

<template>
  <v-app-bar class="navbar">
    <v-container fluid>
      <v-row align="center" no-gutters>
        <v-col cols="12" md="6" class="text-left">
          <v-btn
            variant="text"
            class="text-none font-weight-bold navbar-text"
            @click="navigateTo('/#inicio')"
          >
            Agripina Baldovino
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="text-right">
          <div class="d-flex justify-end">
            <v-btn
              v-for="item in menuItems"
              :key="item.path"
              variant="text"
              class="text-none mx-2 navbar-text"
              @click="navigateTo(item.path)"
            >
              {{ item.title }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.navbar {
  background-color: transparent;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.navbar-text {
  color: #04323a !important;
  transition: opacity 0.3s ease;
}

.navbar-text:hover {
  opacity: 0.7;
}

@media (max-width: 960px) {
  .text-right {
    text-align: center !important;
  }
  
  .d-flex {
    justify-content: center !important;
  }
}
</style> 