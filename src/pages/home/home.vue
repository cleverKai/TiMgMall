<template>
    <div class="home">
      <!--顶部搜索栏-->
      <header class="home-header" :class="{'active' : headerActive}">
        <router-link tag="i" to="./category" class="iconfont icon-menu"></router-link>
        <div class="header-search">
          <span class="app-name">TM</span>
          <i class="iconfont icon-search"></i>
          <router-link tag="span" class="search-title" to="./search">iphone降价啦</router-link>
        </div>
         <router-link tag="span" to="./login" v-if="!isLogin">登录</router-link>
         <router-link tag="span" to="./user" v-else>
           <i class="iconfont icon-people"></i>
         </router-link>
      </header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./imgs/rowing/ss1.jpg" alt="" width="100%" height="100%"></div>
          <div class="swiper-slide"><img src="./imgs/rowing/ss2.jpg" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="./imgs/rowing/ss3.jpg" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="./imgs/rowing/ss4.jpg" alt="" width="100%"></div>
          <div class="swiper-slide" ><img style="height: 192.5px" src="./imgs/rowing/ss5.jpg" alt="" width="100%" ></div>
          <div class="swiper-slide" ><img style="height: 192.5px;" src="./imgs/rowing/ss6.jpg" alt="" width="100%" ></div>
          <div class="swiper-slide" ><img style="height: 192.5px;" src="./imgs/rowing/ss7.jpg" alt="" width="100%" ></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>


      <div class="home-nav">
          <div class="home-nav-content">
            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon01.png" alt="">
              <span>钛镁电器</span>
            </div>
            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon02.png" alt="">
              <span>手机电脑</span>
            </div>

            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon03.png" alt="">
              <span>镁店拼团</span>
            </div>
            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon04.png" alt="">
              <span>钛镁家装</span>
            </div>

            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon05.png" alt="">
              <span>钛镁管家</span>
            </div>

            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon06.png" alt="">
              <span>钛镁超市</span>
            </div>

            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon08.png" alt="">
              <span>充值服务</span>
            </div>

            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon09.png" alt="">
              <span>领镁豆</span>
            </div>

            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon10.png" alt="">
              <span>分期购</span>
            </div>

            <div class="nav-content-item">
              <img src="./imgs/nav/nav_icon07.png" alt="">
              <span>我的</span>
            </div>
          </div>
        </div>
        <div class="floor-list">
          <div class="floor-wrap">
            <img src="./imgs/floor_head/f1.png" alt="" class="floor-head">
             <div class="floor-content">
               <div class="floor-category">
                 <p>高科技充电宝</p>
                 <p>为爱倾注时间</p>
                 <div class="floor-products">
                   <img src="./imgs/floor_pros/f5.jpg" alt="">
                   <img src="./imgs/floor_pros/f6.jpg" alt="">
                 </div>
               </div>


               <div class="floor-category">
                 <p>智能充电宝</p>
                 <p>家电狂欢 精彩有你</p>
                 <div class="floor-products">
                   <img src="./imgs/floor_pros/f7.jpg" alt="">
                   <img src="./imgs/floor_pros/f8.png" alt="">
                 </div>
               </div>
               <div class="floor-category">
                 <p>智能家电</p>
                 <p>家电狂欢 精彩有你</p>
                 <div class="floor-products">
                   <img src="./imgs/floor_pros/f1.jpg" alt="">
                   <img src="./imgs/floor_pros/f2.jpg" alt="">
                 </div>
               </div>

               <div class="floor-category">
                 <p>经典手表</p>
                 <p>为爱倾注时间</p>
                 <div class="floor-products">
                   <img src="./imgs/floor_pros/f3.jpg" alt="">
                   <img src="./imgs/floor_pros/f4.jpg" alt="">
                 </div>
               </div>


               <div class="floor-category">
                 <p>经典手表</p>
                 <p>为爱倾注时间</p>
                 <div class="floor-products">
                   <img src="./imgs/floor_pros/f9.jpg" alt="">
                   <img src="./imgs/floor_pros/f10.jpg" alt="">
                 </div>
               </div>
               <div class="floor-category">
                 <p>经典手表</p>
                 <p>为爱倾注时间</p>
                 <div class="floor-products">
                   <img src="./imgs/floor_pros/f11.jpg" alt="">
                   <img src="./imgs/floor_pros/f12.jpg" alt="">
                 </div>
               </div>
             </div>
          </div>
        </div>
        <navBar></navBar>
      
    </div>
