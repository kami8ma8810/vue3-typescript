<script setup lang="ts">
import Badge from './Badge.vue';
import Card from './Card.vue';
</script>
<template>
  <div>
    <Card class="reservation-card">
      <span>John Wick</span>
      <div class="baddes">
        <Badge class="vip-badge"><span>Vip</span></Badge>
      </div>
    </Card>

    <Card class="reservation-card">
      <span>Paul Smith</span>
      <div class="baddes">
        <Badge class="reservation-badge"><span>Normal</span></Badge>
      </div>
    </Card>

    <Card class="reservation-card">
      <span>Taylor Swift</span>
      <div class="baddes">
        <Badge class="vip-badge"><span>Vip</span></Badge>
      </div>
    </Card>
  </div>
</template>
<style scoped>
.reservation-card {
  width: 400px;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.reservation-badge {
  background-color: lightgreen;
}
.vip-badge {
  background-color: gold;
}
</style>
