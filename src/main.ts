import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from './plugins/valid'
import './assets/less/index.less'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(plugin).use(MavonEditor)

router.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    next()
})

new Vue({
    router,
    store,
    render: h=>h(App)
}).$mount('#app')
