import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stateTest: 10,
    olMap: null
  },
  
  getters: {
    // getOlMap
    olMap: (state) => {
        return state.olMap;
    },
  },
  
  mutations: {
    // setOlMap
    updateOlMap(state, olMap) {
        state.olMap = olMap;
    }
    // Vue.set(state, "olMap, ...")
  },
  
  actions: {
    // Here we will create Larry
  }
});