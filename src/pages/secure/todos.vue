<script setup lang="ts">
import { nanoid } from 'nanoid'
import useTodos from '@/composables/useTodos';
import todoSchema from '@/schemas/todoSchema';
import { useForm, Field, ErrorMessage } from 'vee-validate';
// const runtimeConfig = useRuntimeConfig()

const { todoStore } = useTodos()

const { handleSubmit: onSubmit, isSubmitting, meta, errors, resetForm } = useForm({
    initialValues: {
        title: ''
    },
    validationSchema: todoSchema,
    validateOnMount: false
})

const handleSubmit = onSubmit((values) => {
    todoStore.addTodo({
        id: nanoid(),
        title: values.title,
        done: false,
        editing: false
    })

    resetForm()
})

definePageMeta({
    layout: 'secure'
})
</script>

<template>
    <div class="w-full max-w-[400px] flex flex-col items-center justify-center">
        <div class="w-full rounded-md border border-gray-300 bg-gray-100">
            <div class="grid grid-cols-1 divide-gray-300 divide-y">
                <div class="p-[10px]">
                    <form @submit.prevent="handleSubmit">
                        <div>
                            <Field name="title" type="text" id="title" placeholder="Todo name"
                                class="px-[8px] py-[6px] block w-full rounded-sm border border-gray-300 placeholder-gray-400 focus:outline-none" />
                            <ErrorMessage name="title" class="mt-1 text-xs text-red-500" />
                        </div>
                    </form>
                </div>
                <div class="p-[10px]">
                    <TodoList />
                </div>
            </div>
        </div>
    </div>
</template>