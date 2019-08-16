<template>
  <div class="register">
<!--    注册头部-->
    <header class="wrap">
      <i class="iconfont icon-back" @click="goBack"></i>
      <span>用户注册</span>
    </header>
<!--    注册中部-->
    <section class="page">
      <div class="register-page">
        <div class="register-wrap">
          <div class="register-text">
            <input @mouseenter="focusText"
                   @mouseleave="blurText" v-model="username" type="text" class="register-username" placeholder="请输入用户名" />
            <i class="iconfont icon-close" data-close="username" v-show="!usernameClose" @click="clearText"></i>
          </div>
          <div class="register-text">
            <input @mouseenter="focusText"
                   @mouseleave="blurText" v-model="password" type="password" class="register-password" placeholder="请输入密码"  />
            <i class="iconfont icon-close" data-close="password" v-show="!passwordClose" @click="clearText"></i>
          </div>
          <div class="register-text">
            <input @mouseenter="focusText"
                   @mouseleave="blurText" v-model="email" type="text" class="register-email" placeholder="请输入邮箱"  />
            <i class="iconfont icon-close" data-close="email" v-show="!emailClose" @click="clearText"></i>
          </div>
          <div class="register-text">
            <input @mouseenter="focusText"
                   @mouseleave="blurText" v-model="phone" type="text" class="register-phone" placeholder="请输入手机号"  />
            <i class="iconfont icon-close" data-close="phone" v-show="!phoneClose" @click="clearText"></i>
          </div>
        </div>
        <div class="register-error">{{errMsg}}</div>
        <button class="register-button" @click="registerNext" :class="{'active' : removeSpace(username)&&removeSpace(password)&&removeSpace(email)&&removeSpace(phone)}">下 一 步</button>
        <!--    下一页-->
        <transition name="slide">
          <div class="set-security" v-show="securityShow">
            <div class="set-security-head">
              <i class="iconfont icon-left" @click="closeSecurity"></i>
              <span>设置密保问题</span>
            </div>
            <p>设置的密保问题和答案将用于忘记密码时重置密码!</p>
            <div class="register-page">
              <div class="register-wrap">
                <div class="register-text">
                  <input @mouseenter="focusText"
                         @mouseleave="blurText" v-model="question" type="text" class="register-question" placeholder="请输入密保问题" />
                  <i class="iconfont icon-close" data-close="question" v-show="!questionClose" @click="clearText"></i>
                </div>
                <div class="register-text">
                  <input @mouseenter="focusText"
                         @mouseleave="blurText" v-model="answer" type="password" class="register-answer" placeholder="请输入密保答案"  />
                  <i class="iconfont icon-close" data-close="answer" v-show="!answerClose" @click="clearText"></i>
                </div>
              </div>
            </div>
            <div class="register-error">{{errMsg}}</div>
            <button class="register-button next" @click="registerSubmit" :class="{'active' : removeSpace(question)&&removeSpace(answer)}">立 即 注 册</button>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>
<script>
  import {removeSpace,formValidate} from "../../common/js/util";
  import {userRegister} from "../../service/getData";
  export default {
        name: "register",
        data(){
          return{
            username: '',
            password: '',
            email: '',
            phone: '',
            usernameClose: true,
            passwordClose: true,
            emailClose: true,
            phoneClose: true,
            errMsg:'',
            question: '',
            answer: '',
            questionClose: true,
            answerClose: true,
            securityShow: false
          }
        },
       methods:{
          goBack(){
            this.$router.go(-1)
          },
         //聚焦时
         focusText(e){
           this.judgeText(e,false)
         },
//离开时
         blurText(e){
           this.judgeText(e,true)
         },
//判断清除是否显示
         judgeText(event,boolean){
           let $className = event.currentTarget.className
           switch($className){
             case 'register-username':
               this.usernameClose = boolean
               break
             case 'register-password':
               this.passwordClose = boolean
               break
             case 'register-email':
               this.emailClose = boolean
               break
             case 'register-phone':
               this.phoneClose = boolean
               break
             case 'register-question':
               this.questionClose = boolean
               break
             case 'register-answer':
               this.answerClose = boolean
               break
           }
         },
//清除输入内容
         clearText(e){
           let $close = e.currentTarget.getAttribute('data-close')
           console.log($close)
           this[$close] = ''
         },
         registerNext(){
           if(!formValidate(this.username,'require') || !formValidate(this.password,'require')
             || !formValidate(this.email,'require') || !formValidate(this.phone,'require')){
             this.errMsg = '请将表格填写完整'
             return
           }
           if(!formValidate(this.email,'email')){
             this.errMsg = '邮箱格式不正确'
             return
           }
           if(!formValidate(this.phone,'phone')){
             this.errMsg = '手机号格式不正确'
             return
           }
           this.errMsg = ''
           this.securityShow = true
         },
         removeSpace(value){
           return removeSpace(value)
         },
         // 注册
         //注册
         registerSubmit(){
           if(!formValidate(this.question,'require') || !formValidate(this.answer,'require')){
             this.errMsg = '请填写密保问题和答案'
             return
           }
           let params = {
             username: this.username,
             password: this.password,
             email: this.email,
             phone: this.phone,
             question: this.question,
             answer: this.answer
           }
           userRegister(params).then(()=>{
             alert('注册成功')
             this.$router.push('./login')
           })
         },
         closeSecurity(){
           this.securityShow = false
         },
       }
    }
</script>
<style scoped lang="scss">
@import "../../common/style/mixin";
header {
  position: relative;
  width: 100%;
  height: 88px;
  text-align: center;
  line-height: 88px;
  padding: 0 20px;
  font-size: 34px;
  @include boxSizing;
  .iconfont {
    position: absolute;
    left: 20px;
    top: 0;
    font-size: 42px;
    font-weight: lighter;
  }
}
.register-page{
  margin-top: 60px;
  .register-wrap{
    width: 100%;
    .register-text{
      @include fj;
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding: 20px 0;
      margin-top: 20px;
      border-bottom: 1px solid #dcdcdc;
      .iconfont{
        font-size: 26px;
        color: #CCCCCC;
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
        font-size: 32px;
      }
      span{
        padding-left: 20px;
        font-size: 30px;
      }
      div{
        display: flex;
      }
    }
  }
  .register-error{
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 30px 0;
    color: $red;
    font-size: 26px;
  }
  .register-button{
    width: 100%;
    height: 100px;
    margin-top: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
    font-size: 32px;
    background: #ff5777;
    @include borderRadius(60px);
    &.active{
      background: rgb(246,53,21)
    }
  }
  .set-security{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    z-index: 100;
    background: #fff;
    @include boxSizing;
    p{
      font-size: 30px;
      color: #999;
      padding-top: 30px;
    }
    .set-security-head{
      position: relative;
      width: 100%;
      height: 88px;
      text-align: center;
      line-height: 88px;
      font-size: 34px;
      @include boxSizing;
      .iconfont {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 50px;
        font-weight: bold;
      }
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
