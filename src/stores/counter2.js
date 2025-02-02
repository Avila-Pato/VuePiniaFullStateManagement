import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter2', {
  state: () => ({
    count: 0,
  }),
  // propiedades computadas
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
