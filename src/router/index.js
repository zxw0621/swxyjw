import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './../views/index'
import Test from './../views/test'
import Letf from '../components/menu/left'
import Center from '../components/menu/center'
import Right from '../components/menu/right'
import XhBind from '../views/xhBind'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: 'center',
    name: '主页',
    children: [
      { path: 'left', component: Letf, name: 'atd' },
      { path: 'center', component: Center, name: '教务' },
      { path: 'right', component: Right, name: 'mi' }
    ]
  },
  { path: '/test', component: Test, name: '测试页面' },
  { path: '/xhbind', component: XhBind, name: '学号绑定' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
