import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueClipboard from 'vue-clipboard2'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false

Vue.use(VueClipboard);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
