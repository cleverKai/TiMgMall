<template>
<!--  头部-->
  <div class="user-shopping">
    <div class="user-reset-header">
      <i class="iconfont icon-back" @click="goBack"></i>
      <span>收货地址</span>
    </div>
<!--    主题部分-->
    <ul class="user-shipping-list">
      <li class="user-shipping-item" v-for="(item,index) in shippingList">
        <div class="shipping-top">
          <div>
            <span class="name" v-text="item.receiverName"></span>
            <span class="phone" v-text="item.receiverMobile"></span>
          </div>
          <p class="shipping-address">{{ item.receiverProvince }}  {{ item.receiverCity }}<i class="iconfont icon-552cc1babd9aa"></i></p>
<<<<<<< HEAD
=======

>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
          <p class="shipping-address">{{ item.receiverAddress }} <i class="iconfont icon-552cc1babd9aa"></i></p>
        </div>
        <div class="shipping-bottom">
          <div class="user-shipping-default" >
            <i class="iconfont icon-duigou" ></i>
            <i class="iconfont icon-weibiaoti38"></i>
          </div>
          <div>
                    <span class="user-shipping-edit" @click="editShipping(item.id)">
                        <i class="iconfont icon-bianji" ></i>编辑
                    </span>
            <transition name="slide">
              <div class="edit-shipping" v-show="editShippingWrap">
                <div class="user-reset-header">
                  <i class="iconfont icon-left" @click="hideShippingWrap"></i>
                  <span>编辑地址</span>
                  <a @click="saveShipping($event)" class="edit-save">保存</a>
                </div>
                <div class="new-shipping-content">
                  <div class="new-shipping-item receiver">
                    <span class="shipping-title">收货人</span>
                    <input placeholder="请填写收货人" class="shipping-text" v-model="shipping.receiverName" />
                  </div>
                  <div class="new-shipping-item mobile">
                    <span class="shipping-title">联系电话</span>
                    <input placeholder="请填写联系电话" class="shipping-text" v-model="shipping.receiverMobile" />
                  </div>
                  <div class="new-shipping-item area">
                    <span class="shipping-title">所在地区</span>
                    <p class="shipping-text" @click="selectAddress">{{address}}</p>
                  </div>
                  <div class="new-shipping-item street">
                    <span class="shipping-title">邮编</span>
                    <input placeholder="请填写邮编" class="shipping-text" v-model="shipping.receiverZip" />
                  </div>
                  <div class="new-shipping-item detail">
                    <textarea placeholder="请填写详细地址，不少于5个字" v-model="receiverAddress"></textarea>
                  </div>
                </div>
              </div>
            </transition>

            <span class="user-shipping-delete">
                        <i class="iconfont icon-delete" @click="deleteShipping(item.id)"></i>删除
                    </span>
            <popup :popup-title="popupTitle"
                   :popup-show="popupShow"
                   @cancelPopup="cancelPopup"
                   @confirmPopup="confirmPopup"></popup>
          </div>
        </div>
      </li>
    </ul>
<!--    新增收货地址-->
    <transition name="slide">
      <div class="new-shipping" v-show="addShippingWrap">
        <div class="user-reset-header">
          <i class="iconfont icon-back" @click="hideShippingWrap"></i>
          <span>添加新地址</span>
          <a class="add-save" @click="saveShipping($event)">保存</a>
        </div>
        <div class="new-shipping-content">
          <div class="new-shipping-item receiver">
            <span class="shipping-title">收货人</span>
            <input placeholder="请填写收货人" class="shipping-text" v-model="shipping.receiverName" />
          </div>
          <div class="new-shipping-item mobile">
            <span class="shipping-title">联系电话</span>
            <input placeholder="请填写联系电话" class="shipping-text" v-model="shipping.receiverMobile" />
          </div>
          <div class="new-shipping-item area">
            <span class="shipping-title">所在地区</span>
            <p class="shipping-text" @click="selectAddress">{{ address }}</p>
            <div class="picker" v-if="pickerShow" @click="closePicker($event)">
              <div class="picker-wrapper">
                <div class="picker-head">
                  <span>所在区域</span>
                  <i class="iconfont icon-close" @click="closePicker($event)"></i>
                </div>
                <div class="address">
                  <span :class="{'active' : selectIndex === 0}" data-index="0" @click="changeTag($event)">{{provinceTitle}}</span>
                  <span :class="{'active' : selectIndex === 1}" data-index="1" @click="changeTag($event)">{{cityTitle}}</span>
                  <span :class="{'active' : selectIndex === 2}" data-index="2" @click="changeTag($event)">{{areaTitle}}</span>
                </div>
                <div class="picker-content">
                  <div class="picker-item" v-if="selectIndex === 0">
                    <list-scroll :scroll-data="areaData">
                      <div class="provinceList">
