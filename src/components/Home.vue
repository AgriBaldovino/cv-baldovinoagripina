<script setup>
import AboutMe from './AboutMe.vue'
import CareerVue from './CareerVue.vue'
import ExperienceVue from './ExperienceVue.vue'
import SkillsVue from './SkillsVue.vue'
import JobSearch from './JobSearch.vue'
import Projects from './Projects.vue'

const informacionPersonal = {
  nombre: "Agripina",
  apellido: "Baldovino",
  titulo: "Analista de Sistemas",
  descripcion: "¡Hola! Soy Agripina Baldovino, tengo 21 años. Estoy terminando la tesis de la carrera de Analista de Sistemas y me apasiona el desarrollo web. Me destaco especialmente trabajando con Vue y me encanta seguir aprendiendo todo lo que pueda sobre tecnología. Estoy buscando oportunidades para crecer profesionalmente, ya sea en formato remoto o híbrido. Si tenés un proyecto, una idea o simplemente querés conectar, ¡bienvenido/a!",
  email: "agribaldovino1235@gmail.com",
  linkedin: "linkedin.com/in/agripina-baldovino-606872254",
  ubicacion: "Córdoba, Argentina"
}

const experiencia = [
  {
    titulo: "Vendedora",
    empresa: "Bimba (tienda de ropa)",
    periodo: "Diciembre 2024 – Marzo 2025",
    descripcion: "Atención personalizada al cliente. Manejo de caja y cobros (efectivo, tarjeta). Organización del local y control de stock. Experiencia directa en ventas y trato con el público."
  },
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

const trabajoBuscado = {
  titulo: "Analista de Sistemas",
  descripcion: "Estoy en búsqueda de una oportunidad laboral en tecnología que me permita seguir aprendiendo, crecer profesionalmente y aportar mis conocimientos. Estoy abierta a diferentes roles como desarrollo frontend, backend, análisis funcional o trabajos relacionados con bases de datos y SQL.",
  ubicacion: "Busco un entorno con buena comunicación y acompañamiento, especialmente en esta etapa inicial de mi camino laboral. Estoy disponible para trabajar de forma remota, híbrida o presencial en Córdoba Capital. Actualmente vivo en el barrio Nueva Córdoba.",
  motivacion: "Mi mayor motivación es seguir aprendiendo, adaptarme a nuevos desafíos y ser parte de un equipo donde pueda desarrollarme y aportar valor. También estoy abierta a participar en proyectos freelance o colaborativos mientras finalizo mi tesis."
}
</script>

<template>
  <div>
    <!-- Sección Inicio -->
    <section id="inicio">
      <div class="home-container">
        <div class="overlay"></div>
        <div class="content">
          <h2 class="text-h2">{{ informacionPersonal.nombre }}</h2>
          <h2 class="text-h2">{{ informacionPersonal.apellido }}</h2>
          <h5 class="text-h5">{{ informacionPersonal.titulo }}</h5>
        </div>
      </div>
    </section>

    <!-- Sección Sobre Mí -->
    <AboutMe :informacionPersonal="informacionPersonal" />

    <!-- Sección Carrera -->
    <CareerVue />

    <!-- Sección Experiencia -->
    <ExperienceVue :experiencia="experiencia" />

    <!-- Sección Habilidades -->
    <SkillsVue :habilidades="habilidades" />

    <!-- Sección Proyectos -->
    <Projects :proyectos="proyectos" />

    <!-- Sección Trabajo -->
    <JobSearch :trabajoBuscado="trabajoBuscado" />
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

.text-h2 {
  font-size: 4rem;
  font-weight: 300;
  margin: 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(4, 50, 58, 0.2);
  color: #04323a !important;
}

.text-h5 {
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
  color: #04323a;
}
</style> 