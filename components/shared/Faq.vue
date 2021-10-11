<template>
  <v-container>
    <v-row v-for="(section, i) in data" :key="i" class="mt-12">
      <v-col cols="12">
        <h2 class="display-1 font-weight-bold mb-6">
          {{ section.data.title }}
        </h2>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item,j) in section.data.questions" :key="j">
            <v-expansion-panel-header class="headline">
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>{{ item.answer }}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: { data: { type: Array, required: true } }
}
</script>