<<<<<<< HEAD
                        <span v-for="(item,index) in areaData" :class="{'active' : provinceIndex === index}" @click="selectProvince(index)" >
=======
                        <span v-for="(item,index) in areaData"
                              :class="{'active' : provinceIndex === index}"
                              @click="selectProvince(index)">
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
                            <i class="iconfont icon-right" v-if="provinceIndex === index"></i>
                            {{item.value}}
                        </span>
                      </div>
                    </list-scroll>
                  </div>
                  <div class="picker-item" v-if="selectIndex === 1">
                    <list-scroll :scroll-data="cityList">
                      <div class="cityList">
                        <span v-for="(item,index) in cityList"
                              :class="{'active' : cityIndex === index}"
<<<<<<< HEAD
                              @click="selectCity(index)" >
=======
                              @click="selectCity(index)">
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
                            <i class="iconfont icon-right" v-if="cityIndex === index"></i>
                            {{item.value}}
                        </span>
                      </div>
                    </list-scroll>
                  </div>
                  <div class="picker-item" v-if="selectIndex === 2">
                    <list-scroll :scroll-data="areaList">
                      <div class=" areaList">
                        <span v-for="(item,index) in areaList"
                              :class="{'active' : areaIndex === index}"
<<<<<<< HEAD
                              @click="selectArea(index)" >
=======
                              @click="selectArea(index)">
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
                            <i class="iconfont icon-right" v-if="areaIndex === index"></i>
                            {{item.value}}
                        </span>
                      </div>
                    </list-scroll>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="new-shipping-item street">
            <span class="shipping-title">邮编</span>
            <input placeholder="请填写邮编" class="shipping-text" v-model="shipping.receiverZip" />
          </div>
          <div class="new-shipping-item detail">
            <textarea placeholder="请填写详细地址，不少于5个字" v-model="receiverAddress"></textarea>
          </div>
        </div>
      </div>
    </transition>
    <p class="add-shipping" @click="addShipping">新增收货地址</p>
  </div>
