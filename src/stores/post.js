import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [],
  }),
  // propiedades computadas
  getters: {
    //  double: (state) => state.count * 2,
  },
  actions: {
    async fetchPostData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      const data = await response.json()
      console.log(data)
    },
  },
})
