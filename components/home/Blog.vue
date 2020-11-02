<template>
  <section>
    <SectionHeader :caption1="caption1" :caption2="caption2" :caption3="caption3" />
    <v-container>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-slide-group show-arrows>
            <v-slide-item v-for="item in posts" :key="item.id">
              <PostCard :post="item" :width="cardWidth" />
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import PostCard from '../shared/PostCard'
import SectionHeader from '../shared/SectionHeader'
export default {
  components: { PostCard, SectionHeader },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    caption3: { type: String, required: true },
    posts: { type: Array, required: true }
  },
  computed: {
    cardWidth () {
      return this.$vuetify.breakpoint.mdAndUp ? '362' : '295'
    }
  }
}
</script>
