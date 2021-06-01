import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    list:[]
  },
  mutations:{
    listInit(state,da){
      state.list=da
    }
  },
  actions: {},
  modules: {},
});
