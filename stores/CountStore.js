// stores/CountStore.ts
// no need to import defineStore and acceptHMRUpdate
export const useCountStore = defineStore('CountStore', {
  id: 'CountStore',

  state: () => ({
    counter: 1
  }),

  getters: {
    valueWithName: state => `Value is ${state.counter}`
  },

  actions: {
    setNewValue(newValue) {
      this.counter += newValue
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
}