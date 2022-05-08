<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card.vue';
import Badge from './Badge.vue';
import MosaicReservation from './MosaicReservation.vue';
import ReservationList from './ReservationList.vue';

const isListVisible = ref<boolean>(true);
const isDialogOpen = ref<boolean>(true);

const onClickButton = () => {
  // isListVisible.value = !isListVisible.value;
  isDialogOpen.value = !isDialogOpen.value;
};

const getContent = () => {
  if (isListVisible.value) {
    return ReservationList;
  } else {
    return MosaicReservation;
  }
};
</script>
<template>
  <div class="container">
    <Card class="menu-card">
      <span class="menu-title">Badges</span>
      <div class="badges">
        <Badge class="vip-badge"><span>Vip</span></Badge>
        <Badge class="reservation-badge"><span>Normal</span></Badge>
      </div>
    </Card>
    <!-- 動的コンポーネントの使用 -->
    <component :is="getContent()" />

    <button @click="onClickButton" class="change-button">Change</button>
    <teleport to="body"
      ><dialog :open="isDialogOpen" class="dialog">Dialog</dialog></teleport
    >
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu-title {
  font-size: 32px;
  margin-bottom: 1em;
}
.menu-card {
  width: 300px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
}
.reservation-card {
  width: 400px;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.badges {
  display: flex;
  justify-content: space-between;
}
.reservation-badge {
  background-color: lightgreen;
}
.vip-badge {
  background-color: gold;
}
.change-button {
  padding: 0.5em 2em;
  font-size: 24px;
  border-radius: 8px;
}
.change-button:hover {
  cursor: pointer;
}
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  height: 200px;
  opacity: 0.5;
  pointer-events: none;
}
</style>
