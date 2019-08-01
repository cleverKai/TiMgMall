import {
  ADD_HISTORY,
  RECORD_SHIPPINGID,
  ADD_FOLLOW,
  REDUCE_FOLLOW
} from "./mutation-type";
import {setStore,dedupeObject} from "../common/js/util";

export default {
  [RECORD_SHIPPINGID](state,shippingId){
    state.shippingId = shippingId
  },
  //搜索历史
  [ADD_HISTORY](state,searchHistory){
    state.searchHistory = searchHistory
    setStore('searchHistory',searchHistory)
  },
  //关注列表
  [ADD_FOLLOW](state,followList){
    state.follow = dedupeObject(followList)
},
  [REDUCE_FOLLOW](state,productId){
    let result = []
    state.follow.forEach((item)=>{
      if (item.id === productId) {
        return
      }
      result.push(item)
    })
    state.follow = result
  }
}
