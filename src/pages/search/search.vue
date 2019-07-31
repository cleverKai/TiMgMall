<template>
    <div class="search-box">
<!--      搜索顶部-->
       <div class="search-header">
          <i class="iconfont icon-back" @click="goBack"></i>
          <div class="search-con">
            <i class="iconfont icon-search"></i>
            <input v-focus placeholder="双十一狂欢" v-model="searchText">
          </div>
           <span @click="getSearch">搜索</span>
       </div>
      <!--     搜索中部-->
      <div class="search-content">
        <div class="search-list history-list">
          <p>最近搜索
            <i class="iconfont icon-delete" @click="deleteHistory"></i>
          </p>
          <div>
            <span v-for = "item in searchHistory" @click="selectTag(item)">{{item}}</span>
          </div>
        </div>
        <div class="search-list hot-list">
          <p>热门搜索</p>
          <div>
            <span v-for="item in hotData" :class="{'hot': item.hot}" @click="selectTag(item.title)">{{ item.title }}</span>
          </div>
        </div>
      </div>

      <popup :popup-title="popupTitle"
             :popup-show="popupShow"
             @cancelPopup="cancelPopup"
             @confirmPopup="confirmPopup"></popup>

    </div>
</template>
<script>
  import {hotData} from "../../service/getData";
  import {getStore,dedupe} from "../../common/js/util";
  import {mapState,mapMutations}from 'vuex'
  import popup from '../../components/common/popup'
  export default {
        name: "search",
        data(){
          return {
            searchText: '',
            hotData:[],
            popupTitle:'',
            popupShow:false
          }
        },
    components:{
          popup
    },
      directives:{
         focus:{
           inserted:function (el) {
             el.focus()
           }
         }
      },
    computed:{
        ...mapState({
          searchHistory:state =>state.searchHistory
        })
    },
      methods:{
          ...mapMutations([
            'ADD_HISTORY'
          ]),
          goBack(){
            this.$router.go(-1)
          },
        getSelectTags(){
            hotData().then((res)=>{
              this.hotData = res.data
            })
        },
        getSearch(){
            let keyword = this.searchText.replace(/^\s+|\s+$/g,"")
             if(!keyword){
               alert("请输入搜索内容")
               return
             }
             this.selectTag(keyword);
        },
        selectTag(keyword){
            this.searchHistory.unshift(keyword)
            this.$router.push('/product-list?keyword='+keyword+'&categoryId=0')
            this.ADD_HISTORY(dedupe(this.searchHistory))
        },
        deleteHistory(){
            this.popupTitle = "确定删除搜索历史吗？"
            this.popupShow = true
        },
        confirmPopup(){
            this.ADD_HISTORY([])
            this.cancelPopup()
        },
        cancelPopup(){
            ModalHelper.beforeClose()
          this.popupShow = false
        },

      },
    created() {
      let searchHisttory = getStore('searchHistory')
      if(!searchHisttory){
        searchHisttory=[]
      }
      this.ADD_HISTORY(searchHisttory)
      this.getSelectTags()
    },
  }
</script>

<style scoped lang="scss">
  @import "../../common/style/mixin";
   /*搜索页面*/
    .search-box{
      width: 100%;
      font-size: 30px;

      .search-header{
        @include fj;
        width: 100%;
        height: 90px;
        padding: 15px 30px 15px 20px ;
        box-sizing: border-box;
        @include  border-1px(#dcdcdc);

        .icon-back{
          margin-top: 10px;
          font-size: 0.6rem;
          font-weight: lighter;
          color:  #656771;;
        }

        .search-con{
          width: 76%;
          height: 60px;
          line-height: 60px;
          margin-left: -20px;
          padding-left:30px ;
          font-size: 26px;
          background: #eee;
          border-right: 40px;
          @include boxSizing;

          .iconfont{
            font-size: 36px;
            padding-right: 20px;
          }
          input{
            font-size: 24px;
            background: #eee;
          }
        }
        span{
          width: 12%;
          text-align: center;
          height: 100%;
          line-height: 60px;
          color: #fff;
          font-size: 26px;
          background: #E93B3D;
          border-right: 10px;

        }
      }
      .search-content{
        width: 100%;
        padding: 0 30px;
        box-sizing: border-box;

        .search-list{
          width: 100%;
          &.history-list{
            margin-bottom: 20px;
          }
          p{
            position: relative;
            padding:20px 0;
            .icon-delete{
              position: absolute;
              right: 0;
              top: 20px;
              font-size: 40px;

            }
          }
          div{
            display: flex;
            flex-shrink: 0;
            flex-wrap: wrap;

            span{
              padding: 8px 26px ;
              margin: 0 20px 20px 0;
              font-size: 24px;
              color: #686868;
              background: #F0F2F5;
              border-radius: 10px;
              &.hot{
                color: #E93B3D;
              }
            }

          }

        }
      }
    }
</style>
