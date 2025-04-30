<script setup>
defineProps({
  trabajoBuscado: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="trabajo" class="py-8">
    <v-container>
      <h2 class="text-h3 mb-4 text-accent text-center">Trabajo que Busco</h2>
      <v-row dense justify="center">
        <v-col cols="12" md="8">
          <v-card
            variant="tonal"
            color="indigo-darken-3"
            class="mx-auto"
            max-width="800"
            :title="trabajoBuscado.titulo"
          >
            <v-card-text class="text-accent">
              <p class="mb-4">{{ trabajoBuscado.descripcion }}</p>
              <p class="mb-4">{{ trabajoBuscado.ubicacion }}</p>
              <p>{{ trabajoBuscado.motivacion }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>