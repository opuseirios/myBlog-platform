import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";
import createLogger from "vuex/dist/logger";
import {userModule} from "@/store/module";

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'store_v'
})

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    showPageLoadScrollBar: false
  },
  mutations: {
    'SET_SHOW_PAGE_LOAD_SCROLL_BAR'(state,flag){
      state.showPageLoadScrollBar = flag
    }
  },
  actions: {
  },
  modules: {
    user: userModule
  },
  plugins: debug?[createLogger(),vuexLocal.plugin]:[vuexLocal.plugin]
})
