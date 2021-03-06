// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import Blob from './excel/Blob'
import Export2Excel from './excel/Export2Excel.js'

// import '../theme/index.css'
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
