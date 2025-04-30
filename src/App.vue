<script setup>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import AboutMe from './components/AboutMe.vue'
import CareerVue from './components/CareerVue.vue'
import ExperienceVue from './components/ExperienceVue.vue'
import SkillsVue from './components/SkillsVue.vue'
import JobSearch from './components/JobSearch.vue'

const informacionPersonal = {
  nombre: "Agripina",
  apellido: "Baldovino",
  titulo: "Analista de Sistemas",
  descripcion: "¡Hola! Soy Agripina Baldovino. Estoy terminando la tesis de la carrera de Analista de Sistemas y me apasiona el desarrollo web. Me destaco especialmente trabajando con Vue y me encanta seguir aprendiendo todo lo que pueda sobre tecnología. Estoy buscando oportunidades para crecer profesionalmente, ya sea en formato remoto o híbrido. Si tenés un proyecto, una idea o simplemente querés conectar, ¡bienvenido/a!",
  email: "agribaldovino1235@gmail.com",
  linkedin: "linkedin.com/in/agripina-baldovino-606872254",
  ubicacion: "Córdoba, Argentina"
}

const experiencia = [
  {
    titulo: "Fundadora",
    empresa: "Lirene (emprendimiento personal)",
    periodo: "2025 – Actualidad",
    descripcion: "Lancé mi propio emprendimiento de totebags llamado Lirene, en el que desarrollé todo desde cero: elegí materiales (tusor), diseñé modelos funcionales (bolsillos, tamaños grandes para uso diario), gestioné la producción con una modista y me encargué de la comunicación visual en redes. Aunque está en una etapa inicial, me entusiasma su proyección y sigo apostando a su crecimiento. Este proyecto me permitió fortalecer habilidades de organización, creatividad, diseño, autogestión y marketing digital."
  },
  {
    titulo: "Operaria de pedidos",
    empresa: "Serotonine",
    periodo: "2025",
    descripcion: "En esta marca online me encargaba de armar pedidos, gestionar etiquetas, y preparar los envíos con Correo Argentino y Andreani. También aprendí a utilizar Tienda Nube para el seguimiento de productos y operaciones."
  },
  {
    titulo: "Desarrolladora Frontend Jr",
    empresa: "Macena (PIL)",
    periodo: "Julio 2023 – Marzo 2024",
    descripcion: "Participé en el Programa de Inserción Laboral (PIL), trabajando en Macena como desarrolladora frontend. Aunque el puesto era de pocas horas semanales, fue una experiencia clave para mi formación: aprendí y trabajé con Vue 2, Vue 3 y conceptos fundamentales del desarrollo web moderno. Colaboré en tareas reales de frontend, enfrentando desafíos técnicos y aprendiendo buenas prácticas en entornos reales de desarrollo."
  },
  {
    titulo: "Atención al cliente",
    empresa: "Panadería La Celeste",
    periodo: "2022",
    descripcion: "Durante un breve período trabajé en atención al público. Fue un espacio donde desarrollé habilidades sociales importantes, como la comunicación efectiva, la empatía y la resolución rápida de situaciones con clientes."
  },
  {
    titulo: "Auxiliar de stock",
    empresa: "Farmacia Domínguez",
    periodo: "2021",
    descripcion: "Me desempeñé en el área de control de mercadería, realizando tareas de revisión, carga de productos y organización de stock."
  },
  {
    titulo: "Manicurista independiente",
    empresa: "Trabajo independiente",
    periodo: "Desde 2019 – Actualidad (de forma esporádica)",
    descripcion: "Trabajo de forma independiente brindando servicios de manicuría. Aunque no es un empleo fijo, me permitió desarrollar habilidades de organización, responsabilidad, trato con clientes y autogestión."
  }
]

