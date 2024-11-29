import { useMutation } from "@tanstack/vue-query";
import useTodoService from "../services/todoService";

const useDeleteTodo = () => {
  const todoService = useTodoService();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: todoService.delete,
  });

  return {
    isLoading: isPending,
    submit: async (id: string) => mutateAsync(id),
  };
};

export default useDeleteTodo;
