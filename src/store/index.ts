import Vue from 'vue'
import Vuex from 'vuex'
import AnimationStoreAuth from '@/store/modules/AnimationStoreAuth'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AnimationStoreAuth
  }
});

export default store
