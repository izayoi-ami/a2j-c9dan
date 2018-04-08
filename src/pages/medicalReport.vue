<template>
  <q-page padding>
    <div><p class="caption">Have you received a medical report?  </p></div>
    <div><q-checkbox v-model="medicalReportExist" /></div>
    <div v-if="medicalReportExist">
      <div><p class="caption">What is the estimated loss of earning capacity?</p></div>
      <div><input v-model="earningCapacity" stack-label="Stack Label" /></div>
    </div>
    <br>
    <div><q-btn @click="$router.push('summary')" color="white" text-color="black" label="Next" /></div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  computed: {
    medicalReportExist: {
      get () {
        return this.$store.state.data.medicalReportExist
      },
      set (val) {
        this.$store.commit('data/updateMedicalReportExist', val)
      }
    },
    earningCapacity: {
      get () {
        return this.$store.state.data.earningCapacity
      },
      set (val) {
        this.$store.commit('data/updateEarningCapacity', val)
      }
    }
  }
}
</script>
