// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import './../src/common/style/reset.css'
import http from './service/ajax'
import store from './store'
Vue.prototype.$http = http
require('./mock/mock')
Vue.config.productionTip = false
Vue.directive('focus',{
  inserted:function (el) {
    el:focus()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
