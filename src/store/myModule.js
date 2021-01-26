import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        count: 0,
    },
    mutations:{
        increment (state) {
            state.count++
          }
    },
    actions:{
        moduleActionClick (state) {
            state.commit('increment')
          }
    },
    getters:{
        moduleClicks(state){
            return state.count;
        }
    }
})