</template>
<script>
  import areaData from './area'
  import {removeSpace} from "../../common/js/util";
  import listScroll from '../../components/list-scroll'
  import popup from '../../components/common/popup'
  import {formValidate} from "../../common/js/util";
  import {addressList,addAddress,updateAddress} from "../../service/getData";
  import {mapState,mapMutations} from 'vuex'
  export default {
        name: "shopping",
    computed:{
        ...mapState({
          shippingId: state => state.shippingId
        })
    },
    components:{
      listScroll,
      popup
    },
      data() {
        return {
          defaultIndex: 0,
          shippingList: [],
          shipping: {
            userId: '',
            id: '',
            receiverPhone: '',
            receiverName: '',
            receiverMobile: '',
            receiverProvince: '',
            receiverCity: '',
            receiverAddress: '',
            receiverZip: '',
          },
          addShippingWrap: false,
          receiverAddress: '',
          areaData: [],
          cityList: [],
          areaList: [],
          selectIndex: 0,   //地址标签索引
          provinceIndex: -1,  //省份索引
          cityIndex: -1,     //城市索引
          areaIndex: -1,     //区域索引
          defaultIndex: 0,
          address: '请选择所在区域',
          provinceTitle: '请选择',
          cityTitle: '请选择',
          areaTitle: '请选择',
          deleteShippingId: 0,
          addShippingWrap: false,
          editShippingWrap: false,
          popupTitle: '',
          popupShow: false,
          pickerShow: false,
          id:''
        }
      },
      methods:{
          goBack(){
            this.$router.go(-1)
          },
        ...mapMutations([
          'RECORD_SHIPPINGID'
        ]),
        async getShippingData(){
          let pageNum = 1,
            pageSize = 10
          await addressList(pageNum,pageSize).then((res)=>{
            if(res.data.list.length > 0){
              this.shipping.userId = res.data.list[0].userId
            }else{
              this.RECORD_SHIPPINGID(0)
            }
            this.shippingList = res.data.list
          })
          //shippingId为0   默认为第一个地址
          if(this.shippingList.length > 0){
            if(!this.shippingId && this.shippingList){
              this.RECORD_SHIPPINGID(this.shippingList[0].id)
            }
            if(!this.shippingList){  //没有收获地址 return
              return
            }
            this.shippingList.forEach((item,index)=>{
              if(item.id === this.shippingId){
                this.defaultIndex = index
              }
            })
          }
        },
        hideShippingWrap(){
          this.addShippingWrap = false
          this.editShippingWrap = false
        },
        //添加地址
        addShipping(){
          this.resetShipping()
          this.addShippingWrap = true
        },
        changeTag(e){
          let $index = parseInt(e.currentTarget.getAttribute('data-index'))
          this.selectIndex = $index
          this.areaData = areaData
        },
        selectAddress(){
          this.pickerShow = true
        },
        selectProvince(index){
          this.cityList = areaData[index].children
          this.provinceIndex = index
          this.selectIndex = 1
          this.provinceTitle = areaData[index].value
          this.cityTitle = '请选择'
          this.areaTitle = '请选择'
          this.areaList = []
        },
        selectCity(index){
          this.areaList = this.cityList[index].children
          this.cityIndex = index
          this.selectIndex = 2
          this.cityTitle = this.cityList[index].value
          this.areaTitle = '请选择'
        },
        selectArea(index){
          this.areaIndex = index
          this.areaTitle = this.areaList[index].value
          this.pickerShow = false
          this.address = `${this.provinceTitle} ${this.cityTitle} ${this.areaTitle}`
          this.shipping.receiverProvince = this.provinceTitle
          this.shipping.receiverCity = this.cityTitle
        },
        closePicker(e){
          let $className = e.target.className
          if($className == 'picker' || $className == 'iconfont icon-close'){
            this.pickerShow = false
          }
        },
        //添加新地址 or 更新地址
        saveShipping(e){
          console.log(e.currentTarget.className)
          console.log(this.receiverAddress)
          if(!this.shipping.receiverName || !this.shipping.receiverMobile || this.provinceIndex === -1
            || this.cityIndex === -1 || this.areaIndex === -1 || !this.shipping.receiverZip || !this.receiverAddress){
            alert('请将表格填写完整')
            return
          }
          if(!formValidate(this.shipping.receiverMobile,'phone')){
            alert('手机号格式不正确')
            return
          }
          let $className = e.currentTarget.className
          if($className === 'add-save'){
            this.shipping.receiverAddress = this.areaTitle + this.receiverAddress
            addAddress(this.shipping).then(()=>{})
            this.addShippingWrap = false
          }else{
            this.shipping.receiverAddress = this.receiverAddress
            updateAddress(this.shipping).then(()=>{})
            this.editShippingWrap = false
          }
          setTimeout(()=>{   //确保数据更新到服务端在请求地址列表
            this.getShippingData()
          },500)
        },
        resetShipping(){  //重置shipping参数
          this.shipping.receiverPhone = ''
          this.shipping.receiverName = ''
          this.shipping.receiverMobile = ''
          this.shipping.receiverProvince = ''
          this.shipping.receiverCity = ''
          this.shipping.receiverAddress = ''
          this.shipping.receiverZip = ''
          this.receiverAddress = ''
          this.cityList = []
          this.areaList = []
          this.selectIndex = 0
          this.provinceIndex = -1
          this.cityIndex = -1
          this.areaIndex = -1
          this.address = '请选择所在区域'
          this.provinceTitle = '请选择'
          this.provinceTitle = '请选择'
          this.cityTitle = '请选择'
          this.areaTitle =  '请选择'
        },
        removeSpace(value){
          return removeSpace(value)
        },
        //删除地址
        deleteShipping(id){
          ModalHelper.afterOpen()
          this.popupTitle = '确定删除改地址吗？'
          this.popupShow = true
          this.deleteShippingId = id
        },
        confirmPopup(){
          this.$http('/api/shipping/del.do',{
            shippingId: this.deleteShippingId
          },'POST').then(()=>{
            this.getShippingData()
          })
          if(this.deleteShippingId === this.shippingId){  //如果删除的是默认地址，第一个为默认地址
            addressList(1,10).then((res)=>{
              if(res.data.list.length > 0){
                this.RECORD_SHIPPINGID(res.data.list[0].id)
              }else{
                this.RECORD_SHIPPINGID(0)
              }
            })
          }
          this.cancelPopup()
        },
        cancelPopup(){
          ModalHelper.beforeClose()
          this.popupShow = false
        },
        //默认收获地址
        setDefault(index){
          this.defaultIndex = index
        },
//编辑地址
        async editShipping(id){
          this.resetShipping()
          this.shipping.id = id
          this.editShippingWrap = true
          await this.$http('/api/shipping/select.do',{
            shippingId: id
          },'POST').then((res)=>{
            this.shipping = res.data
            this.receiverAddress = this.shipping.receiverAddress
          })
          this.initPicker()
        },
        initPicker(){
          console.log(this.shipping.receiverProvince)
          console.log(this.shipping.receiverCity)
          areaData.forEach((item,index)=>{
            if(item.value === this.shipping.receiverProvince){
              this.provinceIndex = index
              this.provinceTitle = this.shipping.receiverProvince
              this.selectProvince(index)
            }
          })
          areaData[this.provinceIndex].children.forEach((item,index)=>{
            if(item.value === this.shipping.receiverCity){
              this.cityIndex = index
              this.cityTitle = this.shipping.receiverCity
              this.selectCity(index)
            }
          })
          this.areaIndex = 0
          this.areaTitle = areaData[this.provinceIndex].children[0].value
          this.selectArea(0)
          this.address = this.provinceTitle + this.cityTitle + this.areaTitle
        },
      },
    created() {
      this.getShippingData()
      this.areaData = areaData
      console.log(areaData)
    },
  }
