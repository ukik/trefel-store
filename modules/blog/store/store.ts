// modules/blog/store/stores.ts

import { defineStore } from 'pinia'

export const useBlogStore = defineStore({
    id: 'blog-store',

    state: () => ({
        value: 1,
        count: 0,
    }),

    getters: {
        valueWithName: state => `Value is ${state.value}`
    },

    actions: {
        setNewValue(newValue: number) {
            this.value = newValue
        },
        incValue() {
            this.count += 1
            console.log('incValue B', this.count)
        }
    }
})