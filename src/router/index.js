import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import CourseIndex from '../pages/CourseIndex'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'CourseIndex',
            component: require('../pages/CourseIndex.vue')
        },
        {
            path: '/Search',
            name: 'Search',
            component: require('../pages/Search.vue')
        },
    ]
})