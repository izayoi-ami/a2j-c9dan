<template>
  <q-page padding>
    <p>Summary</p>
    <p>Date of accident: {{ this.$store.state.date.dateOfAccident }} </p>
    <p>Age: {{ this.$store.state.profile.age }} </p>
    <p>Gender: {{ this.$store.state.profile.gender }} </p>
    <p>Pre-accident monthly income: {{ this.$store.state.profile.preAccidentIncome }} </p>
    <p>Expected retirement age: {{ this.$store.state.profile.ageOfRetirement }}  </p>
    <p>Incurred medical expenses {{ this.$store.state.profile.expenses }} </p>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
