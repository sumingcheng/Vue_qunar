import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default
  new Vuex.Store({
    state: {
      city: '浙江'
    },
    actions: {
      changeCityName: function (ctx, city) {
        ctx.commit('changeCityName', city)
      }
    },
    mutations: {
      changeCityName: function (state, city) {
        state.city = city;
      }
    }
  })

