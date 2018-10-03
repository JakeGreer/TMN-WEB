import Vue from "vue";
import Vuex from "vuex";
import elegantNav from "modules/ElegantNav";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    elegantNav
  }
});
