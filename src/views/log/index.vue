<script setup lang="ts" name="Log">
import { onMounted, ref } from 'vue';
const theme = ref('light')

onMounted(() => { });
</script>
<template>
  <div :class="{ 'log-container': true, 'log-container-light': theme === 'light', 'log-container-dark': theme === 'dark' }">
    <el-button type="primary" class="pointer" @click="() => { 
      theme = theme === 'light'? 'dark' : 'light'
    }">test</el-button>

    <div class="loading"></div>
  </div>
</template>

<style scoped lang="scss">
.log-container {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  transition: background-color .3s;
  color: var(--primary-color)
}

.log-container-light {
  --background-color: #fff;
}

.log-container-dark {
  --background-color: #333;
}
</style>
