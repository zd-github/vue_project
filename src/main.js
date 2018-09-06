import Vue from 'vue'
import App from './App'
import router from './router'

//引入懒加载模块（头像图片懒加载）
import VueLazyload from 'vue-lazyload';
//配置 懒加载模块
Vue.use(VueLazyload,{
  preLoad:1.3,
  error:require('../static/images/mo.jpg'),
  loading:require('../static/images/minloading.gif'),
  attempt:1
  
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
