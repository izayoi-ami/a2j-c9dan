import Vue from 'vue'
import Vuex from 'vuex'

import dates from './dates'
import profile from './profile'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dates,
    profile
  }
})

export default store
