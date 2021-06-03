<template>
  <div class="my-8 pcontainer">
    <div class="pinfo">
      Por: {{ author.name }} / Publicação: {{ formatedCreatedAt }} / Atualização: {{ formatedUpdatedAt }}
    </div>
  </div>
</template>
</template>
<script>
import moment from 'moment'
export default {
  props: {
    author: { type: Object, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
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
<style scoped>
.pinfo {
  color: #8A8A8A;
  font-size: 14px;
  letter-spacing: 0.13px;
  line-height: 20px;
}
.pcontainer {
  border-bottom: 1px solid #BDBDBD !important;
}
</style>
