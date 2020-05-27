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
        <v-spacer />
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
        { label: 'Blog', link: '/blog', color: '' },
        { label: 'Central de ajuda', link: '/central-de-ajuda', color: '' },
        { label: 'Carreira', link: '#', color: '' },
        { label: 'Consulta à Distância', link: '/consulta-a-distancia', color: 'red' }
      ]
    }
  }
}
</script>
