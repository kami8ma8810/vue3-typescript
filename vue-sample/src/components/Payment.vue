<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  watch,
  toRefs,
  onMounted,
  onBeforeMount,
  onUpdated,
} from 'vue';
const itemName1 = ref<string>('🍛');
const itemName2 = '🍜';

const item1 = reactive({
  name: '🍛',
  price: 800,
});

const url1 =
  'https://500px.com/photo/123293205/Leitisvatn-Cliffs-by-Eirik-S%C3%B8rstr%C3%B8mmen/';

const alertBuyMessage = (itemName: string) => {
  alert(`Are you sure to buy ${itemName}?`);
};

const inputName = (e: any) => {
  console.log(e.target.value);
  item1.name = e.target.value;
};
const inputPrice = (e: any) => {
  console.log(e.target.value);
  item1.price = e.target.value;
};
const clearValue = () => {
  item1.name = '';
  item1.price = 0;
};

const budget = 2000;

const priceLabel = computed(() => {
  // if (item1.price > budget) {
  //   return 'too expensive!';
  // } else {
  //   return item1.price;
  // }
  return item1.price > budget ? 'too expensive!' : `${item1.price} yen`;
});

onBeforeMount(() => {
  console.log('before mount!');
});
onMounted(() => {
  console.log('mounted!');
});
onUpdated(() => {
  console.log('updated!');
});
</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>
    <input v-model="item1.name" />
    <input v-model="item1.price" />
    <!-- ↑一般的にはこちらで書く -->
    <!-- <input
      v-on:input="inputName"
      v-bind:value="item1.name"
      type="text"
      placeholder="enter item name"
    /> -->
    <!-- <input
      v-on:input="inputPrice"
      v-bind:value="item1.price"
      type="text"
      placeholder="enter price"
    /> -->
    <button v-on:click="clearValue">Clear</button>
    <div class="payment">
      <label>{{ item1.name }}</label>
      <label>{{ priceLabel }}</label>
      <a v-bind:href="url1">bought at...</a>
      <button v-on:click="alertBuyMessage(itemName1)">BUY</button>
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>1000円</label>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 80px;
  background-color: lightcyan;
}
label {
  font-size: 24px;
  font-weight: bold;
}
input {
  margin-bottom: 1em;
}
</style>
