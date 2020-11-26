// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入css和js初始样式
import './assets/css/reset.css'
import './assets/js/rem.js'

//引入阿里矢量图标
import './assets/fonts/iconfont.css'

//引入animate.css
import 'animate.css'


//引入全局组件
import commonComponents from './common/index'
//遍历对象，添加全局组件
for(let key in commonComponents){
  Vue.component(key,commonComponents[key]);
}

//引入全局过滤器
import filters  from './filter/index'
//遍历对象，添加全局过滤器
for(let key in filters){
  Vue.filter(key,filters[key])
}
  



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
