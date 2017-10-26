import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '../pages/index'
import Profile from '../pages/profile'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {path: '/', name: 'index', component: Index},
            {path: '/profile', name: 'profile', component: Profile}
        ]
    }
]
const router = new Router({
    routes: routes, // short for routes: routes
    linkActiveClass: 'active',  // router-link的选中状态的class，也有一个默认的值
    history: true
})
// router.beforeEach(function (to,from,next) {
//     var userMsg = localStorage.getItem('userMsg')
//     if(to.path === '/home'){
//         if(!userMsg){
//             next({ path: '/login' })
//         }
//     }
//     next()
// })
export default router