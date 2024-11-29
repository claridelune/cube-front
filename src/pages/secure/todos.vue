<script setup lang="ts">
import useCreateTodo from '@/composables/useCreateTodo';
import todoSchema from '@/schemas/todoSchema';
import { useForm, Field, ErrorMessage } from 'vee-validate';
import useTodos from '@/composables/useTodos';

const { submit: submitCreateTodo, isLoading } = useCreateTodo()
const { refetch } = useTodos()

const { handleSubmit: onSubmit, isSubmitting, meta, resetForm } = useForm({
    initialValues: {
        title: '',
        description: ''
    },
    validationSchema: todoSchema,
    validateOnMount: false
})

const handleSubmit = onSubmit((values) => {
    submitCreateTodo({
        title: values.title,
        description: values.description,
        state: "PENDING",
    })

    resetForm()
})

watch(isLoading, (loading) => {
    if (!loading) {
        refetch()
    }
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
                            <label for="title" class="block text-xs font-medium text-gray-900">title</label>
                            <Field name="title" type="text" id="title" placeholder="Todo title"
                                class="px-[8px] py-[6px] block w-full rounded-sm border border-gray-300 placeholder-gray-400 focus:outline-none" />
                            <ErrorMessage name="title" class="mt-1 text-xs text-red-500" />
                        </div>
                        <div class="mt-[16px]">
                            <label for="description" class="block text-xs font-medium text-gray-900">description</label>
                            <Field name="description" type="text" id="description" placeholder="Todo description"
                                class="px-[8px] py-[6px] block w-full rounded-sm border border-gray-300 placeholder-gray-400 focus:outline-none" />
                            <ErrorMessage name="description" class="mt-1 text-xs text-red-500" />
                        </div>
                        <div class="mt-[20px]">
                            <button :disabled="isSubmitting || !meta.valid" type="submit"
                                class="w-full bg-orange-500 text-white font-medium text-base py-[6px] rounded-[6px] hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400">
                                Crear
                            </button>
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