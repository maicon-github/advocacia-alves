<template>
  <v-app>
    <Header @menu="drawer = !drawer" />
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
    >
      <v-list nav dense>
        <v-list-item to="/">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>

        <v-list-item to="/sobre">
          <v-list-item-title>Sobre</v-list-item-title>
        </v-list-item>

        <v-list-item to="/blog">
          <v-list-item-title>Blog</v-list-item-title>
        </v-list-item>

        <v-list-item to="/central-de-ajuda">
          <v-list-item-title>Centra de ajuda</v-list-item-title>
        </v-list-item>

        <v-list-item href="https://advocaciaalves.zohorecruit.com/jobs/carreira" target="blank">
          <v-list-item-title>Carreira</v-list-item-title>
        </v-list-item>

        <v-list-item to="/consulta-a-distancia" style="background-color:#e57100;">
          <v-list-item-title style="color:white;">
            Consulta à Distância
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
export default {
  components: { Header, Footer },
  data: () => ({
    drawer: false
  })
}
</script>
