<template>
  <q-page padding>
    <p>Incurred Incidental Expenses </p>
    <p><q-input v-model="expenses" type="number" :min="0" /></p>
    <p>Inclusive of:</p>
    <p>a. Medical expenses</p>
    <p>b. Travelling costs incidental to medical treatment</p>
    <p>c. Cost of medical appliances</p>
    <p>It is a good idea that you keep the receipts in relation to the above expenses you incurred.</p>
  </q-page>
</template>

<script>
export default {
  computed: {
    expenses: {
      get () {
        return this.$store.state.profile.expenses
      },
      set (val) {
        this.$store.commit('profile/updateExpenses', val)
      }
    }
  }
}
</script>

<style>
</style>
