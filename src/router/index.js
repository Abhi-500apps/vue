import Vue from "vue"
import Router from "vue-router"
import AbHi from '../components/19-04-22/Test1.vue'
import lokEsh from'../components/19-04-22/Test2.vue'
import TablE1 from'../components/19-04-22/Test4.vue'
Vue.use(Router)
const routes = [
   
    {
        path:'/form', 
        name:"form",
        component:AbHi
    },
    {
        path:'/frnd',
        name:"frnd",
        component:lokEsh
    },
    {
        path:'/fun',
        name:"fun",
        component:TablE1

    }
       
]

let router = new Router({ routes })

export default router