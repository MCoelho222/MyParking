import {createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/AppHome.vue'
import Template from '../views/dashboard/AppTemplate.vue'
import NewReserve from '../views/NewReserve.vue'
import ReserveList from '../views/ReserveList.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/reservations', component: Template, children: [
        { path: 'register', component: NewReserve },
        { path: 'list', component: ReserveList }
    ]}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router