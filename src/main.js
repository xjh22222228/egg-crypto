// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../static/scss/style.scss'
import '../static/css/animate.min.css'
import correct from './components/ui/correct'
import layerTop from './components/ui/layer-top'
import tip from './components/ui/tip'
import confirmCancel from './components/ui/confirm-cancel'
import elHeader from './components/common/header'

Vue.component('elCorrect', correct)
Vue.component('elLayerTop', layerTop)
Vue.component('elTip', tip)
Vue.component('elConfirmCancel', confirmCancel)
Vue.component('elHeader', elHeader)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
