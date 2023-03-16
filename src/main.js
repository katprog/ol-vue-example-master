import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

import './assets/styles.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store, // Можно просто "store"
}).$mount('#app')
