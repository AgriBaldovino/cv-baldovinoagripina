<script setup>
import fotoPerfil from '../assets/foto-perfil.jpg'

defineProps({
  informacionPersonal: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="sobre-mi" class="py-8">
    <v-container>
      <v-row dense align="center" justify="center">
        <v-col cols="12" md="4" class="d-flex justify-center">
          <v-img
            :src="fotoPerfil"
            alt="Foto de perfil de Agripina Baldovino"
            max-width="220"
            max-height="220"
            class="elevation-3"
            cover
          />
        </v-col>
        <v-col cols="12" md="8" class="d-flex align-center">
          <v-card
            class="mx-auto"
            max-width="800"
            :title="informacionPersonal.nombre + ' ' + informacionPersonal.apellido"
            :subtitle="informacionPersonal.titulo"
          >
            <v-card-text class="text-custom">
              {{ informacionPersonal.descripcion }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.text-custom {
  color: #04323a;
}

.v-card {
  background-color: white !important;
}
</style>