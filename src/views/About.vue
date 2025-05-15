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
          <v-card-title class="text-h4">Mis Proyectos</v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="(proyecto, index) in proyectos" :key="index" cols="12" md="6">
                <v-card>
                  <v-img :src="proyecto.imagen" height="200" cover></v-img>
                  <v-card-title>{{ proyecto.titulo }}</v-card-title>
                  <v-card-subtitle>{{ proyecto.tecnologias }}</v-card-subtitle>
                  <v-card-text>{{ proyecto.descripcion }}</v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" :href="proyecto.demo" target="_blank">Ver Demo</v-btn>
                    <v-btn color="secondary" variant="outlined" :href="proyecto.repo" target="_blank">Ver Código</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="fade-in">
          <v-card-title class="text-h4">Mis Habilidades</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-4">Frontend</h3>
                <v-chip-group>
                  <v-chip v-for="(skill, index) in habilidadesFrontend" :key="index" color="primary" class="ma-2">
                    <v-icon start>{{ skill.icono }}</v-icon>
                    {{ skill.nombre }}
                  </v-chip>
                </v-chip-group>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-4">Backend</h3>
                <v-chip-group>
                  <v-chip v-for="(skill, index) in habilidadesBackend" :key="index" color="primary" class="ma-2">
                    <v-icon start>{{ skill.icono }}</v-icon>
                    {{ skill.nombre }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="fade-in">
          <v-card-title class="text-h4">Contacto</v-card-title>
          <v-card-text>
            <v-form @submit.prevent>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.nombre"
                    label="Nombre"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    type="email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.asunto"
                    label="Asunto"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.mensaje"
                    label="Mensaje"
                    rows="6"
                    required
                  ></v-textarea>
                </v-col>
                <v-col cols="12" class="d-flex gap-2">
                  <v-btn color="primary" type="submit">Enviar Mensaje</v-btn>
                  <v-btn color="secondary" variant="outlined" @click="limpiarFormulario">Limpiar</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const proyectos = [
  {
    titulo: 'Portfolio Personal',
    tecnologias: 'Vue.js, Vuetify, CSS',
    descripcion: 'Portfolio personal desarrollado con Vue.js y Vuetify, implementando un diseño moderno y responsive.',
    imagen: '../assets/images/pic02.jpg',
    demo: '#',
    repo: '#'
  },
  {
    titulo: 'E-commerce',
    tecnologias: 'Node.js, Express, MongoDB',
    descripcion: 'Plataforma de comercio electrónico con sistema de autenticación y gestión de productos.',
    imagen: '../assets/images/pic03.jpg',
    demo: '#',
    repo: '#'
  }
]

const habilidadesFrontend = [
  { nombre: 'Vue.js', icono: 'mdi-vuejs' },
  { nombre: 'HTML5', icono: 'mdi-language-html5' },
  { nombre: 'CSS3', icono: 'mdi-language-css3' },
  { nombre: 'JavaScript', icono: 'mdi-language-javascript' }
]

const habilidadesBackend = [
  { nombre: 'Node.js', icono: 'mdi-nodejs' },
  { nombre: 'Express', icono: 'mdi-server' },
  { nombre: 'MongoDB', icono: 'mdi-database' },
  { nombre: 'SQL', icono: 'mdi-database' }
]

const form = ref({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: ''
})

const limpiarFormulario = () => {
  form.value = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  }
}
</script>

<style scoped>
.v-card {
  margin-bottom: 2rem;
}

.v-chip {
  margin: 0.5rem;
}

.v-chip .v-icon {
  margin-right: 0.5rem;
}

.gap-2 {
  gap: 1rem;
}
</style> 