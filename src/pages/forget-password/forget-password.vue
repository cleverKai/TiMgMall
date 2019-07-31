<template>
<!--  头部-->
  <div>
  <header class="wrap">
    <i class="iconfont icon-back" @click="goBack"></i>
    <span>忘记密码？</span>
  </header>
<!--  中间部分-->
  <section class="page">
    <div class="forget-content slide-username" v-show="usernameShow">
      <input type="text" placeholder="请输入用户名" v-model="username" />
      <button @click="usernameNext" :class="{'active' : removeSpace(username)}">下一步</button>
    </div>
    <div class="forget-content slide-question" v-show="answerShow">
      <p>密码提示问题是：<span>{{questionText}}</span>
      </p>
      <div>
        <span>请输入答案:</span>
        <input type="text" placeholder="请输入密码提示问题答案" v-model="answer" />
      </div>
      <button @click="answerNext" :class="{'active' : removeSpace(answer)}">下 一 步</button>
    </div>
    <div class="forget-content slide-password" v-show="passwordShow">
      <div>
        <input type="password" placeholder="请重置密码" v-model="password" />
      </div>
      <button @click="passwordSubmit" :class="{'active' : removeSpace(password)}">提 交</button>
    </div>
  </section>
</div>
</template>
<script>
  import {getQuestion,submitAnswer,forgetResetPassword} from "../../service/getData";
  import {removeSpace,formValidate} from "../../common/js/util";
  export default {
        name: "forget-password",
        data(){
          return{
            username: '',
            answer: '',
            password: '',
            questionText: '',
            forgetToken: '',
            usernameShow: true,
            answerShow: false,
            passwordShow: false
          }
        },
    methods:{
      usernameNext(){
        if(!formValidate(this.username,'require')){
          return
        }
        getQuestion(this.username).then((res)=>{
          this.usernameShow = false
          this.answerShow = true
          this.questionText = res.data
        })
      },
      goBack(){
        this.$router.go(-1)
      },
      answerNext(){
        if(!formValidate(this.answer,'require')){
          return
        }
        let params = {
          username: this.username,
          question: this.questionText,
          answer: this.answer
        }
        submitAnswer(params).then((res)=>{
          this.forgetToken = res.data
          this.usernameShow = false
          this.answerShow = false
          this.passwordShow = true
        })
      },
      passwordSubmit(){
        if(!formValidate(this.password,'require')){
          return
        }
        let params = {
          username: this.username,
          passwordNew: this.password,
          forgetToken: this.forgetToken
        }
        forgetResetPassword(params).then(()=>{
          alert('重置密码成功')
          this.$router.push('./login')
        })
      },
      removeSpace(value){
        return removeSpace(value)
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '../../common/style/mixin';
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

    .forget-content {
      width: 100%;
      margin-top: 100px;
      &.slide-question {
        div {
          display: flex;
          flex-direction: column;

          span {
            padding: 10px 0 20px 0;
          }
        }
      }

      p {
        padding-bottom: 20px;
        color: #000;
      }

      input {
        width: 100%;
        padding: 10px 0;
        margin-right: 20px;
        color: #222;
        height: 0.6rem;
        border-radius: 50px;
        text-indent: 20px;
        border: 1px solid #dcdcdc;
      }

      button {
        /*height: 80px;*/
        /*text-align: center;*/
        /*color: #fff;*/
        /*font-size: 32px;*/
        /*background: rgba(246, 53, 21, .5);*/
        width: 80%;
        height: 1.333333rem;
        text-align: center;
        line-height: 1.333333rem;
        color: #fff;
        font-size: 0.426667rem;
        background: #ff5777;
        border-radius: 0.8rem;
        margin-top: 1rem;
        margin-left: 0.933333rem;

        &.active {
          background: rgb(246, 53, 21)
        }
      }
  }
</style>
