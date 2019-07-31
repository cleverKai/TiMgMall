<template>
  <div class="update-info">
    <header class="user-head">
      <i class="iconfont icon-back" @click="goBack"></i>
      <span>个人信息</span>
      <i class="iconfont icon-more"></i>
    </header>

    <section class="user-info">
      <div class="user-item">
        <span>昵称:</span>
        <div>
        <span class="username">{{ userInfo.username }}</span>
          <i class="iconfont icon-552cc1babd9aa"></i>
        </div>
      </div>
      <div class="user-item" data-type="email" data-title="邮箱" @click="showWrap">
        <span>邮箱：</span>
        <div>
          <span>{{ userInfo.email }}</span>
          <i class="iconfont icon-552cc1babd9aa"></i>
        </div>
      </div>
      <div class="user-item" data-type="phone" data-title="电话" @click="showWrap">
        <span>电话：</span>
        <div>
          <span>{{ userInfo.phone }}</span>
          <i class="iconfont icon-552cc1babd9aa"></i>
        </div>
      </div>
      <div class="user-item" data-type="phone" data-title="密保" @click="showWrap">
        <span>密保：</span>
        <div>
          <span>{{ userInfo.question }}</span>
          <i class="iconfont icon-552cc1babd9aa"></i>
        </div>
      </div>
      <div class="user-item" data-type="phone" data-title="密保答案" @click="showWrap">
        <span>密保答案：</span>
        <div>
          <span>{{ userInfo.answer }}</span>
          <i class="iconfont icon-552cc1babd9aa"></i>
        </div>
      </div>
    </section>


    <transition name="slide">
      <section class="update-wrap" v-show="updateWrap">
        <div class="user-head">
          <i class="iconfont icon-left" @click="closeWrap"></i>
          <span>修改{{updateTitle}}</span>
          <span @click="saveInfo">完成</span>
        </div>
        <input type="text" v-model="updateText" placeholder="编辑信息" class="update-text" />
      </section>
    </transition>

  </div>
</template>

<script>
  import {updateInfo,getUserInfo} from "../../service/getData";
  export default {
        name: "update-info",
      data(){
          return{
            userInfo: {},
            updateType: '',
            updateTitle: '',
            updateText: '',
            updateWrap: false

          }
      },
      methods:{
          goBack(){
            this.$router.go(-1)
          },
        init(){
          getUserInfo().then((res)=>{
            this.userInfo = res.data
          })
        },
//展示
        showWrap(e){
          let $title = e.currentTarget.getAttribute('data-title'),
            $type = e.currentTarget.getAttribute('data-type')
          this.updateWrap = true
          this.updateType = $type
          this.updateTitle = $title
          this.updateText = this.userInfo[$type]
        },
        // 保存信息
          saveInfo(){
      this.userInfo[this.updateType] = this.updateText
      updateInfo(this.userInfo).then(()=>{
        this.updateWrap = false
        this.init()
      })
    },
    //收起
    closeWrap(){
      this.updateWrap = false
    },

    },

    created(){
      this.init()

    },
    }
</script>

<style scoped lang="scss">
  @import '../../common/style/mixin';
  .update-info {
    .user-head {
      @include fj;
      width: 100%;
      height: 88px;
      padding: 0 20px;
      line-height: 88px;
      font-size: 30px;
      @include boxSizing;
      border-bottom: 1px solid #e8e8e8;

      .iconfont {
        font-size: 44px;
      }
    }

    .user-info{
      width: 100%;
      .user-item{
        @include fj;
        width: 100%;
        padding: 30px;
        @include boxSizing;
        color: #333333;  //
        font-size: 30px;
        border-bottom: 1px solid #e8e8e8;
        .iconfont{
          font-size: 36px;
        }
        .username{
          padding-right: 44px;
          margin-right: -80px;
          /*text-align: right;*/
        }
      }

    }
    .update-wrap{

      position: fixed;
      left: 0;
      top: 0px;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: #eee;
      .user-head{
        background: #fff;
      }
      input{
        width: 100%;
        margin-top: 60px;
        padding: 30px 0;
        text-indent: 40px;
      }
    }
    .slide-enter-active,.slide-leave-active{
      transition: all 0.5s;
    }
    .slide-enter,.slide-leave-to{
      transform: translate3d(100%,0,0);
    }


  }
</style>
