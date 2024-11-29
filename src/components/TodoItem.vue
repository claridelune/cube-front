<script lang="ts" setup>
import useUpdateTodo from '@/composables/useUpdateTodo';
import useDeleteTodo from '@/composables/useDeleteTodo';
import type { TodoItem } from '@/types/todoItem';
import useTodos from '@/composables/useTodos';

defineProps<{
    todo: TodoItem
}>()

const editing = ref(false)

const { refetch } = useTodos()
const { submit: submitUpdateTodo, isLoading: isLoadingUpdate } = useUpdateTodo()
const { submit: submitDeleteTodo, isLoading: isLoadingDelete } = useDeleteTodo()

const handleCheck = (todo: TodoItem) => {
    const { id, ...todoProps } = todo;

    if (todoProps.state === "COMPLETED") {
        todoProps.state = "PENDING"
    } else {
        todoProps.state = "COMPLETED"
    }

    submitUpdateTodo(id, { ...todoProps })
}

const handleEdit = () => {
    editing.value = true
}

const handleBlur = (todo: TodoItem, e: any) => {
    const { id, ...todoProps } = todo;
    editing.value = false
    todoProps.title = e.target.value
    submitUpdateTodo(id, todo)
}

const isCompleted = (state: string) => state === 'COMPLETED'

watch(isLoadingUpdate, (loading) => {
    if (!loading) {
        refetch()
    }
})

watch(isLoadingDelete, (loading) => {
    if (!loading) {
        refetch()
    }
})

</script>

<template>
    <li class="flex items-center justify-between">
        <label class="flex items-center">
            <div v-if="!editing" class="flex items-center cursor-pointer">
                <input type="checkbox" class="w-6 h-6 cursor-pointer" :checked="isCompleted(todo.state)"
                    @change="handleCheck(todo)">
                <div class="ml-[6px] flex flex-col">
                    <span :class="{ 'line-through text-gray-400': isCompleted(todo.state) }">
                        {{ todo.title }}
                    </span>
                    <span class="mt-[-6px] text-xs font-light"
                        :class="{ 'line-through text-gray-400': isCompleted(todo.state) }">{{ todo.description
                        }}</span>
                </div>
            </div>
            <input v-else type="text" :value="todo.title" @blur="handleBlur(todo, $event)"
                @keyup.enter="handleBlur(todo, $event)" />
        </label>
        <div class="flex">
            <div class="ml-[6px]">
                <button type="button" class="min-w-[60px] bg-red-500 text-white font-medium text-xs p-[3px] rounded-md"
                    @click="submitDeleteTodo(todo.id)">Delete</button>
            </div>
            <div class="ml-[6px]">
                <button type="button" class="min-w-[60px] bg-blue-500 text-white font-medium text-xs p-[3px] rounded-md"
                    @click="handleEdit">Edit</button>
            </div>
        </div>
    </li>
</template>