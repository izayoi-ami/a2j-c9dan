<template>
  <q-page padding>
    <p>Have you worked betweeni {{ this.$store.state.dates.dateOfAccident }} and {{ this.$store.state.dates.dateOfTrial }}? </p>
  <q-btn-toggle
    v-model="anywork"
    toggle-color="primary"
    :options="[
      {label: 'Yes', value: true},
      {label: 'No', value: false},
    ]"
  />
  <div v-if="this.$store.state.profile.anywork">
  <p>Current salary: </p>
  <p><q-input v-model="currentIncome" type="number" :min="0" /></p>
  <p>Since when? </p>
  <p><q-datetime v-model="dateOfNewWork" type="date" /></p>
  </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    anywork: {
      get () {
        return this.$store.state.profile.anywork
      },
      set (val) {
        this.$store.commit('profile/updateAnywork', val)
      }
    },
    dateOfNewWork: {
      get () {
        return this.$store.state.date.dateOfNewWork
      },
      set (val) {
        this.$store.commit('date/updateDateOfNewWork', val)
      }
    },
    currentIncome: {
      get () {
        return this.$store.state.profile.currentIncome
      },
      set (val) {
        this.$store.commit('profile/updateCurrentIncome', val)
      }
    }
  }
}
</script>

<style>
</style>
