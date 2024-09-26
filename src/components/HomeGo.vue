<script setup lang="ts" name="homeGo">
import { onMounted, onUnmounted } from "vue";

// 传参
const props = defineProps({
  x: {
    type: String,
    default: "50%",
  },
  y: {
    type: String,
    default: "50%",
  },
});

onMounted(() => {});

onUnmounted(() => {});
</script>

<template>
  <div class="homeGo-container">
    <div class="homeGo-container-bg"></div>
    <slot name="main"> </slot>
  </div>
</template>

<style scoped lang="scss">
.homeGo-container {
  width: 100%;
  height: 200vh;
  &-bg {
    // width: 100%;
    height: 100vh;
    background-image: url("@/assets/img/bg.png");
    background-size: cover;
    background-position: center;
  }

  /* 自定义整个滚动条 */
  &::-webkit-scrollbar {
    width: 12px; /* 设置滚动条的宽度 */
  }

  /* 自定义滚动条轨道 */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* 设置轨道的背景颜色 */
  }

  /* 自定义滚动条的滑块（thumb） */
  &::-webkit-scrollbar-thumb {
    background: #888; /* 设置滑块的背景颜色 */
  }

  /* 当滑块悬停或活动时自定义滚动条的滑块 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 设置滑块在悬停状态下的背景颜色 */
  }

  
  
}
</style>
