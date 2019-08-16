import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from './../pages/home/home'
import category from './../pages/category/category'
import shopcart from './../pages/shopcart/shopcart'
import user from './../pages/user/user'
import search from './../pages/search/search'
import productList from './../pages/product-list/product-list'
import productDetail from './../pages/product-detail/product-detail'
import login from './../pages/login/login'
import register from './../pages/register/register'
import forgetpassword from './../pages/forget-password/forget-password'
import profile from './../pages/profile/profile'
import updatepassword from './../pages/update-password/update-password'
import updateinfo from './../pages/update-info/update-info'
import shopping from './../pages/shopping/shopping'
import order from './../pages/order/order'
import payment from './../pages/payment/payment'
import orderlist from './../pages/order-list/order-list'
import orderdetail from './../pages/order-detail/order-detail'
import profileproduct from './../pages/profile-product/profile-product'
// import product
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
      redirect:'/home'
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
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path:'/product-list',
      component:productList
    },
    {
      path:'/product/:id',
      // path:'/product/:id',
      meta:{
        index: 4
      },
      component:productDetail
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/user',
      component:user
    },
    {
      path:'/register',
      component:register
    },
    {
     path:'/forget-password',
     component:forgetpassword
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/update-password',
      component:updatepassword
    },
    {
      path:'/update-info',
      component:updateinfo
    },
    {
      path:'/shopping',
      component:shopping
    },
    {
      path:'/order',
      component:order
    },
    {
      path:'/payment',
      component:payment
    },
    {
      path:'/order-list',
      component:orderlist
    },
    {
      path:'/order-detail',
      component:orderdetail
    },
    {
      path:'/profile-product',
      component:profileproduct
    }

  ],
  mode:'history'
})
