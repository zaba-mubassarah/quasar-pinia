import { defineStore } from 'pinia'

export const useSumStore = defineStore({
  id: 'sum',
  state: () => ({
    value1: 5,
    value2: 6,
  }),
  getters: {
    sum1() {
      return this.value1 + this.value2
    }
  },
})
