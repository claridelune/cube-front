<script lang="ts" setup>
import useTodos from '@/composables/useTodos';
import type { TodoItem } from '@/types/todoItem';

defineProps<{
    todo: TodoItem
}>()

const { todoStore } = useTodos()

const handleCheck = (todo: TodoItem) => {
    todo.done = !todo.done
    todoStore.updateTodo(todo)
}

const handleEdit = (todo: TodoItem) => {
    todo.editing = true
}

const handleBlur = (todo: TodoItem, e: any) => {
    todo.editing = false
    todo.title = e.target.value
    todoStore.updateTodo(todo)
}

const handleDelete = (id: string) => {
    todoStore.deleteTodo(id)
}
</script>

<template>
    <li class="flex items-center justify-between">
        <label class="flex items-center">
            <div v-if="!todo.editing" class="cursor-pointer">
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo)">
                <span class="ml-[6px]" :class="{ 'line-through': todo.done }">
                    {{ todo.title }}
                </span>
            </div>
            <input v-else class="todo-edit" type="text" :value="todo.title" @blur="handleBlur(todo, $event)"
                @keyup.enter="handleBlur(todo, $event)" />
        </label>
        <div class="flex">
            <div class="ml-[6px]">
                <button type="button" class="min-w-[60px] bg-red-500 text-white font-medium text-xs p-[3px] rounded-md"
                    @click="handleDelete(todo.id)">Delete</button>
            </div>
            <div class="ml-[6px]">
                <button type="button" class="min-w-[60px] bg-blue-500 text-white font-medium text-xs p-[3px] rounded-md"
                    @click="handleEdit(todo)">Edit</button>
            </div>
        </div>
    </li>
</template>