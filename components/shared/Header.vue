<template>
  <v-app-bar fixed app>
    <v-container>
      <v-row>
        <a href="/">
          <img
            height="64"
            src="/logo.png"
            alt="Advocacia Alves"
          >
        </a>
        <v-spacer />
        <v-btn
          v-for="(page, i) in pages"
          :key="i"
          :href="page.link"
          :target="page.target"
          class="my-auto"
          text
          small
        >
          {{ page.label }}
        </v-btn>
        <v-btn
          to="/consulta-a-distancia"
          class="my-auto white--text"
          color="#e57100"
          small
        >
          Consulta à Distância
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
        { label: 'Carreira', link: 'https://advocaciaalves.zohorecruit.com/jobs/carreira', color: '', target: '_blank' }
      ]
    }
  }
}
</script>
