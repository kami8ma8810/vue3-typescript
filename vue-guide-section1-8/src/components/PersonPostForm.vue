<script setup lang="ts">
import { computed, ref } from 'vue';
const inputtingName = ref<string>('');
const inputtingAge = ref<number>(0);

const emit = defineEmits(['register']);

const register = () => {
  // console.log('register click!');
  const person = {
    id: Math.random(),
    name: inputtingName,
    age: inputtingAge.value,
  };
  emit('register', person); //registerという名前でpersonを親に渡す
};

// 名前の文字数を検知する関数
const maxNameLength = 15;
const isValidName = computed(() => {
  if (inputtingName.value.length >= maxNameLength) {
    return false;
  } else {
    return true;
  }
});

const warningColor = computed(() => {
  return isValidName.value ? 'white' : 'tomato';
});
</script>
<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input-column">
        <span>Name:</span>
        <input
          v-model="inputtingName"
          class="input-name"
          placeholder="Enter Name"
          type="text"
        />
      </div>
      <p v-if="!isValidName" class="warning-message">
        Oops! {{ maxNameLength }} characters or less, please.
      </p>
      <div class="input-column">
        <span>Age:</span>
        <input
          v-model="inputtingAge"
          class="input"
          placeholder="Enter Age"
          type="number"
        />
      </div>
    </div>
    <button :disabled="!isValidName" @click="register" class="register-button">
      Register
    </button>
  </div>
</template>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: bisque;
  padding: 24px 0;
  width: 50%;
  margin-bottom: 24px;
  border-radius: 8px;
}
span {
  display: inline-block;
  font-weight: bold;
  width: 5em;
  font-size: 22px;
}
.input-column + .input-column {
  margin-top: 1em;
}
.input-name {
  background-color: v-bind(warningColor);
}
input {
  width: 150px;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.register-button {
  padding: 8px 16px;
  border-radius: 99999px;
  border: none;
  background-color: darkcyan;
  font-size: 20px;
  color: #fff;
}
.register-button:disabled {
  opacity: 0.2;
}
.register-button:disabled:hover {
  opacity: 0.2;
  cursor: not-allowed;
}
.register-button:hover {
  cursor: pointer;
  opacity: 0.8;
}
.warning-message {
  font-weight: bold;
  font-size: 20px;
  color: tomato;
}
</style>
