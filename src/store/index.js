import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import data from './data'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example,
    data
  }
})

export default store
