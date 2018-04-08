<template>
  <q-page padding>
  <h4 class="caption">Rank your ability to socialize after accident? </h4>
  <q-slider v-model="lossOfSociety" :min="1" :max="5" :step="1" label snap markers />
  <q-card inline class="q-ma-sm">
    <q-card-main>
      {{ lossOfSocietyDescription}}
    </q-card-main>
  </q-card>
  <br>
  <q-btn @click="$router.push('summary')" color="white" text-color="black" label="Next" />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  computed: {
    lossOfSociety: {
      get () {
        return this.$store.state.data.lossOfSociety
      },
      set (val) {
        this.$store.commit('data/updateLossOfSociety', val)
      }
    },
    lossOfSocietyDescription: {
      get () {
        if (this.$store.state.data.lossOfSociety === 1) {
          return 'complete loss of social interaction'
        } else if (this.$store.state.data.lossOfSociety === 2) {
          return 'severe limitation in modes of interaction'
        } else if (this.$store.state.data.lossOfSociety === 3) {
          return 'moderate adverse effect on social interactions'
        } else if (this.$store.state.data.lossOfSociety === 4) {
          return 'slight disturbance in social life'
        } else if (this.$store.state.data.lossOfSociety === 5) {
          return 'same as before'
        } else {
          return 'please select'
        }
      },
      set (val) {
        // this.$store.commit('data/updateLossOfSociety', val)
      }
    }
  }
}
</script>
