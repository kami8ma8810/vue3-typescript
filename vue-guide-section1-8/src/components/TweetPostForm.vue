<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const inputtingDescription = ref<string>(''); //初期値は空文字として、動的な値を設定

//親コンポーネントへ「post-tweet」という名前（引数はinputtingDescription.value）でイベントを伝播させる
const emit = defineEmits(['post-tweet']);
const postTweet = () => {
  emit('post-tweet', inputtingDescription.value);
};
</script>
<template>
  <div class="form-container">
    <input class="input" v-model="inputtingDescription" />
    <button class="save-button" @click="postTweet">Post</button>
  </div>
</template>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}
.input {
  padding: 8px;
  border-radius: 4px;
  font-size: 24px;
  outline: none;
  border: 1px solid #999;
  margin-bottom: 1em;
}
.save-button {
  background-color: darkcyan;
  color: #fff;
  padding: 0.5em 2em;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  letter-spacing: 0.05em;
  transition: opacity 0.1s ease-out;
}
.save-button:hover {
  cursor: pointer;
  opacity: 0.5;
}
</style>
