import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    number: 100
  },
  mutations: {
    SET_NUMBER (state, value) {
      state.number = value
    }
  },
  actions: { // 异步
    setNumber ({ commit }, value) {
      commit('SET_NUMBER', value)
    }
  },
  modules: {
    a: {
      state: {
        aa: 11
      },
      mutations: {
        SET_AA (state, val) {
          state.aa = val
        }
      }
    },
    b: {
      state: {
        bb: 11
      },
      mutations: {
        SET_BB (state, val) {
          state.bb = val
        }
      }
    }
  },
  getters: {
    aaValue: (state) => {
      return state.a.aa
    }
  }
})
