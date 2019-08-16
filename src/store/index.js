import Vue from 'vue'
import Store from 'vuex'
import modules from './modules'
Vue.use(Store)

export default new Store({
  ...modules
})
