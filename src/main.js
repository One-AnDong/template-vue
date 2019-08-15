/**
 * @Author: Joe Yao
 * @Date: 2019-08-15 15:23:45
 * @Last Modified by: Joe Yao
 * @Last Modified time: 2019-08-15 15:27:43
 */
import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
