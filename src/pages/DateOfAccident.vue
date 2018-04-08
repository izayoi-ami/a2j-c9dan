<template>
  <q-page padding>
    <p>Select the date of accident: </p>
    <q-datetime
       v-model="dateOfAccident"
       type="date" />
  </q-page>
</template>

<script>
export default {
  name: 'dateOfAccident',
  computed: {
    dateOfAccident: {
      get () {
        return this.$store.state.dates.dateOfAccident
      },
      set (val) {
        this.$store.commit('dates/updateDateOfAccident', val)
      }
    }
  }
}
</script>

<style>
</style>
