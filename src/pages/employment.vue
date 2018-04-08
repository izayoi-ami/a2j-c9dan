<template>
  <q-page padding>
    <p>What is your average monthly income before accident? Please take the average value of your income in the past 12 months. </p>
    <p><q-input v-model="preAccidentIncome" type="number" :min="0" /></p>
    <p>What is your expected retirement age?</p>
    <p><q-slider v-model="ageOfRetirement" :min="50" :max="70" :step="5" label-always snap /></p>
  </q-page>
</template>

<script>
export default {
  computed: {
    preAccidentIncome: {
      get () {
        return this.$store.state.profile.preAccidentIncome
      },
      set (val) {
        this.$store.commit('profile/updatePreAccidentIncome', val)
      }
    },
    ageOfRetirement: {
      get () {
        return this.$store.state.profile.ageOfRetirement
      },
      set (val) {
        this.$store.commit('profile/updateAgeOfRetirement', val)
      }
    }
  }
}
</script>

<style>
</style>
