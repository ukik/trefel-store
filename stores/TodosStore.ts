import { useFetch } from 'nuxt/app';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
    state: () => ({
        todos: [],
    }),
    actions: {
        async fetchTodos() {
            const { data }: any = await useFetch('https://jsonplaceholder.typicode.com/todos');
            // console.log(data)
            if (data.value) {
                this.todos = data.value;
            }
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot));
}
