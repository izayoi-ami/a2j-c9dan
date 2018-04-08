<template>
  <q-page padding>
    <div><h3>Expected Damages</h3></div>
    <br>
    <div><h1>${{this.$store.state.data.amount}}</h1></div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  computed: {
    amount: {
      get () {
        return this.$store.state.data.amount
      },
      set (val) {
        this.$store.commit('data/amount', val)
      }
    }
  }
}
</script>
