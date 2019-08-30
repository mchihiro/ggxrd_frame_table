import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const charactersJSON = require('../assets/json/frame.json')
const BaseURL = 'https://ggxrdrev2-frametable.firebaseapp.com/json/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: charactersJSON,
    id: '',
    fullname: '',
    error: '',
    trick: []
  },
  mutations: {
    setTrick (state, data) {
      state.trick = data.trick
      state.fullname = data.fullname
      state.error = ''
    },
    setErr (state, data) {
      state.trick = []
      state.fullname = ''
      state.error = 'ごめんなさい...！まだデータ作れてません...'
    }
  },
  actions: {
    setID ({ commit }, value) {
      axios.get(`${BaseURL}${value.id}.json`)
        .then(res => {
          res.data.length > 0 ? commit('setErr') : commit('setTrick', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    getCharacters (state) {
      return state.characters
    }
  }
})
