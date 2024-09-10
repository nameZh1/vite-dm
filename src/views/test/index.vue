<script setup lang="ts" name="test">
import { useThrottle } from '@/hooks/useTools';
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';

// 创建防抖函数
const debouncedFn = useThrottle((par: string) => {
  ElMessage.success('111 ' + par);
  console.log('防抖函数触发:', par);
}, 1000);

// 点击按钮时调用该函数
const test = () => {
  debouncedFn('222'); // 调用防抖函数
};

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
