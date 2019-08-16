<template>
    <div class="login">
      <!--  登录头部-->
       <header class="wrap">
         <i class="iconfont icon-back" @click="goBack"></i>
       </header>
<!--      登录-->
      <div class="login-page">
         <div class="login-wrap">
           <div class="logo">
<<<<<<< HEAD
             <img src="../../assets/logo.png" alt="">
=======
             <img src="../../assets/logo2.png" alt="">
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
           </div>
           <div class="login-text">
              <i class="iconfont icon-shouji1"></i>
             <input type="text" @mouseenter="focusText" @mouseleave="blurText"
                    v-model="username" class="login-username" placeholder="用户名/邮箱/已验证手机">
             <i class="iconfont  icon-baseline-close-px" data-close="username" v-show="!usernameClose" @click="clearText"></i>
           </div>

           <div class="login-text">
             <i class="iconfont icon-suoding"></i>
             <input type="password" @mouseenter="focusText" @mouseleave="blurText" ref="passwordText"
                    v-model="password" class="login-password" placeholder="请输入密码">
             <div>
               <i class="iconfont  icon-baseline-close-px" data-close="password" v-show="!passwordClose" @click="clearText"></i>
               <i class="iconfont icon-eye eye" @click="changeType" v-if="!passwordType"></i>
               <i class="iconfont icon-cceye eye" @click="changeType" v-else></i>
               <router-link tag="span" to="./forget-password" class="forget">忘记密码</router-link>
             </div>
           </div>
         </div>
<!--                   登录按钮-->
        <button class="login-button" :class="{'active': removeSpace(username)&&removeSpace(password)}" @click="loginSubmit">
          登录
        </button>
        <div class="quick-nav">
          <router-link tag="span" class="register-button" to="./register">快速注册</router-link>
        </div>
        <div class="other-login">
          <div class="other-header">
<<<<<<< HEAD
            <i class="left"></i>
            <span>其他登录方式</span>
            <i class="right"></i>
=======
            <i></i>
            <span>其他登录方式</span>
            <i></i>
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
          </div>
          <div class="other-con">
            <div class="login-icon">
              <i class="iconfont icon-qq"></i>
              <span>QQ</span>
            </div>
            <div class="login-icon">
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </div>
            <div class="login-icon">
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </div>
            <div class="login-icon">
              <i class="iconfont icon-zhifubao"></i>
              <span>支付宝</span>
            </div>
          </div>
<<<<<<< HEAD
          <p>登录即代表您已同意TiMgMall隐私政策</p>
=======
          <p>登录即代表您已同意***隐私政策</p>
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
        </div>
      </div>
    </div>
</template>
<script>

   import {removeSpace} from "../../common/js/util";
   import {userLogin} from "../../service/getData";
   export default {
        name: "login",
        data(){
          return{
            username:"",
            password:"",
            usernameClose:"",
            passwordClose:"",
            passwordType:""
          }
        },
      methods:{
          goBack(){
            this.$router.go(-1)
          },

        //聚焦
        focusText(e){
          let $className = e.currentTarget.className
          $className === 'login-username'? this.usernameClose = false:this.passwordClose = false
        },
        // 当失去焦点
        blurText(e){
          let $className = e.currentTarget.className
          $className === 'login-username' ? this.usernameClose = true : this.passwordClose = true
        },
        // 清除输入框内容
        clearText(e){
          let $close = e.currentTarget.getAttribute('data-close')
          console.log($close)
          this[$close] = ''
        },
        // 改变密码的形式
        changeType(){
          let $type = this.$refs.passwordText.getAttribute('type'),
            value = ''
          console.log($type)
          $type === 'password'? value = 'text':value = 'password'
          this.$refs.passwordText.setAttribute('type',value)
          this.passwordType = !this.passwordType
        },
        removeSpace(value){
          return removeSpace(value)
        },
        // 登录
        loginSubmit(){
            if(!this.username || !this.password){
              return
            }
            userLogin(this.username,this.password).then((res) =>{
<<<<<<< HEAD
              //console.log(res);
=======
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
              this.errMsg = ''
              this.$router.push('./user')
            })
        }
      },
    }
