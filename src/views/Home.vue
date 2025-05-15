<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="fade-in">
          <v-card-title class="text-h4">Sobre Mí</v-card-title>
          <v-card-text>
            <p>Soy una desarrolladora Full Stack con experiencia en el desarrollo de aplicaciones web modernas. Me especializo en Vue.js, Node.js y bases de datos SQL y NoSQL. Me apasiona crear soluciones que sean tanto funcionales como atractivas visualmente.</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="fade-in">
          <v-card-title class="text-h4">Experiencia Laboral</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(exp, index) in experiencias" :key="index">
                <v-list-item-title>{{ exp.empresa }}</v-list-item-title>
                <v-list-item-subtitle>{{ exp.cargo }} | {{ exp.periodo }}</v-list-item-subtitle>
                <v-list-item-text>{{ exp.descripcion }}</v-list-item-text>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="fade-in">
          <v-card-title class="text-h4">Educación</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(edu, index) in educacion" :key="index">
                <v-list-item-title>{{ edu.institucion }}</v-list-item-title>
                <v-list-item-subtitle>{{ edu.titulo }} | {{ edu.periodo }}</v-list-item-subtitle>
                <v-list-item-text>{{ edu.descripcion }}</v-list-item-text>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="fade-in">
          <v-card-title class="text-h4">Habilidades</v-card-title>
          <v-card-text>
            <v-chip-group>
              <v-chip v-for="(skill, index) in habilidades" :key="index" color="primary" class="ma-2">
                <v-icon start>{{ skill.icono }}</v-icon>
                {{ skill.nombre }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const experiencias = [
  {
    empresa: 'Bimba',
    cargo: 'Vendedora',
    periodo: '2023 - Presente',
    descripcion: 'Responsable de la venta de productos y atención al cliente.'
  }
]

const educacion = [
  {
    institucion: 'Universidad Nacional de La Plata',
    titulo: 'Licenciatura en Informática',
    periodo: '2018 - 2023',
    descripcion: 'Formación en desarrollo de software, bases de datos y sistemas informáticos.'
  }
]

const habilidades = [
  { nombre: 'Vue.js', icono: 'mdi-vuejs' },
  { nombre: 'Node.js', icono: 'mdi-nodejs' },
  { nombre: 'SQL', icono: 'mdi-database' },
  { nombre: 'Git', icono: 'mdi-git' },
  { nombre: 'HTML/CSS', icono: 'mdi-language-html5' },
  { nombre: 'JavaScript', icono: 'mdi-language-javascript' }
]
</script>

<style scoped>
.v-card {
  margin-bottom: 2rem;
}

.v-list-item {
  padding: 1rem 0;
}

.v-list-item-title {
  font-weight: 600;
  color: var(--v-primary-base);
}

.v-list-item-subtitle {
  color: var(--v-secondary-base);
}

.v-chip {
  margin: 0.5rem;
}

.v-chip .v-icon {
  margin-right: 0.5rem;
}
</style> 