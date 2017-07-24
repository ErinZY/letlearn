import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CourseIndex from '../pages/CourseIndex'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/CourseIndex',
            name: 'CourseIndex',
            component: require('../pages/CourseIndex.vue')
        },
    ]
})