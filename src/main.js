import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.less'
import { Lazyload } from 'vant'
import VueWechatTitle from 'vue-wechat-title'

Vue.config.productionTip = false
// 图片懒加载
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'static/img/error.jpg',
  loading: 'static/img/loading.gif',
  attempt: 3
})
// 动态修改标题插件
Vue.use(VueWechatTitle)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