const habilidades = [
  {
    categoria: "Lenguajes y Tecnologías",
    items: [
      "JavaScript (Vue 2, Vue 3)",
      "C# (aplicaciones de escritorio en Visual Studio)",
      "SQL (consultas, diseño de base de datos relacional)",
      "MongoDB (uso actual en tesis)",
      "HTML, CSS"
    ]
  },
  {
    categoria: "Frameworks y Herramientas",
    items: [
      "Vuetify 3",
      "Express.js",
      "Git y GitHub (nivel básico)",
      "Postman (uso frecuente para testeo de APIs)",
      "Figma (creación de interfaces de usuario)",
      "Canva (contenido visual para redes sociales)"
    ]
  },
  {
    categoria: "Bases de Datos",
    items: [
      "SQL Server, MySQL",
      "MongoDB (NoSQL)"
    ]
  },
  {
    categoria: "Metodologías y Organización",
    items: [
      "Scrum (experiencia en trabajo en equipo y manejo de tareas en entorno ágil)",
      "Uso de herramienta de gestión de tareas (Microsoft Planner o similar)"
    ]
  },
  {
    categoria: "Software y Otros Conocimientos",
    items: [
      "Paquete Microsoft Office (Word, Excel, PowerPoint)",
      "Conocimientos básicos de Linux",
      "Experiencia en redes sociales y gestión de contenido digital",
      "Inglés: Nivel intermedio en lectura y comprensión (2014-2019)"
    ]
  }
]

const testimonios = [
  {
    nombre: "Profesor A",
    cargo: "Profesor de Programación",
    texto: "Excelente estudiante con gran capacidad de aprendizaje."
  },
  {
    nombre: "Profesor B",
    cargo: "Profesor de Base de Datos",
    texto: "Destacado en el desarrollo de proyectos prácticos."
  }
]

const trabajoBuscado = {
  titulo: "Analista de Sistemas",
  descripcion: "Estoy en búsqueda de una oportunidad laboral en tecnología que me permita seguir aprendiendo, crecer profesionalmente y aportar mis conocimientos. Estoy abierta a diferentes roles como desarrollo frontend, backend, análisis funcional o trabajos relacionados con bases de datos y SQL.",
  ubicacion: "Busco un entorno con buena comunicación y acompañamiento, especialmente en esta etapa inicial de mi camino laboral. Estoy disponible para trabajar de forma remota, híbrida o presencial en Córdoba Capital. Actualmente vivo en el barrio Nueva Córdoba.",
  motivacion: "Mi mayor motivación es seguir aprendiendo, adaptarme a nuevos desafíos y ser parte de un equipo donde pueda desarrollarme y aportar valor. También estoy abierta a participar en proyectos freelance o colaborativos mientras finalizo mi tesis."
}
</script>

<template>
  <v-app>
    <Navbar />
    
    <v-main class="bg-secondary">
      <!-- Sección Inicio -->
      <section id="inicio">
        <Home />
      </section>

      <!-- Sección Sobre Mí -->
      <AboutMe :informacionPersonal="informacionPersonal" />

      <!-- Sección Carrera -->
      <CareerVue />

      <!-- Sección Experiencia -->
      <ExperienceVue :experiencia="experiencia" />

      <!-- Sección Habilidades -->
      <SkillsVue :habilidades="habilidades" />

      

      <!-- Sección Trabajo -->
      <JobSearch :trabajoBuscado="trabajoBuscado" />

      <!-- Sección Contacto -->
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
    </v-main>

    <v-footer app color="primary" class="text-center">
      <v-row justify="center" no-gutters>
        <v-col class="text-center text-accent" cols="12">
          {{ new Date().getFullYear() }} — <strong>Mi CV Virtual</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

html {
  scroll-behavior: smooth;
}

section {
  scroll-margin-top: 64px;
  scroll-behavior: smooth;
}

.bg-secondary {
  background-color: #FFFFFF !important;
}

.v-card {
  border: 1px solid #d1dcde;
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-5px);
}

.rounded-circle {
  border-radius: 50%;
  object-fit: cover;
}
</style>