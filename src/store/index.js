import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
     fetchGIFs: async ({state, commit}, data) => {
      let params = new URLSearchParams({
        api_key: "aIVfauSPwK3NtPv8Mo6UKQOb3MHqHat3",
        q:data.query,
        limit: 10,
        offset: 0
      })
      let requestOptions = {
        method: 'GET',
      }
      return await fetch(`https://api.giphy.com/v1/gifs/search?${params}`, requestOptions)
    }
  }
})
