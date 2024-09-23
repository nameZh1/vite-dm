<script setup lang="ts" name="emptyPage">
defineProps<{ msg?: string }>()
</script>

<template>
  <div class="emptyPage-container">
    <h1 v-if="msg">{{ msg }}</h1>
    <h1>emptyPage</h1>
  </div>
</template>

<style scoped lang="scss">
.emptyPage-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
