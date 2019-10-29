import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as YouTube from 'youtube-node'
const charactersJSON = require('../assets/json/frame.json')
const BaseURL = 'https://ggxrdrev2-frametable.firebaseapp.com/json/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: charactersJSON,
    id: '',
    fullname: '',
    error: '',
    trick: [],
    video: '',
    youtube_id: '',
    youtube_title: ''
  },
  mutations: {
    setTrick (state, data) {
      state.id = data.id
      state.trick = data.trick
      state.fullname = data.fullname
      state.video = data.video
      state.error = ''
    },
    setErr (state, data) {
      state.id = ''
      state.trick = []
      state.fullname = ''
      state.video = ''
      state.error = 'ごめんなさい...！まだデータ作れてません...'
    },
    setVideos (state, dataOBJ) {
      state.youtube_id = dataOBJ.id
      state.youtube_title = dataOBJ.title
    },
    setErrVideo (state) {
      state.youtube_id = ''
      state.youtube_title = ''
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
    },
    setVideo ({ commit, state }, value) {
      if (value.video !== '') {
        const youTube = new YouTube()
        youTube.setKey('AIzaSyDlWy2NfJ2Y2giQhAnO7ZjlkzWaLDMXatI')
        const searchVideos = (keyword) => {
          youTube.getById(keyword.video, (err, result) => {
            if (err) return false
            commit('setVideos', {id: result.items[0].id, title: result.items[0].snippet.title})
          })
        }
        searchVideos(value)
      } else {
        commit('setErrVideo')
      }
    }
  },
  getters: {
    getCharacters (state) {
      return state.characters
    },
    getNames (state) {
      return state.fullname
    },
    getIds (state) {
      return state.id
    },
    getVideos (state) {
      return state.video
    },
    getYoutubeId (state) {
      return state.youtube_id
    },
    getYoutubeTitle (state) {
      return state.youtube_title
    }
  }
})
