import {
  ADD_HISTORY,
} from "./mutation-type";
import {setStore,dedupeObject} from "../common/js/util";

export default {
  //搜索历史
  [ADD_HISTORY](state,searchHistory){
    state.searchHistory = searchHistory
    setStore('searchHistory',searchHistory)
  },
}
