<script setup lang="ts"></script>
<template>
  <div class="badge">
    <slot></slot>
  </div>
</template>
<style scoped>
.badge {
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0 1em;
}
.badge:hover {
  cursor: pointer;
}
.badge + .badge {
  margin-left: 1em;
}
</style>
