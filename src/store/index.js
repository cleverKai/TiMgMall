import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getter'
Vue.use(Vuex);
const state = {
  inLogin:0,
  searchHistory:[],
  shippingId:0
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
// methods:{
//   ...mapMutations([
//     'ADD_HISTORY'
//   ]),
//     goBack(){
//     this.$router.go(-1)
//   },
//   getSelectTags(){
//     hotData().then((res)=>{
//       this.hotData = res.data
//     })
//   },
//   getSearch(){
//
//   }


