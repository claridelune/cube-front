import { useQuery } from "@tanstack/vue-query";
import useTodoService from "../services/todoService";

const useTodos = () => {
  const todoService = useTodoService();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: todoService.finAll,
  });

  return {
    todos: data,
    isLoading,
    refetch,
  };
};

export default useTodos;
