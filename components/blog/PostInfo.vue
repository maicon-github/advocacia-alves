<template>
  <div class="my-5" style="border-bottom: 1px solid #BDBDBD;">
    <p class="body-2 text--secondary">
      Por: {{ author.name }} / Publicação: {{ formatedCreatedAt }} / Atualização: {{ formatedUpdatedAt }}
    </p>
  </div>
</template>
</template>
<script>
import moment from 'moment'
export default {
  props: {
    author: {
      type: Object,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    updatedAt: {
      type: String,
      required: true
    }
  },
  computed: {
    formatedCreatedAt () {
      return moment(this.createdAt).format('DD [de] MMMM [de] YYYY')
    },
    formatedUpdatedAt () {
      return moment(this.updatedAt).format('DD [de] MMMM [de] YYYY')
    }
  },
  created () {
    moment.locale('pt-BR')
  }
}
</script>