</script>
<style scoped lang="scss">
  @import '../../common/style/mixin';
  .user-shopping {
    position: relative;
    background: #fff;
    .user-reset-header {
      position: relative;
      width: 100%;
      padding: 20px;
      text-align: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: pink;

      i {
        position: absolute;
        left: 20px;
        top: 20px;
      }
      span{
        font-size: 0.4rem;
      }
      .iconfont{
        font-size: 0.586667rem;
      }

      a {
        position: absolute;
        right: 40px;
      }
    }
    .user-shipping-list{
      width: 100%;
      padding-bottom: 120px;
      background: #fff;
      .user-shipping-item{
        width: 100%;
        background: #fff;
        margin-top: 20px;
        .shipping-top{
          padding-top: 20px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          border-bottom: 1px solid #eee;
          .shipping-address{
            margin-left:  0.266667rem;
            font-size: 0.4rem;
            margin-top: 20px;
            border-bottom: 1px solid #eee;
            .iconfont{
              float: right;
              margin-right: 0.8rem;
              font-size: 0.506667rem;
            }
          }
          div{
            @include fj;
            font-size: 0.4rem;
            .name{
              margin-left:  0.266667rem;
            }
            .phone{
              margin-right: 0.8rem;
            }
<<<<<<< HEAD
=======
            span:first-child{
            }
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
          }
          p{
            padding: 20px 0;
            &:last-child{
              padding: 0 0 20px 0;
            }
          }
        }
        .shipping-bottom{
          margin-top: 40px;
          @include fj;
          width: 100%;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          .iconfont{
            padding: 0 10px;
          }
          .user-shipping-default{
            color: #000;
            .iconfont{
              font-size: .6rem;
              color: $red;
            }
            &.active{
              color: $red;
            }
            div.iconfont{
              padding: 4px 10px 0 0;
              font-size: 20px;
              /*&.icon-weibiaoti38{*/
              /*  color: #333;*/
              /*}*/
              //&.icon-duigou {
               // color: $red;
             // }
            }

          }
          div{
            margin-right: 30px;
            .iconfont{
              font-size: .6rem;
            }
            span{
              font-size: .4rem;
            }
            .edit-shipping{
              position: fixed;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: #eee;
              z-index: 1000;
              .new-shipping-content{
                width: 100%;
                background: #fff;
                .new-shipping-item{
                  @include fj;
                  width: 100%;
                  height: 90px;
                  padding: 0 20px;
                  line-height: 90px;
                  font-size: 30px;
                  @include border-1px(#e8e8e8);
                  box-sizing: border-box;
                  &.detail{
                    padding: 30px 0;
                    box-sizing: content-box;
                    @include border-1px(#fff);
                    textarea{
                      width: 100%;
                      padding: 0 20px;
                      font-size: 30px;
                      -webkit-box-sizing: border-box;
                      -moz-box-sizing: border-box;
                      box-sizing: border-box;
                    }
                  }
                  .shipping-text{
                    width: 70%;
                    font-size: 30px;
                  }
                  .shipping-title{
                    flex: 1;
                  }
                  .shipping-content{
                    flex: 4;
                    height: 100%;
                    font-size: 30px;
                  }
                  i{
                    font-size: 32px;
                    color: #666;
                  }
                }
              }
            }
          }
        }
        .user-shipping-gap{
          width: 100%;
          height: 20px;
          background: #eee;
        }
      }
    }
    .new-shipping{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #eee;
      z-index: 1000;
      .new-shipping-content{
        width: 100%;
        background: #fff;
        .new-shipping-item{
          @include fj;
          width: 100%;
          height: 90px;
          line-height: 90px;
          @include border-1px(#e8e8e8);
          box-sizing: border-box;
<<<<<<< HEAD
          margin-left: 0.266667rem;
          span{
            font-size: 0.4rem;
          }
=======
>>>>>>> aa3c9ba6a7d55a6c9b32bd97800443374dd50cec
          &.detail{
            padding: 30px 0;
            box-sizing: content-box;
            @include border-1px(#fff);
            textarea{
              width: 100%;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
            }
          }
          .shipping-text{
            width: 70%;
          }
          .shipping-title{
            flex: 1;
          }
          .shipping-content{
            flex: 4;
            height: 100%;
          }
          i{
            color: #666;
          }
          .picker{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.5);
            z-index: 10000;
            .picker-wrapper{
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 800px;
              background: #fff;
              .picker-head{
                position: relative;
                width: 100%;
                height: 100px;
                text-align: center;
                line-height: 100px;
                font-size: 34px;
                .iconfont{
                  position: absolute;
                  right: 40px;
                  top: 0;
                  font-size: 38px;
                }
              }
              .address{
                display: flex;
                width: 100%;
                border-bottom: 1px solid #999;
                span{
                  width: 20%;
                  height: 100px;
                  margin: 0 5%;
                  text-align: center;
                  line-height: 100px;
                  font-size: 30px;
                  &.active{
                    color: $red;
                    border-bottom: 1px solid $red;
                  }
                }
              }
              .picker-content{
                display: flex;
                width: 100%;
                .picker-item{
                  display: flex;
                  flex-direction: column;
                  flex-wrap: wrap;
                  width: 50%;
                  height: 600px;
                  overflow: hidden;
                  /*oveflow-y: scroll;*/
                  span{
                    position: relative;
                    display: block;
                    width: 100%;
                    height: 100px;
                    padding-left: 70px;
                    text-align: left;
                    line-height: 100px;
                    font-size: 30px;
                    @include boxSizing;
                    &.active{
                      color: $red;
                    }
                    .iconfont{
                      position: absolute;
                      left: 30px;
                      color: $red;
                      font-size: 30px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .slide-enter-active,.slide-leave-active{
      transition: all 0.5s;
    }
    .slide-enter,.slide-leave-to{
      transform: translate3d(100%,0,0);
    }
    .add-shipping{
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 100px;
      text-align: center;
      font-size: 0.4rem;
      line-height: 100px;
      background: pink;
    }
  }
</style>
