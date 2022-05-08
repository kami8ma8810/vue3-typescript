<script setup lang="ts">
import { ref, defineProps } from 'vue';

// 親コンポーネントから受け取る
type Tweet = {
  id: number;
  description: string;
};
type Props = {
  tweets: Tweet[];
};
defineProps<Props>();

// 親コンポーネントへ伝播
const emit = defineEmits(['delete-tweet']);
const deleteTweet = (id: number) => {
  emit('delete-tweet', id);
};
</script>

<template>
  <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
    <span>{{ tweet.description }}</span>
    <button @click="deleteTweet(tweet.id)" class="delete-button">Delete</button>
  </li>
</template>

<style scoped>
.delete-button {
  background-color: tomato;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.5em 1em;
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: 0.05em;
  transition: opacity 0.1s ease-out;
}
.delete-button:hover {
  opacity: 0.5;
}

.tweet-list {
  list-style: none;
  margin-bottom: 1em;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgrey;
  padding: 0.5em 2em;
  width: 300px;
}
</style>
