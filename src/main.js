import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
