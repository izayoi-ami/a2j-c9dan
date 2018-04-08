<template>
  <q-page padding>
    <h3 class="caption">Summary</h3>
    <p>Ability to socialize after accident: {{this.$store.state.data.lossOfSociety}}</p>
    <p>Medical Report Received? {{this.$store.state.data.medicalReportExist}}</p>
    <div v-if="medicalReportExist">
      <p class="caption">Estimated loss of earning capacity: {{this.$store.state.data.earningCapacity}}</p>
    </div>
    <q-btn @click="$router.push('result')" color="white" text-color="black" label="Result" />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
