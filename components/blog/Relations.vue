<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="12">
        <div class="flex title font-weight-bold">
          Conteúdo relacionado
        </div>
      </v-col>
      <v-col v-for="(related,i) in relations" :key="i" md="4" cols="12">
        <PostCard :post="related" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PostCard from '../shared/PostCard'
export default {
  components: { PostCard },
  props: {
    relations: { type: Array, required: true }
  },
  mounted () {
    for (let i = 0; i < this.relations.length; i++) {
      this.relations[i].data.type = this.$categoryDescription(this.relations[i].data.type)
    }
  }
}
</script>
