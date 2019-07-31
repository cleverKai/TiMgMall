import {
  ADD_HISTORY,
  RECORD_SHIPPINGID,
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
}
