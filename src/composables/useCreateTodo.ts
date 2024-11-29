import { useMutation } from "@tanstack/vue-query";
import useTodoService from "../services/todoService";
import type { CreateTodo } from "@/types/todoItem";

const useCreateTodo = () => {
  const todoService = useTodoService();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: todoService.create,
  });

  return {
    isLoading: isPending,
    submit: async (values: CreateTodo) => mutateAsync(values),
  };
};

export default useCreateTodo;
