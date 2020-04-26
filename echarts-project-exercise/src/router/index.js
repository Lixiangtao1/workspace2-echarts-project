import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 添加页面
const Echarts = () => import('./../views/echarts/echarts.vue')
const Echarts2 = () => import('./../views/echarts/layout_echarts2.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: Echarts
  },
  {
    path: '/echarts2',
    name: 'Echarts2',
    component: Echarts2
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
