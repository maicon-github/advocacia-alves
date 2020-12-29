<template>
  <v-menu offset-y bottom left :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        class="my-auto"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </template>
    <v-card class="pa-4 pb-2" width="300px">
      <v-text-field
        v-model="text"
        label="Pesquisar no blog"
        dense
        hide-details
        autofocus
        clearable
        :loading="loading"
        @keyup.enter="onEnter"
        @click:clear="clearSearch"
      />
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data: () => ({ text: '', loading: false }),
  mounted () {
    this.$emit('mounted')
  },
  methods: {
    onEnter () {
      this.loading = true
      if (this.text.length) {
        if (this.$route.path === '/blog') {
          this.$router.replace({ path: '/blog', query: { s: this.text } }, this.endSearch)
        } else {
          this.$router.push({ path: '/blog', query: { s: this.text } }, this.endSearch)
        }
      } else {
        this.$router.replace({ path: '/blog' }, this.endSearch)
      }
    },
    clearSearch () {
      this.loading = true
      this.$router.replace({ path: '/blog' }, this.endSearch)
    },
    endSearch () {
      this.loading = false
    }
  }
}
</script>
