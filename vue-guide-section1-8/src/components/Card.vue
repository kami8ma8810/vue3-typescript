<script setup lang="ts"></script>
<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped>
.card {
  padding: 1em;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.2);
}
</style>
