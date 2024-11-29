import { useMutation } from "@tanstack/vue-query";
import useTodoService from "../services/todoService";
import {
  type UpdateTodoResult,
  type TodoError,
  type UpdateTodo,
} from "@/types/todoItem";

const useUpdateTodo = () => {
  const todoService = useTodoService();

  const { mutateAsync, isPending } = useMutation<
    UpdateTodoResult,
    TodoError,
    { id: string; values: UpdateTodo }
  >({
    mutationFn: ({ id, values }) => todoService.update(id, values),
  });

  return {
    isLoading: isPending,
    submit: async (id: string, values: UpdateTodo) =>
      mutateAsync({ id, values }),
  };
};

export default useUpdateTodo;
