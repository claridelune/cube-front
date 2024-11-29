export interface TodoItem {
  id: string;
  state: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  title: string;
  description: string;
}

export type CreateTodo = Omit<TodoItem, "id">;

export type CreateTodoResult = TodoItem;

export type UpdateTodo = Omit<TodoItem, "id">;

export type UpdateTodoResult = TodoItem;

export type FindOneTodoResult = TodoItem;

export type FindAllTodoResult = TodoItem[];

export interface TodoError {}
