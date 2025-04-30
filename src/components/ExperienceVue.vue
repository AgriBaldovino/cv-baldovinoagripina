<script setup>
defineProps({
  experiencia: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="experiencia" class="py-8">
    <v-container>
      <h2 class="text-h3 mb-4 text-accent">Experiencia</h2>
      <v-row dense>
        <v-col
          v-for="(exp, i) in experiencia"
          :key="i"
          cols="12"
          :md="(i === experiencia.length - 1 && experiencia.length % 2 !== 0) ? 12 : 6"
        >
          <v-card
            variant="tonal"
            color="indigo-darken-3"
            class="mx-auto mb-4"
            :style="(i === experiencia.length - 1 && experiencia.length % 2 !== 0) ? 'max-width: 100%' : 'max-width: 500px'"
            :title="exp.titulo"
            :subtitle="exp.empresa"
          >
            <v-card-text class="text-accent">
              <div class="text-caption mb-2">{{ exp.periodo }}</div>
              <div class="mt-2">{{ exp.descripcion }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>