import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/home/home.vue'),
    meta:{
      title: '番茄の家'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/login/login.vue'),
    meta:{
      title: '登录'
    }
  },
  {
    path: '/message',
    name: 'Message',
    component:()=>import('../views/messageBoard/messageBoard.vue'),
    meta:{
      title: '留言'
    }
  },
  {
    path: '/articleList',
    component: ()=>import('../views/articleList/articleList.vue'),
    meta:{
      title: '文章列表'
    }
  },
  {
    path: '/setting',
    component: ()=>import('../views/setting/setting.vue'),
    meta:{
      title: '个人设置'
    }
  },
  {
    path: '/writing',
    component: ()=>import('../views/writing/writing.vue'),
    meta:{
      title: '写文章'
    }
  },
  {
    path: '*',
    redirectTo: '/home'
  }
]

const router = new Router({
  mode: 'history',
  base: '/myblog',
  routes
})

router.beforeEach((to,from,next)=>{
  store.commit('SET_SHOW_PAGE_LOAD_SCROLL_BAR', true)
  next()
})

router.afterEach((to,from)=>{
  store.commit('SET_SHOW_PAGE_LOAD_SCROLL_BAR', false)
  document.title = to.meta.title
})

export default router
