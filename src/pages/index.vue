<template>
  <q-page class="flex flex-center">
    <div class="layout-padding">
      <p class="caption">Input your age</p>
      <input v-model="selectedValue" placeholder="age">
      <q-slider v-model="selectedValue" :min="1" :max="100" />
      {{this.$store.state.data.selectedValue}}
    </div>
    <div class="layout-padding">
      <q-btn @click="$router.push('lossOfSociety')" color="white" text-color="black" label="Go to next page." />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  computed: {
    age: {
      get () {
        return this.$store.state.data.age
      },
      set (val) {
        this.$store.commit('data/updateAge', val)
      }
    },
    selectedValue: {
      get () {
        return this.$store.state.data.selectedValue
      },
      set (val) {
        this.$store.commit('data/updateSelectedValue', val)
      }
    }
  }
}
</script>
