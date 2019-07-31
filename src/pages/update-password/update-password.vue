<template>
  <div class="update-password">
    <header class="user-head">
      <i class="iconfont icon-back" @click="goBack"></i>
      <span>修改登录密码</span>
      <i class="iconfont icon-more"></i>
    </header>
<!--    修改个人密码中间-->
    <section class="update-form">
      <div class="password-item">
        <span>输入旧密码</span>
        <div class="password-text">
          <i class="iconfont icon-suoding"></i>
          <input @mouseenter="focusText"
                 @mouseleave="blurText" type="password" placeholder="请输入旧密码" class="old-password" v-model="oldPassword" />
          <div>
            <i class="iconfont icon-close" v-show="oldClose" data-close="oldPassword" @click="clearText"></i>
          </div>
        </div>
      </div>
      <div class="password-item">
        <span>设置新的登录密码</span>
        <div class="password-text">
          <i class="iconfont icon-suoding"></i>
          <input @mouseenter="focusText"
                 @mouseleave="blurText" type="password" ref="passwordText" placeholder="6-20位数字 / 字母 / 字符组合" class="new-password" v-model="newPassword" />
          <div>
            <i class="iconfont icon-close" v-show="newClose" data-close="newPassword" @click="clearText"></i>
            <i class="iconfont icon-eye1 eye" @click="changeType" v-if="!passwordType"></i>
            <i class="iconfont icon-eye eye" @click="changeType" v-else></i>
          </div>
        </div>
      </div>
      <p class="err-msg">{{errMsg}}</p>
      <button class="password-submit" :class="{'active' : removeSpace(oldPassword)&&removeSpace(newPassword)}" @click="submitPassword">确认</button>
    </section>
  </div>
</template>
<script>
  import {removeSpace} from "../../common/js/util";
  import {updatePassword,logout} from "../../service/getData";
  export default {
        name: "update-password",
    data(){
          return{
            oldPassword: '',
            newPassword: '',
            oldClose: false,
            newClose: false,
            errMsg: '',
            passwordType: 0,
            messageText: '',
            isMessage: false
          }
    },
      methods:{
          goBack(){
            this.$router.go(-1)
          },
        focusText(e){
          let $className = e.currentTarget.className
          $className === 'old-password' ? this.oldClose = true : this.newClose = true
        },
        blurText(e){
          let $className = e.currentTarget.className
          $className === 'old-password' ? this.oldClose = false : this.newClose = false
        },
        clearText(e){
          let $close = e.currentTarget.getAttribute('data-close')
          this[$close] = ''
        },
        changeType(){
          let $type = this.$refs.passwordText.getAttribute('type'),
            value = ''
          $type === 'password' ? value = 'text' : value = 'password'
          this.$refs.passwordText.setAttribute('type',value)
          this.passwordType = !this.passwordType
        },
        removeSpace(value){
          return removeSpace(value)
        },
        //确认修改
        submitPassword(){
          let params = {
            username: '',

          }
          if(!removeSpace(this.oldPassword) || !removeSpace(this.newPassword)){
            return
          }
          if(!/^[a-zA-Z0-9\x21-\x7e]{6,20}$/.test(this.newPassword)){
            this.errMsg = '密码格式不对'
            return
          }
          this.errMsg = ''
          updatePassword(this.oldPassword,this.newPassword).then((res)=>{
            this.showMessage()
            setTimeout(()=>{
              logout().then(()=>{
                this.$router.push('./user')
              })
            },1300)
          })
        },
//显示信息
        showMessage() {
          this.isMessage = true
          this.messageText = '更新密码成功！'
          setTimeout(() => {
            this.isMessage = false
          }, 1200)
        },
      }
    }
</script>
<style scoped lang="scss">
  @import '../../common/style/mixin';
  .update-password {
    background: #F5F5F5;

    .user-head {
      @include fj;
      width: 100%;
      height: 88px;
      padding: 0 20px;
      line-height: 88px;
      font-size: 30px;
      @include boxSizing;
      background: #fff;

      .iconfont {
        font-size: 44px;
      }
    }
    .update-form{
      width: 100%;
      @include boxSizing;
      .password-item{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
        span{
          padding-bottom: 20px;
          font-size: .4rem;
          margin-left:  0.266667rem;
        }
        .password-text{
          //@include fj;
          width: 96%;
          position: relative;
          height: 80px;
          padding: 30px 10px;
          background: #fff;
          i.iconfont{
            position: absolute;
            font-size: 0.6rem;
            top: 36px;
            left: 20px;
          }
          input{
            width: 80%;
            height: 80px;
            line-height: 80px;
            color: #333;
            //margin: -10px 20px;
            margin-top: -10px;
            margin-left: 60px;
            //margin-left: -2.733333rem;
            background: #eee;
            border-radius: 20px;
          }
          div{
            line-height: 40px;
            .iconfont{
              font-size: 26px;
              &.icon-close{
                padding-top: 6px;
              }
              &.eye{
                padding: 0 30px;
                font-size: 40px;
              }
            }
          }
        }
      }
      .err-msg{
        height: 40px;
        line-height: 40px;
        padding-top: 20px;
        font-size: 28px;
        text-align: center;
        color: red;
      }
      .password-submit{
        width: 80%;
        height: 1.333333rem;
        text-align: center;
        line-height: 1.333333rem;
        color: #fff;
        font-size: 0.426667rem;
        background: #ff5777;
        border-radius: 0.8rem;
        margin-top: 1rem;
        margin-left: 0.90rem;

        &.active{
          background: rgb(246,53,21)
        }
      }
    }
  }
</style>
