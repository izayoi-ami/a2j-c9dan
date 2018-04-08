<template>
  <q-page padding>
    <p>What is your age? </p>
    <p><q-slider v-model="age" label-always :min="0" :max="130" /></p>
    <p>What is your gender? </p>
  <q-btn-toggle
    v-model="gender"
    toggle-color="primary"
    :options="[
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'},
    ]"
  />
  </q-page>
</template>

<script>
export default {
  computed: {
    age: {
      get () {
        return this.$store.state.profile.age
      },
      set (val) {
        this.$store.commit('profile/updateAge', val)
      }
    },
    gender: {
      get () {
        return this.$store.state.profile.gender
      },
      set (val) {
        this.$store.commit('profile/updateGender', val)
      }
    }
  }
}
</script>

<style>
</style>
