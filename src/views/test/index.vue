<script setup lang="ts" name="test">
import { onMounted } from 'vue';
import { triggerFileUpload } from '@/hooks/useFileHandle'


onMounted(() => { });
</script>
<template>
  <div class="test-container">
    <el-button type="primary" @click="triggerFileUpload({ multiple: true })">测试</el-button>
    <div class="loading"></div>
  </div>

</template>

<style scoped lang="scss">
.test-container {
  width: 100%;
  height: 100%;

}
</style>
