<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)

const scrollToSection = (sectionId) => {
  if (router.currentRoute.value.path !== '/') {
    router.push('/')
  }
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  drawer.value = false
}

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <v-app-bar
    app
    elevation="0"
    color="white"
    class="px-4"
    style="border-bottom: 1px solid #e0e0e0"
  >
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-md-none"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <v-btn
        variant="text"
        class="text-h5 font-weight-bold"
        style="color: #04323a; text-transform: none; letter-spacing: normal"
        @click="goHome"
      >
        Agri
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="d-none d-md-flex">
      <v-btn
        v-for="(item, index) in ['inicio', 'sobre-mi', 'proyectos', 'educacion']"
        :key="index"
        variant="text"
        class="mx-2"
        style="color: #04323a"
        @click="scrollToSection(item)"
      >
        {{ item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ') }}
      </v-btn>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in ['inicio', 'sobre-mi', 'proyectos', 'educacion']"
          :key="index"
          :value="item"
          @click="scrollToSection(item)"
        >
          <v-list-item-title style="color: #04323a">
            {{ item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ') }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<style scoped>
.v-btn {
  transition: opacity 0.2s ease-in-out;
}

.v-btn:hover {
  opacity: 0.8;
}
</style> 