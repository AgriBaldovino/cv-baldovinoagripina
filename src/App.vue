<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import './assets/styles/global.css'
</script>

<template>
  <v-app>
    <Navbar />
    <v-main class="main-content">
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
}

.main-content {
  padding: 0 !important;
  margin-top: 0 !important;
}

.v-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.v-card {
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
}

.v-btn {
  text-transform: none;
  font-weight: 600;
}

.v-btn--outlined {
  border-width: 2px;
}

.v-icon {
  margin-right: 0.5rem;
}

.v-text-field {
  margin-bottom: 1rem;
}

.v-footer {
  padding: 2rem 0;
  text-align: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}

.text-black {
  color: #000000 !important;
}
</style>