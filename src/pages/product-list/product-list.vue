<template>
    <div class="product-list-wrap">
       <div style="position:fixed;left: 0;top: 0; width: 100%;z-index: 1000;background:#fff ">
         <header class="category-header wrap">
            <i class="iconfont icon-back" @click="goBack"></i>
            <div class="header-search">
              <i class="iconfont icon-search"></i>
              <input type="text" class="search-title" @mouseenter="textEnter" @mouseleave="textLeave" v-model="keyword">

            </div>
            <i class="iconfont icon-more" v-if="!searchBtn"></i>
            <span class="search-btn" v-else @click="getSearch">搜索</span>
         </header>

<!--       中间部分-->
       <section class="select-menu">
          <div class="select-item" :class="{'active' :orderBy === 'default'}" data-orderBy="default" @click="selectOrder($event)">
            默认排序
          </div>
          <div class="select-item" :class="{'active' :orderBy ==='price_asc'}" data-orderBy="price_asc" @click="selectOrder($event)" >
            升序
            <i class="iconfont icon-up" :class="{'active' :orderBy ==='price_asc'}"></i>
          </div>
          <div class="select-item" :class="{'active' :orderBy === 'price_desc'}" data-orderBy="price_desc"@click="selectOrder($event)">
            降序
            <i class="iconfont icon-down" :class="{'active' :orderBy ==='price_desc'}"></i>
          </div>
           <div class="select-item">
             筛选
             <i class="iconfont icon-screen"></i>
           </div>
       </section>
<!--      第三部分-->
      <section class="product-list" v-show="!isLoading">
        <div>
          <div class="product-item" v-for="(item,index) in productList" @click="productDetail(index)">
            <img :src="item.imageHost+item.mainImage" v-if="item.imageHost && item.mainImage" alt="">
            <img src="../../assets/product_default.jpg" v-else alt=""/>
            <div class="product-info">
              <p class="name">{{ item.name }}</p>
              <p class="subtitle">{{ item.subtitle }}</p>
              <span class="price">￥{{ item.price}}</span>
            </div>
          </div>
        </div>
      </section>
       </div>
    </div>

</template>

<script>
   import {productListKeyword,productListCategoryId} from "../../service/getData";
   import {getUrlKey,getStore,dedupeObject} from "../../common/js/util";
   export default {
     name: "product-list",
     data() {
       return {
         keyword: '',
         isLoading: true,
         searchBtn: false,
         orderBy: 'default',
         params: {
           categoryId: '',
           keyword: '',
           pageNum: 1,
           pageSize: 20,
           orderBy: 'default',
         },
       }
     },
     created() {
       this.init()
     },
     methods: {
       //输入状态
       textEnter() {
         this.searchBtn = true
       },
       //不是输入状态
       textLeave() {
         this.searchBtn = false
       },
       //返回上一级
       goBack() {
         console.log(111)
         this.$router.go(-1)
       },
       //点击按钮进行搜索
       getSearch() {
         this.$router.push('/product-list?keyword = ' + this.keyword + '&categoryId = 0')
         this.params.keyword = this.keyword
         this.params.pageNum = 1
         this.productList = []
         this.getProductList(this.params)
       },
       //获取商品列表（根据关键词和商品类别）
       getProductList(params) {
         if (!this.keyword) {
           productListCategoryId(params).then((res) => {
             this.isLoading = false
             if (res.data.list.length === 0) {
               this.$el.querySelector('.loading_text').style.display = 'none';
               this.showMessage()
               return
             }
             this.productList = this.productList.concat(res.data.list)
           })
         } else {
           productListKeyword(params).then((res) => {
             this.isLoading = false
             if (res.data.list.length === 0) {
               // this.$el.querySelector('.loading_text').style.display = 'none';
               this.showMessage()
               return
             }
             this.productList = this.productList.concat(res.data.list)
           })
         }
       },
       init() {
         let keyword = getUrlKey('keyword'),
           categoryId = getUrlKey('category')
         this.productList = []
         this.params.categoryId = categoryId
         this.params.keyword = keyword
         this.keyword = keyword
         this.getProductList(this.params)
       },
       //价格排序
       selectOrder(e) {
         let orderBy = e.currentTarget.getAttribute('data-orderBy')
         if (orderBy === this.orderBy) {
           return
         }
         this.productList = []
         this.orderBy = orderBy
         this.params.orderBy = orderBy
         this.params.pageNum = 1
         this.isLoading = true
         this.getProductList(this.params)
       },
       productDetail(index) {

         this.$router.push('./product/' + this.productList[index].id)
       },

     },


   }
</script>

<style scoped lang="scss">
  @import "../../common/style/mixin";
  .category-header{
    @include fj;
    width: 100%;
    height: 100px;
    line-height: 100px;
    padding: 0 30px;
    @include boxSizing;
    font-size: 30px;
    color: #656771;
    z-index: 10000;
    &.active{
      background: $red;
    }
    .icon-back{
      font-size: 0.6rem;
      font-weight: lighter;
      color: #656771;;

    }
    .header-search{
      display: flex;
      width: 76%;
      height: 40px;
      line-height: 40px;
      margin: 20px 0;
      padding: 10px 0;
      color: #232326;
      background: #eee;
      @include borderRadius(40px);
      .icon-search{
        padding: 0  10px 0 40px ;
        font-size: 34px;
      }
      .search-title{
        font-size: 24px;
        color: #666;
        background: #eee;
      }
    }
    .icon-more{
      font-size: 50px;
    }
    .search-btn{
      height: 70px;
      margin: 15px 0;
      line-height: 70px;
      padding: 0 10px;
      color: #fff;
      background: $red;
      @include borderRadius(10px);
    }
  }
  .select-menu{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    background: #fff;
    &.isFixed{
      position: fixed;
      left: 0;
      top: 0;
    }
    .select-item{
      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 100px;
      font-size: 30px;
      border-top: 1px solid #dcdcdc;
      border-bottom: 1px solid #dcdcdc;
      &.active{
        color: $red;
      }
      .iconfont{
        &.icon-down{
          color: #999;
          padding-left: 10px;
          font-size: 22px;
        }
        &.icon-up{
          @extend .icon-down;
          font-size: 28px;
        }
        &.active{
          color: $red;
        }
      }
    }
  }
  .product-list{
    width: 100%;
    /*margin-top: 200px;*/
    .product-item{
      @include fj;
      width: 100%;
      height: 240px;
      padding: 20px 0;
      border-bottom: 1px solid #dcdcdc;

      img{
        width: 280px;
        height: 240px;
        padding: 0 20px;
        @include boxSizing;
      }
      .product-info{
        width: 56%;
        height: 240px;
        padding: 10px;
        @include boxSizing;

        .name{
          width: 100%;
          max-height: 1.533333rem;
          font-size: 30px;
          color: #333;
          overflow: hidden;
        }
        .subtitle{
          width: 100%;
          max-height: 40px;
          padding: 20px 0;
          line-height: 50px;
          font-size: 26px;
          color: #999;
          overflow: hidden;
        }
        .price{
          color: $red;
          font-size: 32px ;
        }
      }
    }
  }
</style>
