<script setup lang="ts" name="test">
import { onMounted } from 'vue';
import { triggerFileDownload, triggerFileUpload } from '@/hooks/useFileHandle'


onMounted(() => { });
</script>
<template>
  <div class="test-container">
    <el-button type="primary" @click="triggerFileUpload({ multiple: true, fileSize: 2 })">上传测试</el-button>
    <el-button type="primary" @click="triggerFileDownload({ url: '', fileName: 'test' })">下载测试</el-button>
    <div class="loading"></div>
  </div>
</template>

<style scoped lang="scss">
.test-container {
  width: 100%;
  height: 100%;

}
</style>
