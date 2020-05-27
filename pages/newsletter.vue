<template>
  <v-app>
    <v-row>
      <v-col cols="6" class="pa-0">
        <v-img cover src="/newsletter-signature.png" :height="availableHeight" />
      </v-col>
      <v-col cols="6" class="pa-12 grey lighten-3">
        <p class="title text-center">
          Tenha acesso às novidades exclusivas sobre a previdência direto de especialistas
        </p>
        <v-text-field label="Seu nome" outlined />
        <v-text-field label="Telefone (Whatsapp)" outlined />
        <v-text-field label="E-mail" outlined />
        <p class="caption">
          Inscreva-se para receber os conteúdos selecionados da Advocacia Alves. Suas informações serão utilizadas de acordo com a nossa política de privacidade. Você pode optar por sair a qualquer momento.
        </p>
        <v-btn class="primary">
          <span class="white--text text-uppercase">Inscreva-se</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  layout: 'blank',
  computed: {
    availableHeight () {
      if (process.client) {
        return window.innerHeight
      }
      return 0
    }
  }
}
</script>
