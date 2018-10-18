import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/page/Home'], resolve)
const Test = resolve => require(['@/page/Test'], resolve)

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        }
    ]
})
