<template>
  <v-app-bar fixed app>
    <v-container class="d-flex py-0">
      <v-app-bar-nav-icon class="hidden-md-and-up my-auto ml-n6" @click="$emit('menu')" />
      <a href="/" :class="logoClass">
        <img height="52" src="/logo.png" alt="Advocacia Alves">
      </a>
      <v-spacer v-if="$vuetify.breakpoint.mdAndUp" />
      <div v-if="$vuetify.breakpoint.mdAndUp" class="my-auto pr-4">
        <v-btn href="/" class="my-auto" text small>
          Inicio
        </v-btn>
        <v-btn href="/sobre" class="my-auto" text small>
          Sobre
        </v-btn>
        <v-menu open-on-hover offset-y eager>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="/blog"
              class="my-auto"
              v-bind="attrs"
              small
              text
              v-on="on"
            >
              Blog
              <v-icon dense>
                mdi-menu-down
              </v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item key="1" href="/blog/categoria/aposentadoria">
              <v-list-item-title>Aposentadoria</v-list-item-title>
            </v-list-item>
            <v-list-item key="2" href="/blog/categoria/auxilio">
              <v-list-item-title>Auxílio</v-list-item-title>
            </v-list-item>
            <v-list-item key="3" href="/blog/categoria/bpc-loas">
              <v-list-item-title>BPC - LOAS</v-list-item-title>
            </v-list-item>
            <v-list-item key="4" href="/blog/categoria/dica">
              <v-list-item-title>Dica</v-list-item-title>
            </v-list-item>
            <v-list-item key="5" href="/blog/categoria/revisao">
              <v-list-item-title>Revisão</v-list-item-title>
            </v-list-item>
            <v-list-item key="6" href="/blog/categoria/salario-maternidade">
              <v-list-item-title>Salário maternidade</v-list-item-title>
            </v-list-item>
            <v-list-item key="7" href="/blog/categoria/pensao">
              <v-list-item-title>Pensão</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn href="/central-de-ajuda" class="my-auto" text small>
          Central de ajuda
        </v-btn>
        <v-btn
          href="https://advocaciaalves.zohorecruit.com/jobs/carreira"
          class="my-auto"
          target="_blank"
          rel="noreferrer"
          text
          small
        >
          Carreira
        </v-btn>
        <v-btn to="/consulta-a-distancia" class="my-auto white--text" color="#e57100" small>
          Consulta à Distância
        </v-btn>
      </div>
      <v-btn icon :class="searchClass">
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    searchClass () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'mr-n6 my-auto'
      }
      return 'my-auto'
    },
    logoClass () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'ma-auto'
      }
      return 'my-auto ml-n6'
    }
  }
}
</script>
