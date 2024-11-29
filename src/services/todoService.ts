import type {
  CreateTodo,
  CreateTodoResult,
  FindAllTodoResult,
  FindOneTodoResult,
  UpdateTodo,
  UpdateTodoResult,
} from "@/types/todoItem";
import { compose } from "@/utils/compose";
import type { AxiosInstance } from "axios";

interface TodoService {
  finOne(id: string): Promise<FindOneTodoResult>;
  finAll(): Promise<FindAllTodoResult>;
  create(data: CreateTodo): Promise<CreateTodoResult>;
  update(id: string, data: UpdateTodo): Promise<UpdateTodoResult>;
  delete(id: string): Promise<void>;
}

const todoService = (http: AxiosInstance): TodoService => ({
  finOne(id) {
    return http.get(`/api/todos/${id}`).then((res) => res.data);
  },
  finAll() {
    return http.get("/api/todos").then((res) => res.data);
  },
  create(data) {
    return http.post("/api/todos", data).then((res) => res.data);
  },
  update(id, data) {
    return http.put(`/api/todos/${id}`, data).then((res) => res.data);
  },
  delete(id) {
    return http.delete(`/api/todos/${id}`).then((res) => res.data);
  },
});

export default compose(todoService)("http");
