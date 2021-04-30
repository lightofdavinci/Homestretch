import Vue from 'vue'
import Vuex from 'vuex'

import pickerModule from "./modules/picker.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {}, // rootState: 'Can Be Anything For Large Project'
  modules: { demoModule: pickerModule }
})
