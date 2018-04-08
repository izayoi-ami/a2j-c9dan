<template>
  <q-page padding>
    Do you know your trial date? <br />
    <q-btn
      color="primary"
      style="width:200px;"
      @click="setCustom()"
      >Yes, in 2 years</q-btn>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="setCustom()"
      >No</q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'DateOfTrial',
  methods: {
    setCustom () {
      this.$store.commit('dates/setNTDdate', console.log(new Date(this.$store.state.dates.dateOfAccident.getTime() + 1000 * 86400 * 2 * 365)))
      this.$router.push('/body')
    },
    next () {
    }
  }
}
</script>

<style>
</style>
