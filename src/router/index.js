import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from './../pages/home/home'
import category from './../pages/category/category'
import shopcart from './../pages/shopcart/shopcart'
import user from './../pages/user/user'
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'

Vue.use(Router)
export default new Router({
  // mounted(){
  //   new Swiper('.swiper-container',{
  //     autoplay:true,
  //     loop:true,
  //     pagination:{
  //       el:'.swiper-pagination',
  //     }
  //   })
  // },
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      name: 'home',
      component:home
    },
    {
      path:'/home',
      name: 'home',
      component:home
    },
    {
     path:'/category',
      name:'category',
      component:category
    },
    {
      path:'/shopcart',
      name:'shopcart',
      component:shopcart
    },
    {
      path:'/user',
      name:'user',
      component:user
    }
  ],
})
