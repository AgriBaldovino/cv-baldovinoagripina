<script setup>
defineProps({
  habilidades: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="habilidades" class="py-8">
    <v-container>
      <h2 class="text-h3 mb-4 text-accent">Habilidades Técnicas</h2>
      <v-row dense>
        <v-col
          v-for="(categoria, i) in habilidades"
          :key="i"
          cols="12"
          :md="(i === habilidades.length - 1 && habilidades.length % 2 !== 0) ? 12 : 6"
        >
          <v-card
            variant="tonal"
            color="indigo-darken-3"
            class="mx-auto mb-4"
            :style="(i === habilidades.length - 1 && habilidades.length % 2 !== 0) ? 'max-width: 100%' : 'max-width: 600px'"
            :title="categoria.categoria"
          >
            <v-card-text class="text-accent">
              <v-list>
                <v-list-item
                  v-for="(item, j) in categoria.items"
                  :key="j"
                  :title="item"
                >
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>