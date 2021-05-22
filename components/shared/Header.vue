<template>
  <v-app-bar fixed app height="64">
    <v-container class="d-flex py-0">
      <v-app-bar-nav-icon class="hidden-md-and-up my-auto ml-n6" @click.stop="$emit('menu')" />
      <a href="/" class="ma-auto">
        <img height="52" width="156" src="/logo.png" alt="Advocacia Alves">
      </a>
      <v-spacer class="hidden-sm-and-down" />
      <div class="hidden-sm-and-down my-auto">
        <div class="d-flex pr-4">
          <v-btn href="/" class="my-auto" text small>
            Inicio
          </v-btn>
          <v-btn href="/sobre" class="my-auto" text small>
            Sobre
          </v-btn>
          <v-btn
            href="/blog"
            class="my-auto"
            :style="tempBlogStyle"
            small
            text
          >
            Blog
            <v-icon dense>
              mdi-menu-down
            </v-icon>
          </v-btn>
          <BlogMenu @mounted="hideBlogTemp()" />
          <v-btn href="/central-de-ajuda" class="my-auto" text small>
            Central de ajuda
          </v-btn>
          <v-btn to="/consulta-a-distancia" class="my-auto white--text" color="#e57100" small>
            Consulta à Distância
          </v-btn>
        </div>
      </div>
      <v-btn icon :style="tempSearchStyle" class="my-auto">
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
      <SearchMenu @mounted="hideSearchTemp" />
    </v-container>
  </v-app-bar>
</template>
<script>
import BlogMenu from '../blog/BlogMenu'
import SearchMenu from '../shared/SearchMenu'
export default {
  components: { BlogMenu, SearchMenu },
  data () {
    return {
      showBlogTemp: true,
      showSearchTemp: true
    }
  },
  computed: {
    tempBlogStyle () {
      return this.showBlogTemp ? '' : 'display:none;'
    },
    tempSearchStyle () {
      return this.showSearchTemp ? '' : 'display:none;'
    },
    data () {
      return { showTemp: true }
    }
  },
  methods: {
    hideBlogTemp () {
      this.showBlogTemp = false
    },
    hideSearchTemp () {
      this.showSearchTemp = false
    }
  }
}
</script>
