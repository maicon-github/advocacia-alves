<template>
  <v-container class="white">
    <v-row>
      <v-col cols="8" offset="2" class="pa-0">
        <v-card outlined>
          <v-list-item three-line>
            <v-list-item-avatar size="150" color="grey">
              <v-img :src="data.image.url" contain />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ data.name }}
              </v-list-item-title>
              <v-card-text class="pa-0">
                {{ data.degree }}
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
