// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('swiper/dist/css/swiper.css')
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import Calendar from 'vue-calendar-component'
import {
  Tabs,
  TabPane,
  Rate,
  Progress,
  Upload,
  Dialog,
  Switch,
  Tooltip
  } from 'element-ui'
Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Calendar)
Vue.use(Rate)
Vue.use(Progress)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.HOST='/api'


Vue.config.productionTip = false




Axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
