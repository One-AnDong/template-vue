/**
 * @Author: Joe Yao
 * @Date: 2019-08-15 15:23:45
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-08-19 12:54:33
 */
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import 'styl/reset'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