</script>

<style lang="scss" scoped>
  @import "../../common/style/mixin";
   header{
     position: relative;
     width: 100%;
     height: 88px;
     text-align: center;
     line-height: 88px;
     padding: 0 20px;
     font-size: 34px;
     @include boxSizing;

     .iconfont{
       position: absolute;
       left: 20px;
       top: 0;
       font-size: 42px;
       font-weight: lighter;
     }
   }
  .login-page{
    .login-wrap{
      width: 100%;
      .logo{
<<<<<<< HEAD
        width: 4.5rem;
        height: 3rem;
=======
        width: 6.5rem;
        height: 3.5rem;
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .login-text{
        @include fj;
        width: 90%;
        height: 60px;
        line-height: 60px;
        padding: 20px 0;
        margin: 0 auto;
        margin-top: 20px;
        border-bottom: 1px solid #dcdcdc;
        .iconfont{
          font-size: 0.5rem;
          color: #cccccc;
          /*vertical-align: middle;*/
<<<<<<< HEAD
          margin-top: -1px;
=======
          margin-top: 6px;
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
          &.eye{
            padding: 0 30px;
            font-size: 40px;
            border-right: 1px solid #dcdcdc;
          }
        }
        input{
          width: 100%;
          height: 100%;
          margin-right: 20px;
          line-height: 60px;
          color: #222;
          padding-left: 30px;
          font-size: 32px;

          &.login-password{
            width: 50%;
          }
        }
        span{
          padding-left: 20px;
          font-size: 30px;
        }
        div{
          display: flex;
          .forget{
            margin-right: 5px;
            color: #78BEE9;;
          }
        }
      }
    }
   .login-button{
     width: 80%;
     height: 100px;
     text-align: center;
     line-height: 100px;
     color: #fff;
     font-size: 32px;
     background: #ff5777;
     @include borderRadius(60px);
     margin-top: 1rem;
     margin-left: 70px;
     &.active{
       background: rgb(246,53,21);
     }
   }
    .quick-nav{
      padding: 40px 0;
      width: 100%;
      text-align: right;
      .register-button{
        color: #78BEE9;;
        font-size: 0.4rem;
        margin-right: 45px;
      }
    }
    .other-login{
      width: 100%;
      margin-top: 100px;
      .other-header{
<<<<<<< HEAD
        position: relative;
        span{
          width: 2.5rem;
          height: .28rem;
          background: #fff;
          display: block;
          margin: 0 auto;
          font-size: .28rem;
          color: #999;
          position: relative;
          text-align: center;
          top: -.17rem;
          // padding: 0 .2rem;
        }
        @include fj;
        i.left{
          position: absolute;
          top: 1px;
          display: block;
          left: 1.4rem;
          border-bottom: 1px solid #999;
          font-size: 28px;
          width: 25%;
        }
        i.right{
          position: absolute;
          top: 1px;
          display: block;
          right: 1.3rem;
          // margin-left: -15px;
          border-bottom: 1px solid #999;
          font-size: 28px;
          width: 25%;
=======
        @include fj;
        i{
          flex: 1;
          text-align: center;
          font-size: 28px;
          color: #dcdcdc;
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
        }
      }
      .other-con{
        display: flex;
        width: 7.267rem;
        padding: 40px 0;
        margin: 0 auto;
        .login-icon{
          justify-content: space-around;
          display: flex;
          flex-direction: column;
          width: 96px;
          margin: 0 auto;
          text-align: center;
          .iconfont{
            width: 100%;
            height: 96px;
            line-height: 96px;
            font-size: 60px;
            color: #15B8F5;
            /*justify-content: space-around;*/
            /*background: #E7E7FE;*/
            @include borderRadius(50%);
            &.icon-weixin{
              font-size: 50px;
              color: #09BB07;
              /*background: #E6F8E6;*/
            }
          }
          span{
            padding-top: 20px;
            color: #999;
          }
        }
      }
      p{
        margin-top: 20px;
        width: 100%;
        text-align: center;
        color: #999;
      }
    }
  }
</style>
