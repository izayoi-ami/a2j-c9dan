<template>
  <q-page padding>
    Tap your injury part
    <div id="leg-container">
      <img usemap="#image-map" style="height:254px;width:70px;">
      <map name="image-map">
        <area target="" alt="" title="" href="" @click.prevent="toggleAnkle()" coords="35,182,33,195,39,210,54,213,51,202,50,192,49,183" shape="poly">
        <area target="" alt="" title="" href="" @click.prevent="" coords="23,102,47,119" shape="rect">
      </map>
    </div>
    <q-slider v-model="damageState" :min=0 :max=5 v-if="$store.state.body.legSelected" label-always />
    <q-btn @click="$router.push('trialdate')" />
  </q-page>
</template>

<script>

export default {
  // name: 'PageName',
  name: 'LegPart',
  computed: {
    damageState: {
      get () {
        return this.$store.state.body.parts['leg']
      },
      set (val) {
        console.log('Rip val', val)
        this.$store.commit('body/updateInjury', {part: 'leg', level: val})
      }
    }
  },
  methods: {
    toggleAnkle () {
      this.$store.commit('body/toggleLeg')
      return false
    }
  }
}
</script>

<style>
area {
 color:rgba(255,255,255,0.5);
 z-index: 1;
}

#leg-container{
  background-image:url("/statics/leg.png");
  background-size: cover;
  height: 254px;
  width: 70px;
}
</style>
