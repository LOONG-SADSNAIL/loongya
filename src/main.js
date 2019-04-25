import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import './plugins/element.js'
import '@/icons' // icon
import '@/assets/css/comm.css'
import './plugins/permission'
import VueWechatTitle from 'vue-wechat-title'

Vue.use(VueWechatTitle)
Vue.config.productionTip = false

localStorage.setItem('new', true)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
