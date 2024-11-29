import useTodoStore from "@/stores/todoStore";

const useTodos = () => {
  const todoStore = useTodoStore();
  const { todos, total, doneTotal } = storeToRefs(todoStore);

  return { todos, total, doneTotal, todoStore };
};

export default useTodos;
