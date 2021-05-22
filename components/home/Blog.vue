<template>
  <section>
    <SectionHeader :caption1="caption1" :caption2="caption2" :caption3="caption3" />
    <v-container>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-container class="hidden-sm-and-down">
            <v-row>
              <v-col v-for="(item, i) in posts" :key="i" md="4">
                <PostCard :post="item" class="ma-1" />
              </v-col>
            </v-row>
          </v-container>
          <v-carousel
            class="hidden-md-and-up"
            hide-delimiters
            show-arrows
            cycle
            interval="10000"
          >
            <v-carousel-item v-for="(item, i) in posts" :key="i">
              <v-container>
                <v-row>
                  <v-col md="4">
                    <PostCard :post="item" class="mx-8" />
                  </v-col>
                </v-row>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import PostCard from '../shared/PostCard'
import SectionHeader from '../shared/SectionHeader'
export default {
  components: { SectionHeader, PostCard },
  props: {
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
    caption3: { type: String, required: true },
    posts: { type: Array, required: true }
  }
}
</script>
