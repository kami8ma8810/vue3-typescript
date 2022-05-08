<script setup lang="ts">
import { ref } from 'vue';
import TweetPostForm from './TweetPostForm.vue';
import TweetList from './TweetList.vue';
const tweets = ref([
  { id: 0, description: 'hogehoge' },
  { id: 1, description: 'fugafuga' },
  { id: 2, description: 'piyopiyo' },
]);
const postTweet = (description: string) => {
  const tweet = { id: Math.random(), description: description };
  tweets.value.push(tweet);
};
const deleteTweet = (id: number) => {
  tweets.value = tweets.value.filter((t) => t.id !== id); //引数のidと一致したもの以外をtweetsに入れる（削除ボタンを押されたものを削除する）
};
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <TweetPostForm @post-tweet="postTweet" />
    <div class="tweet-container">
      <p v-if="tweets.length <= 0">No tweets have been added</p>
      <ul v-else>
        <TweetList :tweets="tweets" @delete-tweet="deleteTweet" />
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
