<script setup>
defineProps({
  informacionPersonal: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="contacto" class="py-8">
    <v-container>
      <h2 class="text-h3 mb-4 text-accent text-center">Contacto</h2>
      <v-row dense justify="center">
        <v-col cols="12" md="6">
          <v-card
            variant="tonal"
            color="indigo-darken-3"
            class="mx-auto"
            max-width="500"
            title="Información de Contacto"
          >
            <v-card-text class="text-accent">
              <v-list>
                <v-list-item>
                  <v-list-item-title>Email</v-list-item-title>
                  <v-list-item-subtitle>{{ informacionPersonal.email }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>LinkedIn</v-list-item-title>
                  <v-list-item-subtitle>
                    <a :href="'https://' + informacionPersonal.linkedin" target="_blank" class="text-accent text-decoration-none">
                      {{ informacionPersonal.linkedin }}
                    </a>
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Ubicación</v-list-item-title>
                  <v-list-item-subtitle>{{ informacionPersonal.ubicacion }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>