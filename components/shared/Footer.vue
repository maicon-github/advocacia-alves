<template>
  <v-footer class="blue-grey darken-3 white--text pa-0">
    <v-container fluid>
      <v-row>
        <v-col md="5" cols="12" align="center">
          <h4 class="text-center mb-5">
            Converse com um especialista sem compromisso
          </h4>
          <v-btn color="success" href="https://api.whatsapp.com/send?l=pt_BR&phone=5548920026917" target="_blank" rel="noreferrer">
            <v-icon left>
              mdi-whatsapp
            </v-icon>
            Whatsapp
          </v-btn>
        </v-col>

        <v-col cols="12" md="2" align="center">
          <h4 class="text-center mb-5">
            Consulta online
          </h4>
          <v-btn color="#4085c6" class="white--text" href="https://api.whatsapp.com/send?l=pt_BR&phone=5548920026917" target="_blank" rel="noreferrer">
            Agendar agora
          </v-btn>
        </v-col>

        <v-col cols="12" md="5">
          <h4 class="text-center mb-5">
            {{ socials.title }}
          </h4>
          <div class="d-flex flex-row justify-space-between mx-auto" style="max-width: 300px;">
            <v-btn
              v-for="(item, i) in socials.items"
              :key="i"
              :href="item.link"
              :title="item.label"
              target="_blank"
              rel="noreferrer"
              icon
            >
              <v-icon large color="white">
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" class="text-center">
          <span>
            Atendimento de segunda a sexta das 09:00 as 12:00 e das 13:00 as 17:00
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(link, i) in links" :key="i" cols="6" md="3">
          <p class="title bold pl-3">
            {{ link.title }}
          </p>
          <p v-for="(item, j) in link.items" :key="j" class="mb-0">
            <v-btn
              :href="item.link"
              text
              small
              color="white"
              :rel="item.rel"
              class="text-capitalize"
              :target="item.target"
            >
              {{ item.label }}
            </v-btn>
          </p>
        </v-col>
        <v-col cols="12">
          <div>
            Alves Advocacia - CNPJ: 39.993.814/0001-00
          </div>
          <div>
            <p>Rua Paschoal Apóstolo Ptsica, 4860, Bairro Agronômica, Florianópolis/SC - CEP: 88025-255</p>
            <p>Rua Praça Nereu Ramos, n.2, sala 3, Centro, Tijucas/SC - CEP 88200-000</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <p>Empresa registrada na OAB/SC sob o número 5856.</p>
        </v-col>
        <v-col cols="12" md="6">
          2024 Alves Advocacia® - Todos os direitos reservados
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data () {
    return {
      socials: {
        title: 'Acompanhê-nos nas redes sociais',
        items: [
          { icon: 'mdi-instagram', label: 'Instagram', link: 'https://www.instagram.com/Advocacia_Alves/' },
          { icon: 'mdi-facebook', label: 'Facebook', link: 'https://facebook.com/advcalves' },
          { icon: 'mdi-linkedin', label: 'Linkedin', link: 'https://www.linkedin.com/company/advocacia-alves/' },
          { icon: 'mdi-youtube', label: 'Youtube', link: 'https://www.youtube.com/channel/UCpAjHLxtknsC0CICqXSwSqA' }
        ]
      },
      links: [
        {
          title: 'Conteúdo',
          items: [
            { label: 'Newsletter', link: '/newsletter' },
            // { label: 'Podcasts', link: 'javascript:;' },
            { label: 'Vídeos', link: 'https://www.youtube.com/channel/UCpAjHLxtknsC0CICqXSwSqA', target: '_blank', rel: 'noreferrer' },
            { label: 'Artigos', link: '/blog' },
            { label: 'Materiais', link: '/materiais' }
            // { label: 'Telegram', link: 'javascript:;' },
            // { label: 'E-books', link: 'javascript:;' }
          ]
        },
        {
          title: 'Institucional',
          items: [
            { label: 'Sobre', link: '/sobre' },
            { label: 'Politica de privacidade', link: '/politica-de-privacidade' },
            { label: 'Termos de uso', link: '/termos-de-uso' },
            { label: 'Trabalhe conosco', link: 'https://advocaciaalves.zohorecruit.com/jobs/carreira', target: '_blank', rel: 'noreferrer' }
            // { label: 'Imprensa', link: 'javascript:;' }
          ]
        },
        {
          title: 'Central de ajuda',
          items: [
            { label: 'Perguntas frequentes', link: '/central-de-ajuda' },
            { label: 'Atendimento online', link: '/consulta-a-distancia' },
            { label: 'Atendimento presencial', link: '/consulta-presencial' },
            { label: 'Solução de problemas', link: '/central-de-ajuda' }
          ]
        },
        {
          title: 'Eventos',
          items: [
            { label: 'Palestras', link: 'https://api.whatsapp.com/send?l=pt_BR&phone=5548920026917', target: '_blank', rel: 'noreferrer' },
            { label: 'Cursos', link: 'https://api.whatsapp.com/send?l=pt_BR&phone=5548920026917', target: '_blank', rel: 'noreferrer' }
          ]
        }
      ]
    }
  }
}
</script>
