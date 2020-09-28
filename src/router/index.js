import Vue from 'vue'
import VueRouter from 'vue-router'
import Discover from '../views/Discover.vue'
import My from "../views/My.vue"
import Desansis from '../views/Desansis.vue'
import PlayPage from "../views/PlayPage/PlayPage.vue"

import Login from "../views/login/Login.vue"

import Nearby from "../views/DesansisChild/Nearby.vue"
import Recommendation from "../views/DesansisChild/Recommendation.vue"
import Attention from "../views/DesansisChild/Attention.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/discover'
},
{
    path: '/my',
    name: 'my',
    component: My
},
{
    path: '/discover',
    name: 'discover',
    component: Discover,


},
{
    path: '/desansis',
    name: 'desansis',
    component: Desansis,
    redirect: {
        path: '/desansis/recommendation'
    },
    children: [
        {
            path: '/desansis/nearby',
            component: Nearby,
            name: "nearby"
        },
        {
            path: '/desansis/recommendation',
            component: Recommendation,
            name: "recommendation"
        },
        {
            path: '/desansis/attention',
            component: Attention,
            name: "attention"
        }

    ]
},
{
    path: '/login',
    name: 'login',
    component: Login,


},
{
    path: '/playpage',
    name: 'playpage',
    component: PlayPage,
}


]

const router = new VueRouter({
    routes
})

export default router