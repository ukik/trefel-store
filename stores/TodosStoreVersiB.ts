import { defineStore } from 'pinia';

export const useTodosStoreVersiB = defineStore('todos', () => {
    const todos = ref([]);

    const fetchTodos = async () => {
        const { data }: any = await useFetch('https://jsonplaceholder.typicode.com/todos');
        if (data.value) {
            todos.value = data.value;
        }
    };

    return {
        todos,
        fetchTodos,
    };
});


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTodosStoreVersiB, import.meta.hot));
}
