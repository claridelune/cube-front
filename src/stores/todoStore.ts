import type { TodoItem } from "@/types/todoItem";

interface TodoStore {
  todos: Array<TodoItem>;
}

const todoStore = defineStore("todo", {
  state: (): TodoStore => ({
    todos: [],
  }),
  getters: {
    total: (state) => state.todos.length,
    // doneTotal: (state) => state.todos.filter((todo) => todo.done).length,
  },
  actions: {
    addTodo(todo: TodoItem) {
      this.todos.unshift(todo);
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    updateTodo(todo: TodoItem) {
      return this.todos.map((item) => (item.id === todo.id ? todo : item));
    },
    checkAll(checked: boolean) {
    //   this.todos.forEach((todo) => {
    //     todo.done = checked;
    //   });
    },
    clearChecked() {
    //   this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
  persist: true,
});

export default todoStore;
