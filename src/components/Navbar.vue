<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <v-app-bar color="primary" elevation="0">
    <v-app-bar-title class="text-accent">Mi CV Virtual</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn @click="scrollToSection('inicio')" color="accent" variant="text">Inicio</v-btn>
    <v-btn @click="scrollToSection('sobre-mi')" color="accent" variant="text">Sobre Mí</v-btn>
    <v-btn @click="scrollToSection('carrera')" color="accent" variant="text">Carrera</v-btn>
    <v-btn @click="scrollToSection('experiencia')" color="accent" variant="text">Experiencia</v-btn>
    <v-btn @click="scrollToSection('habilidades')" color="accent" variant="text">Habilidades</v-btn>
    <v-btn @click="scrollToSection('trabajo')" color="accent" variant="text">Trabajo</v-btn>
    <v-btn @click="scrollToSection('contacto')" color="accent" variant="text">Contacto</v-btn>
  </v-app-bar>
</template> 