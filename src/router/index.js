import Vue from 'vue'
import Demo from '../components/Demo.vue'
import RepoBrowser from '../components/RepoBrowser.vue'
import UserPage from '../components/UserPage.vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import RepoRedirect from '../components/RepoRedirect.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/', 
            redirect: "UserPage/User_A"
            // redirect: "login"
        },
        {
            path: '/UserPage/:userName',
            name: "UserPage" , 
            component: UserPage
        },
        {
            path: '/RepoBrowser/:userName/:repoParam/:branchName/:queryPath', 
            name: "RepoBrowser", 
            component: RepoBrowser
        },
        {
            path: '/login', 
            name: "login", 
            component: login
        },
        {
            path:'/RepoRedirect/:userName/:repoParam/:branchName/:queryPath',
            name:'RepoRedirect',
            component:RepoRedirect
        }
    ]
})

export default router


// import Vue from 'vue'
// import Router from 'vue-router'
// import RepoBrowser from '@/components/RepoBrowser'
// import UserPage from '@/components/UserPage'


// Vue.use(Router)

// export default new Router({
//     routes:[
//         {
//             path:'/',
//             redirect:'/UserPage'
//         },
//         {
//             path:'/RepoBrowser/:repoId/:address',
//             name:'RepoBrowser',
//             component:RepoBrowser
//         },
//         {
//             path:'/UserPage',
//             name:'UserPage',
//             component:UserPage
//         }
//     ]
// })