<script setup>
const nombre = "Agripina"
const apellido = "Baldovino"
const profesion = "Analista de Sistemas"
</script>

<template>
  <div class="home-container">
    <div class="overlay"></div>
    <div class="content">
      <h2 class="text-h2">{{ nombre }}</h2>
      <h2 class="text-h2">{{ apellido }}</h2>
      <h5 class="text-h5">{{ profesion }}</h5>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  height: 100vh;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(209, 220, 222, 0.8);
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #04323a;
}

.text-h1 {
  font-size: 4rem;
  font-weight: 300;
  margin: 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(4, 50, 58, 0.2);
}
</style> 