<script lang="ts" setup>
import useTasks from "@/composables/useTodos"

const { todos } = useTasks()
</script>

<template>
    <TodoItem v-for="item in todos" :key="item.id" :todo="item" />
</template>