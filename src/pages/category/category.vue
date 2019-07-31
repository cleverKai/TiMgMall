<template>
  <div>
    <navBar></navBar>
    <header class="category-header wrap">
      <i class="iconfont icon-back" @click="goHome"></i>
      <div class="header-search">
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./search">小米9</router-link>
      </div>
      <i class="iconfont icon-more"></i>
    </header>
    <!--    分类-->
    <section class="search-wrap" ref="searchWrap">
      <list-scroll :scroll-data="categoryData" class="nav-side-wrapper">
        <ul class="nav-side">
          <li v-for="(item,index) in categoryData" v-text="item.name"
              :class="{'active':currentIndex === index}" @click="selectMenu(index)" ></li>
        </ul>
      </list-scroll>

      <!--     页面右侧列表-->
      <div class="search-content">
        <list-scroll :scroll-data="categoryData">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <transition name="fade-out">
                <div class="swiper-slide"v-for="(category,index) in categoryData" v-if="currentIndex===index">
                  <img class="category-main-img" :src="category.mainImgUrl" v-if="category.mainImgUrl" alt="">
                  <div class="category-list" v-for="products in category.list">
                    <p class="category-title">{{products.title}}</p>
                    <div class="product-item" v-for="product in products.productList" @click="selectProduct(product.title)">
                      <img :src="product.imgUrl" class="product-img" alt="">
                      <p v-text="product.title" class="product-title"></p>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </list-scroll>
      </div>
    </section>

  </div>
</template>

<script>
  import navBar from './../../components/navBar'
  import listScroll from '../../components/list-scroll'
  import {categoryData} from '../../service/getData';
  export default {
        name: "category",
        data(){
          return{
            categoryData:[],
            currentIndex:0
          }
        },
    created(){
      this.getCategoryData()
    },
     mounted(){
          this.setSearchWrapHeight()
     },
      components:{
          navBar,
        listScroll
      },
      methods:{
          goHome(){
            this.$router.push('./home')
          },
        async getCategoryData(){
          await categoryData().then((res)=>{
            console.log(res)
            this.categoryData = res.data
          })
        },
        //动态设置search-wrap的高
        setSearchWrapHeight(){
          let $screenHeight = document.documentElement.clientHeight
          this.$refs.searchWrap.style.height = $screenHeight +"px"
        },
        // 设置左侧菜单和右侧区域联动
        selectMenu($index){
            this.currentIndex = $index
        },
        selectProduct(title){
            this.$router.push('./product-list?keyword='+title)
        },
      },
  }
</script>

<style scoped lang="scss">
  @import '../../common/style/mixin';
  .category-header{
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
    color: #656771;
    background-color: #fff;
    z-index: 1000;
    &.active {
      background: $red;
    }
    .icon-back{
      font-size: 45px;
      font-weight: lighter;
    }
    .header-search{
      display: flex;
      width: 80%;
      height: 40px;
      line-height: 40px;
      margin: 20px 0;
      padding: 10px 0;
      color: #232326;
      background: #EEE;
      @include borderRadius(40px);
      .icon-search{
        padding: 0 20px 0 40px;
        font-size: 34px;
      }
      .search-title{
        font-size: 24px;
        color: #666;
      }
    }
    .icon-more{
      font-size: 40px;
    }

  }
  .search-wrap{
    @include fj;
    width: 100%;
    margin-top: 100px;
    background-color: #EEE;
    border-top: 1px solid #999;
    .nav-side-wrapper{
      width: 28%;
      height: 100%;
      overflow: hidden;
      .nav-side{
        width: 100%;
        @include boxSizing;
        background: #EEE;
        li{
          width: 100%;
          height: 92px;
          text-align: center;
          line-height: 92px;
          font-size: 28px;
          &.active{
            color: $red;
            background: #fff;
          }
        }

      }

    }
  }
  .search-content {
    width: 72%;
    /*height: 100%;*/
    padding: 0 20px;
    background: #fff;
    @include boxSizing;
    .swiper-container {
      width: 100%;
      .swiper-slide {
        width: 100%;
        .category-main-img {
          width: 100%;
        }
        .category-list {
          display: flex;
          flex-wrap: wrap;
          flex-shrink: 0;
          width: 100%;
          .category-title {
            width: 100%;
            font-size: 34px;
            font-weight: 500;
            padding: 40px 0;
          }
          .product-img{
            width: 90%;
            height: 90%;
          }
          .product-item {
            width: 50%;
            margin-bottom: 35px;
            text-align: center;
            font-size: 30px;
          }
          .product-item img{
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .fade-out-enter-active, .fade-out-leave-active {
    transition: opacity 2s;
  }

  .fade-out-enter, .fade-out-leave-to {
    opacity: 0;
  }

</style>
