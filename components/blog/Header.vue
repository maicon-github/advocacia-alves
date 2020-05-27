<template>
  <v-app-bar fixed>
    <v-container>
      <v-row>
        <a href="/">
          <img
            height="64"
            src="/logo.png"
            alt="Advocacia Alves"
            class="pt-2"
          >
        </a>
        <v-btn
          v-for="(page, i) in pages"
          :key="i"
          :to="page.link"
          :class="`my-auto ${page.color}`"
          text
          small
        >
          {{ page.label }}
        </v-btn>
        <v-spacer />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        { label: 'Inicio', link: '/', color: '' },
        { label: 'Sobre', link: '/sobre', color: '' },
        { label: 'Categorias', link: '#', color: '' },
        { label: 'Consulta à Distância', link: '/consulta-a-distancia', color: 'red' }
      ]
    }
  }
}
</script>
