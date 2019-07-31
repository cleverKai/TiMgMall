<template>
    <div class="profile">
<!--      头部-->
      <header class="user-head">
        <i class="iconfont icon-back" @click="goBack"></i>
        <span>账号管理</span>
        <i class="iconfont icon-more"></i>
      </header>
<!--      中部-->
      <section class="profile-content">
        <h3 class="profile-title">当前登录账号</h3>
        <div class="profile-item info">
          <img src="https://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png">
          <div>
            <span class="username">{{userInfo.username}}</span>
            <span class="email">邮箱:{{userInfo.email}}</span>
          </div>
        </div>
        <router-link tag="div" to="./update-password" class="profile-item">
          <span>修改登录密码</span>
          <i class="iconfont icon-552cc1babd9aa"></i>
        </router-link>
        <router-link tag="div" to="./update-info" class="profile-item">
          <span>修改个人信息</span>
          <i class="iconfont icon-552cc1babd9aa"></i>
        </router-link>
        <router-link tag="div" to="./shipping" class="profile-item">
          <span>收货地址管理</span>
          <i class="iconfont icon-552cc1babd9aa"></i>
        </router-link>
      </section>
<!--      账号管理底部-->
      <section class="profile-footer">
        <div class="footer-con">
          <div>
            <i class="iconfont icon-yijianfankui"></i>
            <span>意见反馈</span>
          </div>
          <div class="client">
            <i class="iconfont icon-bangzhushouji"></i>
            <span>客户端</span>
          </div>
          <div class="logout" @click="userLogout">
            <i class="iconfont icon-qiehuanzuhu"></i>
            <span>退出登录</span>
          </div>
        </div>
        <p class="sherray">TiMg</p>
      </section>
    </div>
</template>
<script>
  import {getUserInfo,logout} from "../../service/getData";
  export default {
        name: "profile",
    data(){
          return{
            userInfo: {},
          }
    },
    created(){
      getUserInfo().then((res)=>{
        this.userInfo = res.data
      })
    },
    methods:{
          goBack(){
            this.$router.go(-1)
          },
       userLogout(){
        logout().then(()=>{
          this.$router.push('./user')
        })
      },
    }
    }
</script>
<style scoped lang="scss">
  @import '../../common/style/mixin';
  .user-head{
    @include fj;
    width: 100%;
    height: 88px;
    padding: 0 20px;
    line-height: 88px;
    font-size: 30px;
    @include boxSizing;
    border-bottom: 1px solid #f7f7f7;
    .iconfont{
      font-size: 0.586667rem;
    }
  }
  .profile-content{
    width: 100%;
    .profile-title {
      width: 100%;
      @include boxSizing;
      font-weight: normal;
      font-size:  30px;
      margin-top: 10px;
      margin-left: 20px;
      /*border-bottom: 1px solid #f7f7f7;*/
    }
      .profile-item {
        @extend .profile-title;
        @include fj;
        /*height: 30px;*/
        margin-top: 30px;
        border-bottom: 1px solid #e6e6e6;
        span{
          height: .88rem;
        }

        &.info {
          justify-content: left;
          border-bottom: none;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 30px;

            span:last-child {
            }
          }
        }

        .iconfont {
          font-size: 38px;
          margin-right:0.8rem;
        }
      }
    }
  .profile-footer{
    width: 100%;
    margin-top: 40px;
    .footer-con{
      display: flex;
      width: 100%;
      div{
        flex: 1;
        text-align: center;
        &.client{
          line-height: 50px;
        }
        &.logout{
          line-height: 44px;
        }
        i{
          font-style: normal;
          &.iconfont{
            font-size: 40px;
          }
        }
      }
    }
    .sherray{
      width: 100%;
      margin-top: 140px;
      text-align: center;
    }
  }
</style>
