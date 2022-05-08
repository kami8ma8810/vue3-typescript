<script setup lang="ts">
import { ref, Ref } from 'vue';
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';

// このコンポーネント独自の定義
export type Person = {
  id: number;
  name: string;
  age: number;
};

const persons: Ref<Person[]> = ref([
  { id: 0, name: 'John', age: 22 },
  { id: 1, name: 'Smith', age: 28 },
]);

// 子コンポーネントからのイベントを受け取る
const registerPerson = (person: Person) => {
  persons.value.push(person);
};

// deleteボタンの挙動
const deletePerson = (id: number) => {
  // 選択したidと一致したものを配列から削除
  persons.value = persons.value.filter((p) => p.id !== id);
};
</script>
<template>
  <div class="container">
    <h1>Persons Register App</h1>
    <!-- PersonPostFormで変更があったらtemplateを更新するように登録 -->
    <PersonPostForm @register="registerPerson" />
    <div class="list-container">
      <ul>
        <PersonList :persons="persons" @delete="deletePerson" />
      </ul>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
