<script setup lang="ts">
import { inject } from 'vue';
import { todoKey } from '../useTodo';

// injectを使って'todos'という名前で受け取る
// const todos = inject('todos');
// const _addTodo = inject('addTodo');
// ↓まとめてinjectする場合

// todoKeyをinjectして、undefinedではないものだけを定義する
const state = inject(todoKey);
if (!state) {
  // undefinedだったらエラーを投げる
  throw new Error('state is undefined!');
}
const { todos, addTodo } = state;
</script>

<template>
  <div>
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in todos"
      >
        {{ todo.title }}
      </li>
    </ul>
    <button @click="addTodo('add!')">Add</button>
  </div>
</template>

<style scoped></style>
