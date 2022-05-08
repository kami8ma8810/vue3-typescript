<script setup lang="ts">
import { Person } from './Persons.vue';

type Props = {
  persons: Person[];
};
// 親からpropsを受け取る
defineProps<Props>();

// 親へイベントを送る
const emit = defineEmits(['delete']);
const onClickDelete = (id: number, name: string) => {
  // 確認のアラートを押して許可されれば実行する
  if (confirm(`delete ${name} ?`)) {
    emit('delete', id); //deleteという名前でidを送る
  }
};
</script>

<template>
  <li v-for="person in persons" :key="person.id" class="person-list">
    <span>{{ person.name }}</span>
    <span>Age:{{ person.age }}</span>
    <button @click="onClickDelete(person.id, person.name)">
      <span>Delete</span>
    </button>
  </li>
</template>
<style scoped>
.person-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  list-style: none;
  margin-bottom: 1em;
  font-size: 20px;
  border-radius: 8px;
  background-color: lightgrey;
  padding: 1em 2em;
  font-weight: bold;
}
button {
  padding: 8px 16px;
  border-radius: 99999px;
  border: none;
  background-color: firebrick;
  font-size: 20px;
  color: #fff;
  margin-left: 1em;
}
button:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
