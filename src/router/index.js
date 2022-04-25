import Vue from "vue"
import Router from "vue-router"
import AbHi from '../components/19-04-22/Test1.vue'
import lokEsh from'../components/19-04-22/Test2.vue'
import TablE1 from'../components/19-04-22/Test4.vue'
import  TablE11 from '../components/19-04-22/btable.vue'
import FoO from '../components/20-04-2022/mytest9.vue'
import LooK from'../components/20-04-2022/mytest8.vue'
// import Black from '../components/20-04-2022/mytest5'
import LoOk1 from '../components/21-04-22/mytest3'
import BhanU from '../components/21-04-22/mytest7'
import GreeN from '../components/21-04-22/mytest1'
import foreach from '../components/21-04-22/foreach'
import filter from'../components/21-04-22/filter'
import map from'../components/21-04-22/map'
import create from'../components/22-04-22/promise'
import find from'../components/22-04-22/fetch'
import hello from'../components/22-04-22/axios'
import vue1 from'../components/22-04-22/promise1AX'
// import vue2 from'../components/22-04-22/promise2Ax'
import google1 from'../components/25-04-22/Assi1'
import google2 from'../components/25-04-22/Assi2'
import google3 from'../components/25-04-22/Assi6'
import google4 from'../components/25-04-22/Assi7'
import google5 from'../components/25-04-22/Assi8'
import google6 from'../components/25-04-22/Assi10'
import google7 from'../components/25-04-22/Assp4'
import google8 from'../components/25-04-22/AchilB5'


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

    },
    {
        path:'/fun1',
        name:"fun",
        component:TablE11

},
{
    path:'/mytest9',
    name:"mytest9",
    component:FoO      
},
 {
     path:'/mytest8',
     name:"mytest8",
     component:LooK     

 },
 {
    path:'/mytest3',
    name:"mytest3",
    component:LoOk1     


 },
 {

    path:'/mytest7',
    name:'mytest7',
    component:BhanU

 },
 {
    path:'/mytest1',
    name:'mytest1',
    component:GreeN


},
{

    path:'/foreach',
    name:'foreach',
    component:foreach


},
{
    path:'/filter',
    name:'filter',
    component:filter
},
{

        path:'/map',
        name:'map',
        component:map
},
{
    path:'/promise',
    name:'promise',
    component:create


},
{
    path:'/fetch',
    name:'fetch',
    component:find
},
{
    path:'/axios',
    name:'axios',
    component:hello
},
{
    path:'/pro1A',
    name:'pro1A',
    component:vue1
},
{
    path:'/Assi1',
    name:'Abhi',
    component:google1

},
{
    path:'/Assi2',
    name:"Assi2",
    component:google2

},
{
    path:'/Assi6',
    name:"Assi6",
    component:google3

},
{
    path:'/Assi7',
    name:'Assi7',
    component:google4

},
{
    path:'/Assi8',
    name:'Assi8',
    component:google5
},
{
    path:'/Assi10',
    name:'Assi10',
    component:google6
},
{
    path:'/Assp4',
    name:'Assp4',
    component:google7
},
{
    path:'/AchilB5',
    name:'AchilB5',
    component:google8
}

 
]
let router = new Router({routes})
export default router
