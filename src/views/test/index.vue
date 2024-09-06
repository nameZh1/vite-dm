<script setup lang="ts" name="test">
import { useDebounce } from '@/hooks/useTools';
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';

const test = () => {
  useDebounce(() => {
    ElMessage.success('111')
    console.log('1')
  }, 20)
}

onMounted(() => { });
</script>
<template>
  <div class="test-container">
    <el-button @click="test">111</el-button>
  </div>
</template>

<style scoped lang="scss">
.test-container {
  width: 100%;
  height: 100%;

}
</style>