</template>

<script>
 import navBar from './../../components/navBar'
 import Swiper from 'swiper'
 import 'swiper/dist/css/swiper.min.css'
 import {checkLogin} from "../../service/getData";
 export default {
     name: "home",
    data(){
        return{
          isLogin:false,
          headerActive: false,
        }
      },
   beforeCreate(){
       checkLogin().then((res)=>{
         res.status==1? this.isLogin = false:this.isLogin=true
       })
   },
     components:{
       navBar
     },
  mounted(){
       // 创建Swipers实例
    new Swiper('.swiper-container',{
      autoplay:true,
      loop:true,
      pagination:{
        el:'.swiper-pagination',
      }
    })
    window.addEventListener('scroll',this.pageScroll)
  },
  methods:{
       pageScroll(){
         let scrollTop = window.pageXOffset ||
         document.documentElement.scrollTop ||
         document.body.scrollTop
         scrollTop>100 ? this.headerActive = true
         :this.headerActive = false
       }
  },
}
</script>

<style scoped lang="scss">
  @import "../../common/style/mixin";
  .home{
    /***************顶部搜索栏**************/
    .home-header{
      position: fixed;
      left: 0;
      top: 0;
      @include fj;
      width: 100%;
      height: 100px;
      line-height: 100px;
      padding: 0 30px;
      @include boxSizing;
      font-size: 30px;
      color: #ffffff;
      z-index: 1000;
      //background-color: pink;
      &.active{
        background: red;
      }
      .icon-menu{
        font-size: 0.6rem;
      }
      .icon-people{
        font-size: 0.6rem;
      }
      .header-search{
        display: flex;
        width: 74%;
        height: 40px;
        line-height: 40px;
        margin: 20px 0;
        padding: 10px 0;
        color: #232326;
        background: #fff;
        @include  borderRadius(40px);
        .app-name{
          padding: 0 20px;
          color: red;
          font-size: 40px;
          font-weight: bold;
          border-right: 1px solid #666;
        }
        .icon-search{
          padding: 0 20px;
        }
        .search-title{
          font-size: 24px;
          color: #666;
        }

      }
      
    }
    .swiper-container{
      height: 350px;
    }
     /***************首页导航菜单**************/
    .home-nav-content{
      background-color: #fff;
      display: flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      width: 100%;
      padding-bottom: 26px;
      .nav-content-item{
        display: flex;
        flex-direction: column;
        width: 20%;
        text-align: center;
        img {
          width: 120px;
          height: 80px;
          margin: 26px auto 16px auto;
        }
      }
    }
    /***************首页底部列表**************/
    .floor-list {
      width: 100%;
      padding-bottom: 100px;
      .floor-head {
        width: 100%;
        height: 80px;
        background: #F6F6F6;
      }
      .floor-content {
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        width: 100%;
        @include boxSizing;
        .floor-category {
          width: 50%;
          padding: 20px;
          border-right: 1px solid #dcdcdc;
          border-bottom: 1px solid #dcdcdc;
          @include boxSizing;
          background-color: #fff;
          &:nth-child(2n) {
            border-right: none;
          }
          p {
            font-size: 34px;
            color: #333;
            &:nth-child(2) {
              padding: 10px 0;
              font-size: 26px;
              color: $red;
            }
          }
          .floor-products {
            display: flex;
            justify-content: space-around;
            width: 100%;
            img {
              width: 130px;
              height: 130px;
            }
          }
        }
      }
    }

  }
</style>
